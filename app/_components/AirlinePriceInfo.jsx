import ButtonCustom from "@/app/_components/Button";

export default function AirlinePriceInfo({ className }) {
  return (
    <div
      className={`p-2 pl-8 rounded-full bg-white flex items-center gap-9 ${className}`}
    >
      <div className="w-full">
        <p className="font-normal text-xs">Starting from</p>
        <p>
          <span className="font-medium text-xl">$567.00</span>
          <span className="font-normal text-xs">/Tax</span>
        </p>
      </div>
      <ButtonCustom
        varient="accent"
        shape="circle"
        size="large"
        className="!w-auto !border !border-blueDark"
      >
        &rarr;
      </ButtonCustom>
    </div>
  );
}
