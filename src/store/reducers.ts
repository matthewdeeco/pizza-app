import { combineReducers } from 'redux';
import { ActionType } from 'typesafe-actions';

import { AppStatus } from '../models/app-status';
import { Pizza } from '../models/pizza';

import * as actions from './actions';

export const pizzaReducer = (state = {} as Pizza, action: ActionType<typeof actions>) => {
  switch (action.type) {
    case 'CHECKOUT_PIZZA':
      return action.payload;
    default:
      return state;
  }
};

export const appStatusReducer = (
  state = AppStatus.CREATE_PIZZA,
  action: ActionType<typeof actions>,
) => {
  switch (action.type) {
    case 'CHECKOUT_PIZZA':
      return AppStatus.CHECKOUT_PIZZA;
    case 'EDIT_PIZZA':
      return AppStatus.CREATE_PIZZA;
    case 'CONFIRM_ORDER':
      return AppStatus.ORDER_CONFIRMED;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  pizza: pizzaReducer,
  appStatus: appStatusReducer,
});

export default rootReducer;
