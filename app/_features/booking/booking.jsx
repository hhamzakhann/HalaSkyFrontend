"use client";

import ButtonCustom from "@/app/_components/Button";
import Container from "@/app/_components/Container";
import { Input } from "@/components/ui/input";
import { useHotelStore } from "@/store/useHotelStore";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { HotelBookingCard } from "./hotelBookingCard";
import { PaymentDetailCard } from "./paymentDetailCard";
import { confirmHotelPrice, hotelBookNow } from "@/app/_lib/data-service";
import Modal from "@/app/_components/Modal";
import Image from "next/image";
import pasportImage from "@/public/Group.png";

export const Booking = ({ searchParams }) => {
  const { room, hotel } = useHotelStore();
  const [confirmPriceDetails, setConfirmPriceDetails] = useState({});
  const [paymentDetail, setPaymentDetail] = useState();
  const [subTotal, setSubTotal] = useState("");
  const [tax, setTax] = useState("");
  const [total, setTotal] = useState("");
  const [active, setActive] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();

  const backToHome = () => {
    setOpenModal(false);
    router.push("/hotels");
  };

  const backToHotel = useCallback(async () => {
    if (!room || !hotel) {
      router.push(`/hotels?${new URLSearchParams(searchParams)}`);
    } else {
      const response = await confirmHotelPrice(searchParams, room);
      if (
        response?.data?.HotelPriceCheckRS?.ApplicationResults?.status ===
        "Complete"
      ) {
        setConfirmPriceDetails(response);
        setSubTotal(
          response?.data?.HotelPriceCheckRS?.PriceCheckInfo?.HotelRateInfo
            ?.RateInfos?.RateInfo[0]?.AmountBeforeTax
        );
        setTax(
          Number(
            response?.data?.HotelPriceCheckRS?.PriceCheckInfo?.HotelRateInfo
              ?.RateInfos?.RateInfo[0]?.AmountAfterTax
          ) -
            Number(
              response?.data?.HotelPriceCheckRS?.PriceCheckInfo?.HotelRateInfo
                ?.RateInfos?.RateInfo[0]?.AmountBeforeTax
            )
        );
        setTotal(
          response?.data?.HotelPriceCheckRS?.PriceCheckInfo?.HotelRateInfo
            ?.RateInfos?.RateInfo[0]?.AmountAfterTax
        );
      }
    }
  }, [room, hotel, router, searchParams]);

  useEffect(() => {
    backToHotel();
  }, [backToHotel, room, router]);

  const bookNow = async () => {
    await hotelBookNow(
      confirmPriceDetails,
      searchParams,
      hotel,
      room,
      paymentDetail
    );
    setOpenModal(true);
  };

  return (
    <React.Fragment>
      <Container className="!p-0">
        <section className="p-0 md:px-4 md:py-3 relative">
          <div className="grid grid-cols-8 gap-6 mt-5">
            <div className="col-span-6 col-start-1 col-end-7">
              <div className="flex items-center gap-4 w-full border-b-2 border-b-[#DCDFDF] pb-3">
                <div
                  className={`${
                    active === 1 ? "text-xl font-semibold" : "text-base"
                  } text-[#1A1A1A] place-self-center`}
                >
                  Booking Detail
                </div>
                <div
                  className={`${
                    active === 2 ? "text-xl font-semibold" : "text-base"
                  } text-[#1A1A1A] place-self-center`}
                >
                  Payment
                </div>
              </div>
              {active === 1 ? (
                <HotelBookingCard
                  searchParams={searchParams}
                  hotel={hotel}
                  room={room}
                />
              ) : null}
              {active === 2 ? (
                <PaymentDetailCard
                  setPaymentDetail={setPaymentDetail}
                  paymentDetail={paymentDetail}
                />
              ) : null}
            </div>
            <div className="col-span-2 col-start-7 col-end-9">
              <div className="flex items-cnter w-full pb-4">
                <p className="text-sm font-medium text-[#1A1A1A] place-self-center">
                  Summary
                </p>
              </div>
              <div
                className={`rounded-[20px] px-9 py-5 ${
                  active === 1
                    ? "bg-[#06203B] h-[370px]"
                    : "bg-[#FFFFFF] h-[240px]"
                }`}
              >
                <div className="h-full flex flex-col justify-between">
                  <div>
                    {active === 1 && (
                      <div>
                        <Input
                          className="bg-[#374D62] border-[#F7FAFA1A] rounded-xl text-white h-[41px]"
                          placeholder="Enter Promo Code"
                        />
                      </div>
                    )}
                    <div className="flex items-center justify-between mt-5">
                      <p
                        className={`${
                          active === 1 ? "text-white" : "text-[#808080]"
                        } text-xs`}
                      >
                        Sub Total
                      </p>
                      <p
                        className={`${
                          active === 1 ? "text-white" : "text-[#808080]"
                        } text-xs`}
                      >
                        {`$ ${subTotal}`}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-5">
                      <p
                        className={`${
                          active === 1 ? "text-white" : "text-[#808080]"
                        } text-xs`}
                      >
                        Tax
                      </p>
                      <p
                        className={`${
                          active === 1 ? "text-white" : "text-[#808080]"
                        } text-xs`}
                      >
                        {`$ ${tax}`}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-5">
                      <p
                        className={`${
                          active === 1 ? "text-white" : "text-[#808080]"
                        } text-xs`}
                      >
                        Discount
                      </p>
                      <p className="text-xs text-[#FF6363]">$ 0</p>
                    </div>
                    <div className="flex items-center justify-between mt-5">
                      <p
                        className={`${
                          active === 1 ? "text-white" : "text-[#808080]"
                        } text-sm font-semibold`}
                      >
                        Total
                      </p>
                      <p
                        className={`${
                          active === 1 ? "text-white" : "text-[#808080]"
                        } text-sm font-semibold`}
                      >
                        {`$ ${total}`}
                      </p>
                    </div>
                  </div>
                  <div>
                    {active === 1 ? (
                      <ButtonCustom
                        className="w-full bg-[#FCCD27] text-[#15193C] hover:bg-[#FCCD27]"
                        onClick={() => setActive(2)}
                      >
                        Next
                      </ButtonCustom>
                    ) : (
                      ""
                    )}
                    {active === 2 ? (
                      <ButtonCustom
                        className="w-full bg-[#FCCD27] text-[#15193C] hover:bg-[#FCCD27] mt-3"
                        onClick={() => bookNow()}
                      >
                        Book Now
                      </ButtonCustom>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Modal
            classname="w-[429px] h-[429px]"
            open={openModal}
            onCancel={backToHome}
            footer={null}
          >
            <div className="flex flex-col text-center items-center gap-3 w-full py-[50px]">
              <div>
                <Image src={pasportImage} alt="" width={128} height={139} />
              </div>
              <div>
                <p className="text-[24px] font-medium">Booking Confirmed!</p>
              </div>
              <div>
                <p className="text-[14px] text-[#808080]">
                  Thank you for booking with us! Your reservation has been
                  successfully confirmed.
                </p>
              </div>
              <div>
                <ButtonCustom onClick={backToHome} className="bg-[#FCCD27] hover:bg-[#FCCD27] text-black w-[329px] h-[41px]">
                  back to Homepage
                </ButtonCustom>
              </div>
            </div>
          </Modal>
        </section>
      </Container>
    </React.Fragment>
  );
};
