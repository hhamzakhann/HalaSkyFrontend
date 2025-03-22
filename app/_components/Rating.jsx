import Image from "next/image";

export default function Rating({ className, rate }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image
        src="/star.svg"
        width={20}
        height={20}
        className="object-cover"
        alt="star"
      />

      <div className="space-x-1 text-xs">
        <span>{rate}</span>
      </div>
    </div>
  );
}
