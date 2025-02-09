import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Popover } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';

const AddButton = ({ addQuestion }) => {
  const [open, setOpen] = useState(false);
  const handleOpenChange = (open) => {
    setOpen(open);
  };

  return (
    <AddButtonWrapper>
      <Popover
        onOpenChange={handleOpenChange}
        open={open}
        placement="right"
        content={
          <div>
            <ButtonWrapper
              type="text"
              onClick={() => {
                setOpen(false);
                addQuestion('select');
              }}
            >
              객관식
            </ButtonWrapper>
            <ButtonWrapper
              type="text"
              onClick={() => {
                setOpen(false);
                addQuestion('text');
              }}
            >
              단답식
            </ButtonWrapper>
            <ButtonWrapper
              type="text"
              onClick={() => {
                setOpen(false);
                addQuestion('textarea');
              }}
            >
              서술식
            </ButtonWrapper>
          </div>
        }
        trigger="click"
      >
        <IconButton>
          <PlusCircleOutlined />
        </IconButton>
      </Popover>
    </AddButtonWrapper>
  );
};
const ButtonWrapper = styled(Button)`
  display: block;
`;
const AddButtonWrapper = styled.div`
  text-align: center;
`;
const IconButton = styled.button`
  background: none;
  border: none;
  outline: none;
  font-size: 2.5rem;
  padding: 0;
  cursor: pointer;
`;

export default AddButton;
