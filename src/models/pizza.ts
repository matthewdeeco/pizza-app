export interface PizzaSize {
  id: string;
  name: string;
  price: number;
  imageSize: string;
  maxIngredients: number;
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
