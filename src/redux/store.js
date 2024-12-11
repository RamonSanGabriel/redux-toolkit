/* import { combineReducers, createStore } from '@reduxjs/toolkit';
import { localReducer } from './localSlice';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { balanceReducer } from './balanceSlice';

const rootReducer = combineReducers({
  balance: balanceReducer,
  locale: localReducer,
});

export const store = createStore(rootReducer, devToolsEnhancer()); */

import { configureStore } from '@reduxjs/toolkit';
import { balanceReducer } from './balanceSlice';
import { localReducer } from './localSlice';

export const store = configureStore({
  reducer: {
    balance: balanceReducer,
    local: localReducer,
  },
});
