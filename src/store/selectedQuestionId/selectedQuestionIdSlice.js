import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null, // ✅ string 또는 number로 저장하도록 유도
};

export const selectedQuestionIdSlice = createSlice({
  name: 'selectedQuestionId',
  initialState,
  reducers: {
    setSelectedQuestionId: (state, action) => {
      console.log('action.payload', action.payload);
      state.data = action.payload; // ✅ 객체가 아니라 단순 값만 저장
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSelectedQuestionId } = selectedQuestionIdSlice.actions;

export default selectedQuestionIdSlice.reducer;
