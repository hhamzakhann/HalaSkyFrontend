"use client"

import React, { useState } from "react";

const BookingSummary = () => {
  const [activeTab, setActiveTab] = useState("Flight");

  const data = {
    total: 4930,
    totalBooking: 3930,
    cancelled: 500,
    pending: 500,
  };

  const chartColors = {
    totalBooking: "#52ACFF", 
    cancelled: "#FBE947",    
    pending: "#EF7BE3",
  };

  const totalPercent = (value) => (value / data.total) * 100;

  return (
    <div className="w-full bg-white rounded-lg shadow p-6 pr-10 flex items-center justify-between space-x-6">
      {/* Chart */}
      <div className="relative min-w-[212px] h-[212px]">
        <svg className="transform -rotate-90" viewBox="0 0 36 36">
          <circle
            cx="18"
            cy="18"
            r="16"
            stroke="#52ACFF"
            strokeWidth="4"
            fill="none"
          />
          <circle
            cx="18"
            cy="18"
            r="16"
            stroke={chartColors.totalBooking}
            strokeWidth="4"
            strokeDasharray={`${totalPercent(data.totalBooking)}, 100`}
            fill="none"
          />
          <circle
            cx="18"
            cy="18"
            r="16"
            stroke={chartColors.cancelled}
            strokeWidth="4"
            strokeDasharray={`${totalPercent(data.cancelled)}, 100`}
            fill="none"
            strokeDashoffset={`-${totalPercent(data.totalBooking)}`}
          />
          <circle
            cx="18"
            cy="18"
            r="16"
            stroke={chartColors.pending}
            strokeWidth="4"
            strokeDasharray={`${totalPercent(data.pending)}, 100`}
            fill="none"
            strokeDashoffset={`-${
              totalPercent(data.totalBooking + data.cancelled)
            }`}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-5xl">{data.total}</span>
          <span className="text-sm text-gray-300">Total</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col w-full justify-center space-y-4 gap-6">
        {/* Tabs */}
        <div className="flex space-x-2">
          {["Flight", "Hotels"].map((tab) => (
            <button
              key={tab}
              className={`px-8 py-2.5 rounded-full border text-sm font-medium ${
                activeTab === tab
                  ? "text-black border-black"
                  : "text-[#D9D9D9] border-[#D9D9D9] cursor-not-allowed"
              }`}
              onClick={() => setActiveTab(tab)}
              disabled={tab !== "Flight"}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Labels */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2" style={{ background: chartColors.totalBooking }}></span>
              <span>Total Booking</span>
            </div>
            <span>{data.totalBooking}</span>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2" style={{ background: chartColors.cancelled }}></span>
              <span>Cancelled Booking</span>
            </div>
            <span>{data.cancelled}</span>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2" style={{ background: chartColors.pending }}></span>
              <span>Pending Bookings</span>
            </div>
            <span>{data.pending}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;
