import { auth } from "@/app/_lib/auth";
import { BASE_URL } from "@/constant/constant";
import { NextResponse } from "next/server";

export async function POST(req) {
    const session = await auth();

    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams, room } = await req.json();
    
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${session.user.token}`);
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        checkIn: searchParams.checkIn,
        checkOut: searchParams.checkOut,
        rateKey: room?.RatePlans?.RatePlan?.[0].RateKey,
        rooms: [
            {
                adults: Number(searchParams.adult),
                childrens: Number(searchParams.children),
                childAges: Array.from({ length: searchParams.children }, (_, i) =>
                    Math.floor(Math.random() * (7 - 4) + 4)
                ).join(","),
            },
        ],
    });

    const response = await fetch(`${BASE_URL}/hotel/confirm-rate`, {
        method: "POST",
        headers: myHeaders,
        body: raw,
    });

    const data = await response.json();
    return NextResponse.json(data);
}