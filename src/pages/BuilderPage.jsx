import { Col, Row } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import BuilderTitleInput from '../components/BuilderTitleInput';
import MainLayout from '../components/layouts/MainLayout';
import OptionSection from '../components/OptionSection';
import PreviewSection from '../components/PreviewSection';
import getSurvey from '../services/getSurvey';

const BuilderPage = () => {
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getSurvey(params.surveyId));
  }, [dispatch, params.surveyId]);

  if (error) {
    return 'error';
  }
  if (loading) {
    return 'loading';
  }

  return (
    <MainLayout selectedKeys={['builder']}>
      <Row>
        <Col flex="auto">
          <BuilderTitleInput />
          <PreviewSection />
        </Col>
        <Col flex="350px">
          <OptionSection />
        </Col>
      </Row>
    </MainLayout>
  );
};

export default BuilderPage;
