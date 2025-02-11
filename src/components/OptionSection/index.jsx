import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const OptionSection = () => {
  const question = useSelector((state) =>
    state.selectedQuestionId.data === null
      ? null
      : state.survey.data.questions[state.selectedQuestionId.data],
  );

  return (
    <OptionSectionWrapper>
      <Title>문항 옵션</Title>
      {question ? <></> : ' 질문을 선택해주세요.'}
    </OptionSectionWrapper>
  );
};

const OptionSectionWrapper = styled.div`
  height: 100%;
  background-color: #ffffff;
  border-left: 1px solid #dddddd;
`;

const Title = styled.div`
  font-weight: 500;
  background-color: #f0f0f0;
  border-bottom: 1px solid #dddddd;
  padding: 10px 0;
  text-align: center;
`;

export default OptionSection;
