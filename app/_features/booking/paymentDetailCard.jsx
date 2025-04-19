import { Input } from "@/components/ui/input";
import Image from "next/image";
import cardOptions from "@/public/Group 1000002202.png";

export const PaymentDetailCard = ({ setPaymentDetail, paymentDetail }) => {
  return (
    <>
      <div className="bg-white rounded-[20px] mt-5 p-4">
        <div class="grid grid-flow-col grid-rows-5 gap-4">
          <div>
            <Input
              className="h-[41px] placeholder:text-[#BABABA]"
              placeholder="Enter First Name"
              onChange={(e) =>
                setPaymentDetail({
                  ...paymentDetail,
                  firstName: e?.target?.value?.trim(),
                })
              }
            />
          </div>
          <div>
            <Input
              className="h-[41px] placeholder:text-[#BABABA]"
              placeholder="Enter Number"
              onChange={(e) =>
                setPaymentDetail({
                  ...paymentDetail,
                  contactNumber: e?.target?.value?.trim(),
                })
              }
            />
          </div>
          <div>
            <Input
              className="h-[41px] placeholder:text-[#BABABA]"
              placeholder="Zip Code"
              onChange={(e) =>
                setPaymentDetail({
                  ...paymentDetail,
                  zipCode: e?.target?.value?.trim(),
                })
              }
            />
          </div>
          <div className="col-span-2 row-span-2 placeholder:text-[#BABABA]">
            <textarea
              className="w-[100%] h-[100%] rounded-md border border-input p-2 placeholder:text-[#BABABA]"
              placeholder="Address (Optional)"
              onChange={(e) =>
                setPaymentDetail({
                  ...paymentDetail,
                  address: e?.target?.value?.trim(),
                })
              }
            />
          </div>
          <div>
            <Input
              className="h-[41px] placeholder:text-[#BABABA]"
              placeholder="Enter Last Name"
              onChange={(e) =>
                setPaymentDetail({
                  ...paymentDetail,
                  lastName: e?.target?.value?.trim(),
                })
              }
            />
          </div>
          <div>
            <Input
              className="h-[41px] placeholder:text-[#BABABA]"
              placeholder="Country"
              onChange={(e) =>
                setPaymentDetail({
                  ...paymentDetail,
                  country: e?.target?.value?.trim(),
                })
              }
            />
          </div>
          <div></div>
          <div>
            <Input
              className="h-[41px] placeholder:text-[#BABABA]"
              placeholder="Enter Email"
              onChange={(e) =>
                setPaymentDetail({
                  ...paymentDetail,
                  email: e?.target?.value?.trim(),
                })
              }
            />
          </div>
          <div>
            <Input
              className="h-[41px] placeholder:text-[#BABABA]"
              placeholder="State or City"
              onChange={(e) =>
                setPaymentDetail({
                  ...paymentDetail,
                  state: e?.target?.value?.trim(),
                })
              }
            />
          </div>
          <div></div>
        </div>
        <div className="mt-3">
          <div>
            <p>Card Details</p>
          </div>
          <div className="flex items-center gap-3">
            <Input
              className="h-[41px] placeholder:text-[#BABABA] w-[280px]"
              placeholder="Card Number*"
              type="number"
              maxLength={16}
              onChange={(e) =>
                setPaymentDetail({
                  ...paymentDetail,
                  cardNumber: e?.target?.value?.trim(),
                })
              }
            />
            <Input
              className="h-[41px] placeholder:text-[#BABABA] w-[140px]"
              placeholder="Expiry Month*"
              type="number"
              maxLength={2}
              min={1}
              max={12}
              onChange={(e) =>
                setPaymentDetail({
                  ...paymentDetail,
                  expiryMonth: e?.target?.value?.trim(),
                })
              }
            />
            <Input
              className="h-[41px] placeholder:text-[#BABABA] w-[140px]"
              placeholder="Expiry Year*"
              type="number"
              maxLength={4}
              min={2025}
              onChange={(e) =>
                setPaymentDetail({
                  ...paymentDetail,
                  expiryYear: e?.target?.value?.trim(),
                })
              }
            />
            <Input
              className="h-[41px] placeholder:text-[#BABABA] w-[120px]"
              placeholder="CVV*"
              type="text"
              // maxLength={3}
              onChange={(e) =>
                setPaymentDetail({
                  ...paymentDetail,
                  cvvCode: e?.target?.value?.trim(),
                })
              }
            />
          </div>
          <div className="my-5">
            <Image src={cardOptions} alt="" width={198} height={20} />
          </div>
        </div>
      </div>
    </>
  );
};
