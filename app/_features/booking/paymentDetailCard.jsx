import { Input } from "@/components/ui/input";
import Image from "next/image";
import cardOptions from "@/public/Group 1000002202.png";

export const PaymentDetailCard = () => {
  return (
    <>
      <div className="bg-white rounded-[20px] mt-5 p-4">
        <div class="grid grid-flow-col grid-rows-4 gap-4">
          <div>
            <Input
              className="h-[41px] placeholder:text-[#BABABA]"
              placeholder="Enter Name"
            />
          </div>
          <div>
            <Input
              className="h-[41px] placeholder:text-[#BABABA]"
              placeholder="Enter Country"
            />
          </div>
          <div className="col-span-2 row-span-2 placeholder:text-[#BABABA]">
            <textarea
              className="w-[100%] h-[100%] rounded-md border border-input p-2 placeholder:text-[#BABABA]"
              placeholder="Address (Optional)"
            />
          </div>
          <div>
            <Input
              className="h-[41px] placeholder:text-[#BABABA]"
              placeholder="Enter Email"
            />
          </div>
          <div>
            <Input
              className="h-[41px] placeholder:text-[#BABABA]"
              placeholder="Enter State or City"
            />
          </div>
          <div>
            <Input
              className="h-[41px] placeholder:text-[#BABABA]"
              placeholder="Enter Number"
            />
          </div>
          <div>
            <Input
              className="h-[41px] placeholder:text-[#BABABA]"
              placeholder="Enter Zip Code"
            />
          </div>
        </div>
        <div className="mt-3">
          <div>
            <p>Card Details</p>
          </div>
          <div className="grid grid-col-7 gap-3 mt-3">
            <div className="col-span-1 col-start-1 col-end-2">
              <Input
                className="h-[41px] placeholder:text-[#BABABA]"
                placeholder="Card Number"
              />
            </div>
            <div className="col-span-1 col-start-2 col-end-3">
              <Input
                className="h-[41px] placeholder:text-[#BABABA]"
                placeholder="Expiry Date"
              />
            </div>
            <div className="col-span-1 col-start-3 col-end-4">
              <Input
                className="h-[41px] placeholder:text-[#BABABA]"
                placeholder="CVV"
              />
            </div>
            <div className="col-span-1 col-start-4 col-end-5"></div>
            <div className="col-span-1 col-start-5 col-end-6"></div>
            <div className="col-span-1 col-start-6 col-end-7"></div>
            <div className="col-span-1 col-start-7 col-end-8"></div>
          </div>
          <div className="my-5">
            <Image src={cardOptions} alt="" width={198} height={20} />
          </div>
        </div>
      </div>
    </>
  );
};
