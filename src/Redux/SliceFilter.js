import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: ''
}

const toolkitSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    onChangeFilter(state, actions) {
      state.filter = actions.payload;
    },
  }
});

export const { onChangeFilter } = toolkitSlice.actions;
export default toolkitSlice.reducer;