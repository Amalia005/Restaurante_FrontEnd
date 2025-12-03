import type { Dish } from "../types/menu";

export const menuData: Dish[] = [
  // Menús del día (combos con acompañamiento definido)
  {
    id: "m1",
    name: "ECONÓMICO: Porotos con rienda + Huevo",
    price: 3800,
    category: "Menús del día",
    image: "https://images.unsplash.com/....",
    description: "Plato económico del día con porotos con rienda acompañado de huevo",
    ingredients: ["Porotos", "Rienda", "Huevo"],
  },
  // … (todo el resto igual que ya lo tienes)
];
