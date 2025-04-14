import { BadgeCustom, DashboardHeader } from "@/app/_components/UI";
import DashboardMainContainer from "@/app/_components/UI/DashboardMainContainer";
import SearchInput from "@/app/_components/formControls/SearchInput";
import ModerationFilter from "@/app/_components/ModerationFilter";
import Card from "@/app/_components/Card";
import { Divider } from "antd";
import ButtonCustom from "@/app/_components/Button";
import { SelectInput } from "@/app/_components/formControls";
import { spartanFont } from "@/app/font";
import { PromotionDiscForm } from "@/app/_components/forms";
import Image from "next/image";
import PromotionIcon from '@/public/promotion.svg'
import EditIcom from '@/public/edit.svg'
import Trashcom from '@/public/trash.svg'
import PauseIcom from '@/public/pause.svg'

export default function PromotionDiscountManagment() {
  return (
    <>
      <DashboardHeader title="Promotion & Discount Management" icon={<Image src={PromotionIcon} />}>
        <SearchInput className="!w-48" />
      </DashboardHeader>
      <DashboardMainContainer>
        <div className="grid grid-cols-1 md:grid-cols-[45%_55%] gap-x-4 gap-y-4 items-start">
          <Card varient="large">
            <PromotionDiscForm />
          </Card>

          <div className="h-full overflow-auto space-y-4">
            <Card varient="large">
              <h2 className="font-medium text-lg">Summer Flash Sale</h2>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-6 w-full">
              <div className="grid grid-cols-8 gap-1 mt-2 gap-y-3">
                  <div className="col-span-4 text-sm font-light">
                    Percentage:
                  </div>
                  <div className="col-span-4 text-sm font-normal">
                    20% Off
                  </div>
                  <div className="col-span-4 text-sm font-light">
                    Apply On:
                  </div>
                  <div className="col-span-4 text-sm font-normal">
                    Flights
                  </div>
                  <div className="col-span-4 text-sm font-light">
                    Promo Code:
                  </div>
                  <div className="col-span-4 text-sm font-normal">
                    Flight2024
                  </div>
                  <div className="col-span-4 text-sm font-light">
                    Promo Duration:
                  </div>
                  <div className="col-span-4 text-sm font-normal">
                    25/11/24 - 26/12/24
                  </div>
                  <div className="col-span-4 text-sm font-light">Status:</div>
                  <div className="col-span-4 text-sm font-normal">Active</div>
                </div>

                <div className="flex items-center justify-between gap-3 xl:space-y-3 xl:block">
                  <ButtonCustom className="w-full !text-xs py-2 px-7 bg-lightGray text-black hover:bg-lightGray/90 rounded-lg" size="medium">
                  <Image src={EditIcom}/>
                    Edit
                  </ButtonCustom>
                  <ButtonCustom className="w-full !text-xs py-2 px-7  bg-[#FF6367] hover:bg-[#FF6367]/90 rounded-lg" size="medium">
                  <Image src={Trashcom}/>
                    Delete
                  </ButtonCustom>
                  <ButtonCustom className="w-full !text-xs py-2 px-7 bg-blue hover:bg-blue/90 rounded-lg" size="medium">
                  <Image src={PauseIcom}/>
                    Pause
                  </ButtonCustom>
                </div>
              </div>
            </Card>

          </div>
        </div>
      </DashboardMainContainer>
    </>
  );
}
