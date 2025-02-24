import { Col, Row } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import BuilderTitleInput from '../components/BuilderTitleInput';
import FloadingButton from '../components/FloadingButton';
import MainLayout from '../components/layouts/MainLayout';
import OptionSection from '../components/OptionSection';
import PreviewSection from '../components/PreviewSection';
import getSurvey from '../services/getSurvey';
import { setSelectedQuestionId } from '../store/selectedQuestionId/selectedQuestionIdSlice';
import { setSurvey } from '../store/survey/surveySlice';

const BuilderPage = () => {
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    if (params.surveyId) {
      dispatch(getSurvey(params.surveyId));
    } else {
      dispatch(
        setSurvey({
          title: '',
          questions: [],
        }),
      );
      dispatch(setSelectedQuestionId(null));
    }
  }, [dispatch, params.surveyId]);

  if (error) {
    return 'error';
  }
  if (loading) {
    return 'loading';
  }

  return (
    <MainLayout selectedKeys={['builder']} padding={0}>
      <Row style={{ height: '100%' }}>
        <Col flex="auto" style={{ padding: 30 }}>
          <BuilderTitleInput />
          <PreviewSection />
        </Col>
        <Col flex="250px">
          <OptionSection />
        </Col>
      </Row>
      <FloadingButton />
    </MainLayout>
  );
};

export default BuilderPage;
