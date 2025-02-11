import { configureStore } from '@reduxjs/toolkit';

import thunk from './middleware/thunk';
import selectedQuestionIdSliceReducer from './selectedQuestionId/selectedQuestionIdSlice';
import surveySliceReducer from './survey/surveySlice';

export default configureStore({
  reducer: {
    survey: surveySliceReducer,
    selectedQuestionId: selectedQuestionIdSliceReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
