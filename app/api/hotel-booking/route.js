import { auth } from "@/app/_lib/auth";
import { BASE_URL } from "@/constant/constant";
import { NextResponse } from "next/server";

export async function POST(req) {
    const session = await auth();

    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { confirmPriceDetails, searchParams, hotel, room, paymentDetail } = await req.json();

    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${session.user.token}`);
    myHeaders.append("Content-Type", "application/json");

    const adults = Array.from({ length: searchParams.adult }, () => ({
        "type": "ADT",
        "firstName": "DOE",
        "lastName": "JOHN",
        "leadGuest": false,
        "email": '',
        "phone": ''
    }))

    if (adults[0]) {
        adults[0].leadGuest = true
        adults[0].email = paymentDetail.email
        adults[0].phone = paymentDetail.contactNumber
    }

    const childAges = searchParams.childAges?.split(',') || [];
    const children = childAges.map(age => ({
        type: "CHD",
        firstName: "William",
        lastName: "Shakespear",
        age: Number(age) || 0
    }));


    const raw = {
        "contactNumber": [
            { "phone": paymentDetail.contactNumber }
        ],
        "bookingKey": confirmPriceDetails.data.HotelPriceCheckRS.PriceCheckInfo.BookingKey,
        "email": paymentDetail.email,
        "from": searchParams.checkIn,
        "to": searchParams.checkOut,
        "amount": confirmPriceDetails?.data.HotelPriceCheckRS.PriceCheckInfo.HotelRateInfo.RateInfos.RateInfo[0].AmountAfterTax,
        "hotel_id": hotel.HotelInfo.HotelCode,
        "personList": adults,
        "roomList": [
            {
                "guests": [...adults, ...children]
            }
        ],

        "paymentDetail": {
            "firstName": paymentDetail.firstName,
            "lastName": paymentDetail.lastName,
            "type": "CC",
            "cardCode": paymentDetail.cvvCode,
            "cardNumber": paymentDetail.cardNumber,
            "expiryMonth": Number(paymentDetail.expiryMonth),
            "expiryYear": paymentDetail.expiryYear
        }

    }

    const response = await fetch(`${BASE_URL}/hotel/add-booking`, {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(raw),
    });

    const data = await response.json();

    console.log('data', JSON.stringify(response));

    return NextResponse.json(data);
}