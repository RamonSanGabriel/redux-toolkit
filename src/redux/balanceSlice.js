export const balanceInitialState = {
  amount: 100,
};

export const balanceReducer = (state = balanceInitialState, action) => {
  switch (action.type) {
    case 'balance/DEPOSIT':
      return { ...state, amount: state.amount + action.payload };
    case 'balance/WITHDRAW':
      return { ...state, amount: state.amount - action.payload };
    default:
      return state;
  }
};

export const deposit = (newBalance) => {
  return {
    type: 'balance/DEPOSIT',
    payload: newBalance,
  };
};

export const withdraw = (newBalance) => {
  return {
    type: 'balance/WITHDRAW',
    payload: newBalance,
  };
};
