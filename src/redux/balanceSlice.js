import { createSlice } from '@reduxjs/toolkit';

export const balanceInitialState = {
  amount: 100,
};

/* export const deposit = createAction('balance/deposit');
export const withdraw = createAction('balance/withdraw');

export const balanceReducer = createReducer(balanceInitialState, (builder) =>
  builder
    .addCase(deposit, (state, action) => {
      state.amount += action.payload;
    })
    .addCase(withdraw, (state, action) => {
      state.amount -= action.payload;
    })
); */

export const balanceSlice = createSlice({
  name: 'balance',
  initialState: balanceInitialState,
  reducers: {
    deposit: (state, action) => {
      state.amount += action.payload;
    },
    withdraw: (state, action) => {
      state.amount -= action.payload;
    },
  },
});
export const { deposit, withdraw } = balanceSlice.actions;
export const balanceReducer = balanceSlice.reducer;
