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

export default function PromotionDiscountManagment() {
  return (
    <>
      <DashboardHeader title="Promotion & Discount Management">
        <SearchInput className="!w-48" />
      </DashboardHeader>
      <DashboardMainContainer>
        <div className="grid grid-cols-1 md:grid-cols-[45%_55%] gap-x-4 gap-y-4 items-start">
          <Card varient="large">
            <PromotionDiscForm />
          </Card>

          <div className="h-full overflow-auto space-y-4">
            <Card varient="large" className={`${spartanFont.className}`}>
              <h2>Summer Flash Sale</h2>
              <div className="grid grid-cols-1 xl:grid-cols-[330px_1fr] gap-2  w-full">
                <div className="grid grid-cols-8 gap-1">
                  <div className="col-span-4 text-base font-light">
                    Percentage:
                  </div>
                  <div className="col-span-4 text-base font-normal">
                    20% Off
                  </div>
                  <div className="col-span-4 text-base font-light">
                    Apply On:
                  </div>
                  <div className="col-span-4 text-base font-normal">
                    Flights
                  </div>
                  <div className="col-span-4 text-base font-light">
                    Promo Code:
                  </div>
                  <div className="col-span-4 text-base font-normal">
                    Flight2024
                  </div>
                  <div className="col-span-4 text-base font-light">
                    Promo Duration:
                  </div>
                  <div className="col-span-4 text-base font-normal">
                    25/11/24 - 26/12/24
                  </div>
                  <div className="col-span-4 text-base font-light">Status:</div>
                  <div className="col-span-4 text-base font-normal">Active</div>
                </div>

                <div className="flex items-center justify-between gap-3 xl:space-y-3 xl:block">
                  <ButtonCustom className="w-full !text-xs" size="medium">
                    Edit
                  </ButtonCustom>
                  <ButtonCustom className="w-full !text-xs" size="medium">
                    Delete
                  </ButtonCustom>
                  <ButtonCustom className="w-full !text-xs" size="medium">
                    Pause
                  </ButtonCustom>
                </div>
              </div>
            </Card>
            <Card varient="large" className={`${spartanFont.className}`}>
              <h2>Summer Flash Sale</h2>
              <div className="grid grid-cols-1 xl:grid-cols-[330px_1fr] gap-2  w-full">
                <div className="grid grid-cols-8 gap-1">
                  <div className="col-span-4 text-base font-light">
                    Percentage:
                  </div>
                  <div className="col-span-4 text-base font-normal">
                    20% Off
                  </div>
                  <div className="col-span-4 text-base font-light">
                    Apply On:
                  </div>
                  <div className="col-span-4 text-base font-normal">
                    Flights
                  </div>
                  <div className="col-span-4 text-base font-light">
                    Promo Code:
                  </div>
                  <div className="col-span-4 text-base font-normal">
                    Flight2024
                  </div>
                  <div className="col-span-4 text-base font-light">
                    Promo Duration:
                  </div>
                  <div className="col-span-4 text-base font-normal">
                    25/11/24 - 26/12/24
                  </div>
                  <div className="col-span-4 text-base font-light">Status:</div>
                  <div className="col-span-4 text-base font-normal">Active</div>
                </div>

                <div className="flex items-center justify-between gap-3 xl:space-y-3 xl:block">
                  <ButtonCustom className="w-full !text-xs" size="medium">
                    Edit
                  </ButtonCustom>
                  <ButtonCustom className="w-full !text-xs" size="medium">
                    Delete
                  </ButtonCustom>
                  <ButtonCustom className="w-full !text-xs" size="medium">
                    Pause
                  </ButtonCustom>
                </div>
              </div>
            </Card>
            <Card varient="large" className={`${spartanFont.className}`}>
              <h2>Summer Flash Sale</h2>
              <div className="grid grid-cols-1 xl:grid-cols-[330px_1fr] gap-2  w-full">
                <div className="grid grid-cols-8 gap-1">
                  <div className="col-span-4 text-base font-light">
                    Percentage:
                  </div>
                  <div className="col-span-4 text-base font-normal">
                    20% Off
                  </div>
                  <div className="col-span-4 text-base font-light">
                    Apply On:
                  </div>
                  <div className="col-span-4 text-base font-normal">
                    Flights
                  </div>
                  <div className="col-span-4 text-base font-light">
                    Promo Code:
                  </div>
                  <div className="col-span-4 text-base font-normal">
                    Flight2024
                  </div>
                  <div className="col-span-4 text-base font-light">
                    Promo Duration:
                  </div>
                  <div className="col-span-4 text-base font-normal">
                    25/11/24 - 26/12/24
                  </div>
                  <div className="col-span-4 text-base font-light">Status:</div>
                  <div className="col-span-4 text-base font-normal">Active</div>
                </div>

                <div className="flex items-center justify-between gap-3 xl:space-y-3 xl:block">
                  <ButtonCustom className="w-full !text-xs" size="medium">
                    Edit
                  </ButtonCustom>
                  <ButtonCustom className="w-full !text-xs" size="medium">
                    Delete
                  </ButtonCustom>
                  <ButtonCustom className="w-full !text-xs" size="medium">
                    Pause
                  </ButtonCustom>
                </div>
              </div>
            </Card>
            <Card varient="large" className={`${spartanFont.className}`}>
              <h2>Summer Flash Sale</h2>
              <div className="grid grid-cols-1 xl:grid-cols-[330px_1fr] gap-2  w-full">
                <div className="grid grid-cols-8 gap-1">
                  <div className="col-span-4 text-base font-light">
                    Percentage:
                  </div>
                  <div className="col-span-4 text-base font-normal">
                    20% Off
                  </div>
                  <div className="col-span-4 text-base font-light">
                    Apply On:
                  </div>
                  <div className="col-span-4 text-base font-normal">
                    Flights
                  </div>
                  <div className="col-span-4 text-base font-light">
                    Promo Code:
                  </div>
                  <div className="col-span-4 text-base font-normal">
                    Flight2024
                  </div>
                  <div className="col-span-4 text-base font-light">
                    Promo Duration:
                  </div>
                  <div className="col-span-4 text-base font-normal">
                    25/11/24 - 26/12/24
                  </div>
                  <div className="col-span-4 text-base font-light">Status:</div>
                  <div className="col-span-4 text-base font-normal">Active</div>
                </div>

                <div className="flex items-center justify-between gap-3 xl:space-y-3 xl:block">
                  <ButtonCustom className="w-full !text-xs" size="medium">
                    Edit
                  </ButtonCustom>
                  <ButtonCustom className="w-full !text-xs" size="medium">
                    Delete
                  </ButtonCustom>
                  <ButtonCustom className="w-full !text-xs" size="medium">
                    Pause
                  </ButtonCustom>
                </div>
              </div>
            </Card>
            <Card varient="large" className={`${spartanFont.className}`}>
              <h2>Summer Flash Sale</h2>
              <div className="grid grid-cols-1 xl:grid-cols-[330px_1fr] gap-2  w-full">
                <div className="grid grid-cols-8 gap-1">
                  <div className="col-span-4 text-base font-light">
                    Percentage:
                  </div>
                  <div className="col-span-4 text-base font-normal">
                    20% Off
                  </div>
                  <div className="col-span-4 text-base font-light">
                    Apply On:
                  </div>
                  <div className="col-span-4 text-base font-normal">
                    Flights
                  </div>
                  <div className="col-span-4 text-base font-light">
                    Promo Code:
                  </div>
                  <div className="col-span-4 text-base font-normal">
                    Flight2024
                  </div>
                  <div className="col-span-4 text-base font-light">
                    Promo Duration:
                  </div>
                  <div className="col-span-4 text-base font-normal">
                    25/11/24 - 26/12/24
                  </div>
                  <div className="col-span-4 text-base font-light">Status:</div>
                  <div className="col-span-4 text-base font-normal">Active</div>
                </div>

                <div className="flex items-center justify-between gap-3 xl:space-y-3 xl:block">
                  <ButtonCustom className="w-full !text-xs" size="medium">
                    Edit
                  </ButtonCustom>
                  <ButtonCustom className="w-full !text-xs" size="medium">
                    Delete
                  </ButtonCustom>
                  <ButtonCustom className="w-full !text-xs" size="medium">
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
