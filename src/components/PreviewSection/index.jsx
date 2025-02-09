import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  addQuestion,
  deleteQuestion,
  moveDownQuestion,
  moveUpQuestion,
} from '../../store/survey/surveySlice';
import AddButton from '../AddButton';
import Body from '../Body';
import Card from '../Card';

const PreviewSection = () => {
  const questions = useSelector((state) => state.survey.data?.questions || []);
  const dispatch = useDispatch();

  const handleMoveUpQuestion = (index) => {
    if (index === 0) return;
    dispatch(moveUpQuestion(index));
  };
  const handleMoveDownQuestion = (index) => {
    if (index === questions.length - 1) return;
    dispatch(moveDownQuestion(index + 1));
  };
  const handleDeleteQuestion = (index) => {
    dispatch(deleteQuestion(index));
  };
  const handleAddQuestion = (type) => {
    dispatch(addQuestion(type));
  };
  return (
    <div>
      {questions.map((question, i) => (
        <Card
          key={i}
          title={question.title}
          desc={question.desc}
          onUpButtonClick={() => handleMoveUpQuestion(i)}
          onDownButtonClick={() => handleMoveDownQuestion(i)}
          onDeleteButtonClick={() => handleDeleteQuestion(i)}
        >
          <Body type={question.type} options={question.options} />
        </Card>
      ))}
      <AddButton addQuestion={handleAddQuestion} />
    </div>
  );
};

export default PreviewSection;
