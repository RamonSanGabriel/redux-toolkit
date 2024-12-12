import { createSlice } from '@reduxjs/toolkit';

const localInitialState = {
  status: 'white',
};

/* export const localAction = createAction('local/localAction');

export const localReducer = createReducer(localInitialState, (builder) =>
  builder.addCase(localAction, (state, action) => {
    state.status = action.payload;
  })
); */

export const localSlice = createSlice({
  name: 'local',
  initialState: localInitialState,
  reducers: {
    localAction: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { localAction } = localSlice.actions;
export const localReducer = localSlice.reducer;
