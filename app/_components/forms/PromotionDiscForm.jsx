'use client'

import { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

export default function PromoDurationPicker() {
  const [dateRange, setDateRange] = useState([
    new Date("2024-11-25"),
    new Date("2024-12-30"),
  ]);
  const [startDate, endDate] = dateRange;

  const CustomInput = forwardRef(({ value, onClick }, ref) => {
    const handleDateClick = (e) => {
      e.preventDefault();
      onClick(); 
    };

    return (
      <button
        type="button"
        onClick={handleDateClick}
        ref={ref}
        className="w-full text-left px-4 py-2 bg-lightGray border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:outline-none"
      >
        {value}
      </button>
    );
  });

  return (
    <form>
      <div className="grid grid-cols-2 gap-y-5 gap-x-4">

        <div className="col-span-full">
          <input
            type="text"
            placeholder='E.G., "Summer Flash Sale"'
            className="w-full px-4 py-2 bg-lightGray border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:outline-none"
          />
        </div>

        <select defaultValue="perc" className="w-full px-4 py-2 bg-lightGray border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:outline-none">
          <option value="perc">Percentage</option>
          <option value="-">--</option>
        </select>

        <input
          type="text"
          placeholder="E.G., 20% off"
          className="w-full px-4 py-2 bg-lightGray border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:outline-none"
        />

        <div className="col-span-full">
          <select defaultValue="flights" className="w-full px-4 py-2 bg-lightGray border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:outline-none">
            <option value="flights">Flights</option>
            <option value="-">--</option>
          </select>
        </div>

        <div>
          <label htmlFor="promo-code" className="text-sm font-medium text-gray-700 block mb-1">
            Promo Code
          </label>
          <input
            type="text"
            placeholder="E.G., TRAVEL20"
            className="w-full px-4 py-2 bg-lightGray border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:outline-none"
          />
        </div>

        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">Promotion Duration</label>
          <DatePicker
            selectsRange
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => setDateRange(update)}
            customInput={
              <CustomInput
                value={
                  startDate && endDate
                    ? `${format(startDate, "dd/MM/yy")} - ${format(endDate, "dd/MM/yy")}`
                    : "Select date range"
                }
              />
            }
            dateFormat="dd/MM/yy"
            className="hidden"
            withPortal
          />
        </div>
        <select defaultValue="minspend" className="w-full px-4 py-2 bg-lightGray border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:outline-none">
          <option value="minspend">Minimum Spend</option>
          <option value="-">--</option>
        </select>

        <div>
          <input
            type="text"
            placeholder="E.G., $200"
            className="w-full px-4 py-2 bg-lightGray border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="col-span-full py-3 px-7 bg-accent text-black rounded-md hover:bg-accent-dark focus:ring-2 focus:ring-accent"
        >
          Create Promo
        </button>

      </div>
    </form>
  );
}
