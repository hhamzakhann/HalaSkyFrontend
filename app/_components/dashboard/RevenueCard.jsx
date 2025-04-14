

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Revenue from "./Revenue";
import revenueIcon from '@/public/total-revenue.svg'
import monthlyRevenueIcon from '@/public/monthly-revenue.svg'

export default function RevenueCard({ icon, title, number }) {
	return (
		
		<div className="flex bg-[#15193C] w-[36%] text-white rounded-2xl pb-4 px-2 md:pb-7 pt-2">
		<div className="px-5 py-4 grid gap-3 lg:gap-5 w-full">
			<h4 className="text-2xl">Revenue</h4>
			<div className="flex gap-x-2">
				<Button className="bg-transparent rounded-3xl text-white border px-8 py-3 hover:bg-[#FCCD27] hover:text-black hover:border-black">Flight</Button>
				<Button className="bg-transparent rounded-3xl text-white border px-8 py-3 hover:bg-[#FCCD27] hover:text-black hover:border-black">Hotels</Button>
			</div>
			<div className="mt-4  grid gap-y-5">
			<div>
			<Revenue title="Total Daily Revenue" number="$5000" icon={revenueIcon}/>
			<div className="border-b border-opacity-[0.1] border-white md:pb-8 md:mb-3"></div>
			</div>
			<div>
			<Revenue title="Total Weekly Revenue" number="$5000" icon={revenueIcon}/>
			<div className="border-b border-opacity-[0.1] border-white md:pb-8 md:mb-3"></div>
			</div>
			<div>
			<Revenue title="Total Monthly Revenue" number="$5000" icon={monthlyRevenueIcon}/>
			</div>
			</div>
			
		</div>
	</div>
	);
}
