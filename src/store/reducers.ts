import { combineReducers } from 'redux';
import { ActionType } from 'typesafe-actions';

import { AppStatus } from '../models/app-status';
import { Pizza, PizzaSize, PizzaCrust, PizzaIngredient } from '../models/pizza';

import * as actions from './actions';

export const pizzaReducer = (state = {} as Pizza, action: ActionType<typeof actions>) => {
  switch (action.type) {
    case 'CREATE_PIZZA':
      return {} as Pizza;
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
    case 'CREATE_PIZZA':
      return AppStatus.CREATE_PIZZA;
    case 'EDIT_PIZZA':
      return AppStatus.CREATE_PIZZA;
    case 'CHECKOUT_PIZZA':
      return AppStatus.CHECKOUT_PIZZA;
    case 'CONFIRM_ORDER':
      return AppStatus.ORDER_CONFIRMED;
    default:
      return state;
  }
};

export const pizzaSizes = (
  state = {
    sm: {
      id: 'sm',
      name: 'Small',
      price: 8,
      maxToppings: 5,
    },
    md: {
      id: 'md',
      name: 'Medium',
      price: 10,
      maxToppings: 7,
    },
    lg: {
      id: 'lg',
      name: 'Large',
      price: 12,
      maxToppings: 9,
    },
  } as Record<PizzaSize['id'], PizzaSize>,
) => state;

export const pizzaCrusts = (
  state = {
    thin: {
      id: 'thin',
      name: 'Thin',
      price: 2,
      imageUrl: '/icons8-compress-100.png',
    },
    thick: {
      id: 'thick',
      name: 'Thick',
      price: 4,
      imageUrl: '/icons8-enlarge-100.png',
    },
  } as Record<PizzaCrust['id'], PizzaCrust>,
) => state;

export const pizzaToppings = (
  state = {
    maxFreeToppings: 3,
    pricePerTopping: 0.5,
    ingredients: {
      pepperoni: {
        id: 'pepperoni',
        name: 'Pepperoni',
        imageUrl: '/ingredients/pepperoni.svg',
      },
      mushroom: {
        id: 'mushroom',
        name: 'Mushrooms',
        imageUrl: '/ingredients/mushroom.svg',
      },
      onion: { id: 'onion', name: 'Onions', imageUrl: '/ingredients/onion.svg' },
      sausage: {
        id: 'sausage',
        name: 'Sausage',
        imageUrl: '/ingredients/sausage.svg',
      },
      bacon: { id: 'bacon', name: 'Bacon', imageUrl: '/ingredients/bacon.svg' },
      cheese: {
        id: 'cheese',
        name: 'Extra Cheese',
        imageUrl: '/ingredients/cheese.svg',
      },
      olive: {
        id: 'olive',
        name: 'Black Olives',
        imageUrl: '/ingredients/olives.svg',
      },
      pepper: {
        id: 'pepper',
        name: 'Green Pepper',
        imageUrl: '/ingredients/green-pepper.svg',
      },
      pineapple: {
        id: 'pineapple',
        name: 'Pineapple',
        imageUrl: '/ingredients/pineapple.svg',
      },
      spinach: {
        id: 'spinach',
        name: 'Spinach',
        imageUrl: '/ingredients/spinach.svg',
      },
    } as Record<PizzaIngredient['id'], PizzaIngredient>,
  },
) => state;

const rootReducer = combineReducers({
  pizza: pizzaReducer,
  appStatus: appStatusReducer,
  pizzaSizes,
  pizzaCrusts,
  pizzaToppings,
});

export default rootReducer;
