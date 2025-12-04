export interface Dish {
  id: string;
  name: string;
  price: number;
  category: string;
  image?: string;        // opcional
  description?: string;  // opcional
  ingredients: string[];
  // opcionalmente, si quieres guardar el id original:
  _id?: string;
}

export interface CartItem {
  dish: Dish;
  quantity: number;
  note?: string;
}
