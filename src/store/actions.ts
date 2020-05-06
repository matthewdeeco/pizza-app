import { action } from 'typesafe-actions';

import { Pizza } from '../models/pizza';

export const checkoutPizza = (pizza: Pizza) => action('CHECKOUT_PIZZA', pizza);
export const confirmOrder = () => action('CONFIRM_ORDER');
export const editPizza = () => action('EDIT_PIZZA');
