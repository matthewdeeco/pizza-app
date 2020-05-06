export interface PizzaSize {
  id: string;
  name: string;
  price: number;
  maxIngredients: number;
  imageSize?: string;
}

export interface PizzaCrust {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

export interface PizzaIngredient {
  id: string;
  name: string;
  imageUrl: string;
}

export interface Pizza {
  size: PizzaSize['id'];
  crust: PizzaCrust['id'];
  ingredients: PizzaIngredient['id'][];
}
