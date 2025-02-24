import axios from 'axios';

const putSurvey = (survey) => {
  axios
    .put(`/surveys/${survey.id}`, survey)
    .then(() => alert('저장되었습니다.'));
};

export default putSurvey;
