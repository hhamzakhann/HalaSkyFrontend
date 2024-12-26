"use client";

import { DatePicker } from "antd";
const { RangePicker } = DatePicker;

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

const dateFormat = "YYYY/MM/DD";

function DateSelector({ size = "large", label, labelClasses, className }) {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label
          className={`text-xs font-normal mb-1 inline-block ${labelClasses}`}
        >
          {label}
        </label>
      )}
      <RangePicker
        defaultValue={[
          dayjs("2015/01/01", dateFormat),
          dayjs("2015/01/01", dateFormat),
        ]}
        format={dateFormat}
        size={size}
      />
    </div>
  );
}

export default DateSelector;
