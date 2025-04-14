import React from "react";

const TopBookingCountries = () => {
  const bookings = [
    { country: "Saudia Arabia", count: 2435, color: "bg-[#6461FC]" },
    { country: "UAE", count: 1325, color: "bg-[#2AC80F]" },
    { country: "London", count: 735, color: "bg-[#FCCD27]" },
    { country: "China", count: 580, color: "bg-[#FF7D09]" },
    { country: "Pakistan", count: 428, color: "bg-[#52ACFF]" },
    { country: "Norway", count: 208, color: "bg-[#ED0006]" },
  ];

  const maxValue = Math.max(...bookings.map((b) => b.count));

  return (
    <div className="w-full bg-white p-6 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4">Top Booking Countries</h2>
      <div className="space-y-4">
        {bookings.map((b, idx) => {
          const widthPercent = (b.count / maxValue) * 100;
          return (
            <div className="gap-x-3 flex items-center" key={idx}>
              <div className="flex justify-between mb-1 md:min-w-[120px]">
                <span className="text-sm text-gray-700">{b.country}</span>
              </div>
              <div className="w-full h-3 bg-[rgba(0,0,0,0.1)] relative overflow-hidden">
              <div
                  className={`h-full ${b.color}  border-r-[3px] border-r-black`}
                  style={{ width: `${widthPercent}%` }}
                />
              </div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">{b.count}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopBookingCountries;
