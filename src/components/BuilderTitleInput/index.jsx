import { Input } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setTitle } from '../../store/survey/surveySlice';

const BuilderTitleInput = () => {
  const title = useSelector((state) => state.survey.data?.title || '');
  const dispatch = useDispatch();
  return (
    <Input
      placeholder="설문 제목을 입력해주세요."
      value={title}
      onChange={(e) => {
        // const newData = produce(data, (draft) => {
        //   draft.title = e.target.value;
        // });
        // setData(
        //   produce((draft) => {
        //     draft.title = e.target.value;
        //   }),
        // );
        dispatch(setTitle(e.target.value));
      }}
    />
  );
};

export default BuilderTitleInput;
