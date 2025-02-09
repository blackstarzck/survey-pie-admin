import fetcher from '../lib/fetcher';
import { setError, setLoading, setSurvey } from '../store/survey/surveySlice';

const getSurvey = (surveyId) => (dispatch, getState) => {
  setLoading(true);
  fetcher(`/surveys/${surveyId}`)
    .then((data) => {
      dispatch(setSurvey(data));
    })
    .catch((error) => {
      dispatch(setError(error));
    })
    .finally(() => {
      setLoading(false);
    });
};

export default getSurvey;
