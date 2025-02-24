import axios from 'axios';

const deleteSurvey = async (surveyId) => {
  return axios.delete(`/surveys/${surveyId}`).then(() => {
    alert('삭제되었습니다.');
  });
};

export default deleteSurvey;
