import { Radio, Space } from 'antd';

const SelectInput = ({ options }) => {
  return (
    <Space direction="vertical">
      {options.items.map((item) => (
        <Radio key={item}>{item}</Radio>
      ))}
    </Space>
  );
};

export default SelectInput;
