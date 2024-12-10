const localInitialState = {
  status: 'Failed',
};

// Redux reducer function  is responsible for managing the state related to the localization (locale) of the application
export const localReducer = (state = localInitialState, action) => {
  switch (action.type) {
    case 'locale/localAction':
      return { ...state, status: action.payload };
    default:
      return state;
  }
};

export const localAction = (newStatus) => {
  return {
    // Describes the type of action being dispatched
    type: 'locale/localAction',

    // Contain the actual data associated with the action
    payload: newStatus,
  };
};
