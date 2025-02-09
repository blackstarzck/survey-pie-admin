import { DeleteOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import styled from 'styled-components';

const Card = ({
  title,
  desc,
  children,
  onUpButtonClick,
  onDownButtonClick,
  onDeleteButtonClick,
}) => {
  return (
    <CardWrapper>
      <Head>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
      </Head>
      <Body>{children}</Body>
      <ButtonGroupWrapper>
        <ButtonGroup>
          <Button type="text" onClick={onUpButtonClick} icon={<UpOutlined />} />
          <Button
            type="text"
            onClick={onDeleteButtonClick}
            icon={<DeleteOutlined />}
          />
          <Button
            type="text"
            onClick={onDownButtonClick}
            icon={<DownOutlined />}
          />
        </ButtonGroup>
      </ButtonGroupWrapper>
    </CardWrapper>
  );
};

const ButtonGroupWrapper = styled.div`
  position: absolute;
  left: 100%;
  top: 0;
  display: none;
`;
const ButtonGroup = styled.div`
  background-color: #ffffff;
  margin-left: 10px;
  border: 1px solid #dddddd;
  border-radius: 5px solid #dddddd;
`;
const CardWrapper = styled.div`
  width: 400px;
  margin: 30px auto;
  border: 1px solid #dddddd;
  background-color: #ffffff;
  position: relative;

  &:hover ${ButtonGroupWrapper} {
    display: block;
  }
`;
const Head = styled.div`
  border-bottom: 1px solid #dddddd;
  padding: 15px;
`;
const Title = styled.div`
  font-weight: 600;
`;
const Desc = styled.div`
  color: #666666;
  margin-left: 5px;
`;
const Body = styled.div`
  padding: 15px;
`;

export default Card;
