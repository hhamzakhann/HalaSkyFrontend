import { Radio, Space } from "antd";

export default function RadioGroup({
  options = [],
  onChange = () => {},
  value = "",
  direction = "vertical",
}) {
  return (
    <Radio.Group onChange={onChange} value={value}>
      <Space direction={direction}>
        {options.map((option) => (
          <Radio value={option.value} key={option.value}>
            {option.label}
          </Radio>
        ))}
      </Space>
    </Radio.Group>
  );
}
