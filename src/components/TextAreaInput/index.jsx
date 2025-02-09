import { Input } from 'antd';

const { TextArea } = Input;

const TextAreaInput = ({ options }) => {
  return <TextArea placeholder={options.placeholder} maxLength={options.max} />;
};

export default TextAreaInput;
