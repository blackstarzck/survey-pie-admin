import { Input } from 'antd';

const TextInput = ({ options }) => {
  return <Input placeholder={options.placeholder} maxLength={options.max} />;
};

export default TextInput;
