import { action } from 'typesafe-actions';

import { Pizza } from '../models/pizza';

export const createPizza = () => action('CREATE_PIZZA');

export const editPizza = () => action('EDIT_PIZZA');

export const checkoutPizza = (pizza: Pizza) => action('CHECKOUT_PIZZA', pizza);

export const confirmOrder = (pizza: Pizza) => {
  // backend is non-existent for now
  fetch('/api/order-pizza', { method: 'post', body: JSON.stringify(pizza) });
  return action('CONFIRM_ORDER');
};
