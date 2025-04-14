import { DashboardHeader } from "@/app/_components/UI";
import { MonthPicker } from "@/app/_components/MonthPicker";
import DashboardMainContainer from "@/app/_components/UI/DashboardMainContainer";
import dashIcon from "@/public/dashboard.svg";
import Image from "next/image";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import CountCard from "../_components/dashboard/CountCard";
import usersIcon from '@/public/users.svg'
import RevenueCard from "../_components/dashboard/RevenueCard";
import SalesChart from "../_components/dashboard/SalesChart";
import BookingSummary from "../_components/dashboard/BookingSummary";
import TopBookingCountries from "../_components/dashboard/TopBookingCountries";


export default function Dashboard({ children }) {
  return (
    <>
      
      <DashboardHeader title="Dashboard" icon={<Image src={dashIcon} />} >
        <div className="relative min-w-lg  border-[#D9D9D9]">
        <Search className="absolute left-3 top-1/2 h-6 w-6 -translate-y-1/2  text-[#D9D9D9]" />
        <Input className="pl-10 h-auto py-3 rounded-xl  placeholder:text-[#D9D9D9]" placeholder="Search" />
        </div>
        <MonthPicker classWrapper="ml-auto" />
      </DashboardHeader>
      
      <DashboardMainContainer>
        <div className="grid gap-y-6">
        <div className="divide-slate-300 flex flex-col md:flex-row items-center justify-between">
          <CountCard title="Total Users" number="134,835" icon={usersIcon}/>
          <CountCard title="Active Users" number="20,000" icon={usersIcon}/>
          <CountCard title="New Users" number="245" icon={usersIcon}/>
          <CountCard title="Total Hotels" number="207" icon={usersIcon}/>
          <CountCard title="Total Airlines" number="76" icon={usersIcon}/>
        </div>
        <div className="flex gap-x-4">
        <RevenueCard/>
        <SalesChart/>
        </div>
        <div className="flex md:gap-x-6 gap-x-4">
          <div className="w-[55%]">
          <BookingSummary/>
          </div>
          <div className="w-[45%]">
          <TopBookingCountries/>
          </div>
          
        </div>
        </div>
      </DashboardMainContainer>
    </>
  );
}
