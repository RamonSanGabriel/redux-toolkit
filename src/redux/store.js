import { combineReducers, createStore } from '@reduxjs/toolkit';
import { localReducer } from './localSlice';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { balanceReducer } from './balanceSlice';

const rootReducer = combineReducers({
  balance: balanceReducer,
  locale: localReducer,
});

export const store = createStore(rootReducer, devToolsEnhancer());
