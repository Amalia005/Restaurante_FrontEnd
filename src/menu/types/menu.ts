export interface Dish {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  ingredients: string[];
}

export interface CartItem {
  dish: Dish;
  quantity: number;
  note?: string;
}
