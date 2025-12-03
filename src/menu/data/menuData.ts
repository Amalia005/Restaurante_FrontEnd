import type { Dish } from "../types/menu";

export const menuData: Dish[] = [
  // Menús del día (combos con acompañamiento definido)
  {
    id: "m1",
    name: "Porotos con rienda + Huevo",
    price: 3800,
    category: "Menús del día",
    image:
      "https://images.unsplash.com/photo-1612504258838-fbf14fe4437d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZWFuJTIwYmVhbnMlMjBwb3JvdG9zJTIwZGlzaHxlbnwxfHx8fDE3NjQ1NTIxMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Plato económico del día, porotos con rienda acompañado de huevo",
    ingredients: ["Porotos", "Rienda", "Huevo"],
  },
  {
    id: "m4",
    name: "Porotos con rienda + Longaniza o Huevo + ensalada",
    price: 5500,
    category: "Menús del día",
    image:
      "https://images.unsplash.com/photo-1612504258838-fbf14fe4437d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZWFuJTIwYmVhbnMlMjBwb3JvdG9zJTIwZGlzaHxlbnwxfHx8fDE3NjQ1NTIxMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Porotos con rienda acompañado de longaniza o huevo y ensalada",
    ingredients: ["Porotos", "Rienda", "Longaniza o huevo", "Ensalada"],
  },
  {
    id: "m11",
    name: "1/4 de pollo + arroz o ensalada",
    price: 5200,
    category: "Menús del día",
    image:
      "https://images.unsplash.com/photo-1577194509876-4bb24787a641?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2FzdGVkJTIwY2hpY2tlbiUyMHF1YXJ0ZXJ8ZW58MXx8fHwxNjQ1NTIxMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Un cuarto de pollo con 1 agregado (arroz o ensalada)",
    ingredients: ["1/4 de pollo", "Arroz o ensalada"],
  },
  {
    id: "m12",
    name: "1/4 de pollo + papas mayo o papas fritas o puré)",
    price: 5500,
    category: "Menús del día",
    image:
      "https://images.unsplash.com/photo-1577194509876-4bb24787a641?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2FzdGVkJTIwY2hpY2tlbiUyMHF1YXJ0ZXJ8ZW58MXx8fHwxNjQ1NTIxMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Un cuarto de pollo con papas mayo, papas fritas o puré",
    ingredients: ["1/4 de pollo", "Papas mayo, papas fritas o puré"],
  },

  // Platos de fondo (platos a la carta)
  {
    id: "m2",
    name: "Truto o Pechuga arvejada",
    price: 6200,
    category: "Platos de fondo",
    image:
      "https://images.unsplash.com/photo-1762631934518-f75e233413ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwYnJlYXN0JTIwZ3JpbGxlZHxlbnwxfHx8fDE3NjQ0Mzc5MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Truto o pechuga arvejada con 2 agregados, ensalada y consomé",
    ingredients: [
      "Truto o pechuga",
      "Arvejas",
      "2 agregados a elección",
      "Ensalada",
      "Consomé",
    ],
  },
  {
    id: "m3",
    name: "Cazuela de vacuno",
    price: 6800,
    category: "Platos de fondo",
    image:
      "https://images.unsplash.com/photo-1638043139484-1534e2c14bcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWVmJTIwc291cCUyMGNhenVlbGF8ZW58MXx8fHwxNzY0NTUyMTIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Tradicional cazuela de vacuno con ensalada",
    ingredients: ["Carne de vacuno", "Papas", "Zapallo", "Choclo", "Ensalada"],
  },
  {
    id: "m7",
    name: "Pechuga apanada",
    price: 6800,
    category: "Platos de fondo",
    image:
      "https://images.unsplash.com/photo-1710143608680-6ed21d27fd82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVhZGVkJTIwY2hpY2tlbiUyMGN1dGxldHxlbnwxfHx8fDE3NjQ1NTIxMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Pechuga apanada con 2 agregados, ensalada y consomé",
    ingredients: [
      "Pechuga apanada",
      "2 agregados a elección",
      "Ensalada",
      "Consomé",
    ],
  },
  {
    id: "m8",
    name: "Bistec",
    price: 5800,
    category: "Platos de fondo",
    image:
      "https://images.unsplash.com/photo-1708615017161-2eff302d0389?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwYmVlZiUyMHN0ZWFrfGVufDF8fHx8MTc2NDUwNzU2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Bistec con 2 agregados, ensalada y consomé",
    ingredients: ["Bistec", "2 agregados a elección", "Ensalada", "Consomé"],
  },
  {
    id: "m9",
    name: "Pollo asado",
    price: 5800,
    category: "Platos de fondo",
    image:
      "https://images.unsplash.com/photo-1577194509876-4bb24787a641?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2FzdGVkJTIwY2hpY2tlbiUyMHF1YXJ0ZXJ8ZW58MXx8fHwxNjQ1NTIxMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Pollo asado con 2 agregados, ensalada y consomé",
    ingredients: [
      "Pollo asado",
      "2 agregados a elección",
      "Ensalada",
      "Consomé",
    ],
  },
  {
    id: "m10",
    name: "Pechuga a la plancha",
    price: 6200,
    category: "Platos de fondo",
    image:
      "https://images.unsplash.com/photo-1762631934518-f75e233413ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwYnJlYXN0JTIwZ3JpbGxlZHxlbnwxfHx8fDE3NjQ0Mzc5MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Pechuga a la plancha con 2 agregados, ensalada y consomé",
    ingredients: [
      "Pechuga a la plancha",
      "2 agregados a elección",
      "Ensalada",
      "Consomé",
    ],
  },
  {
    id: "m5",
    name: "Chuleta",
    price: 6800,
    category: "Platos de fondo",
    image:
      "https://images.unsplash.com/photo-1652378452875-5f80beafc549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3JrJTIwY2hvcCUyMGdyaWxsZWR8ZW58MXx8fHwxNzY0NTUyMTI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Chuleta con 2 agregados, ensalada y consomé",
    ingredients: ["Chuleta", "2 agregados a elección", "Ensalada", "Consomé"],
  },
  {
    id: "m6",
    name: "Carne mechada",
    price: 7500,
    category: "Platos de fondo",
    image:
      "https://images.unsplash.com/photo-1738703887298-e0a2f9b85058?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaHJlZGRlZCUyMGJlZWYlMjBtZWF0fGVufDF8fHx8MTc2NDU1MjEyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Carne mechada con 2 agregados, ensalada y consomé",
    ingredients: ["Carne mechada", "2 agregados a elección", "Ensalada", "Consomé"],
  },

  // Agregados
  {
    id: "a1",
    name: "Arroz",
    price: 0,
    category: "Agregados",
    image:
      "https://images.unsplash.com/photo-1743674452796-ad8d0cf38005?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHJpY2UlMjBib3dsfGVufDF8fHx8MTc2NDUxMDg3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Arroz blanco como agregado",
    ingredients: ["Arroz"],
  },
  {
    id: "a2",
    name: "Puré",
    price: 0,
    category: "Agregados",
    image:
      "https://images.unsplash.com/photo-1707616954324-99c89a78a20d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNoZWQlMjBwb3RhdG9lc3xlbnwxfHx8fDE3NjQ1MzM4MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Puré de papas casero",
    ingredients: ["Puré de papas"],
  },
  {
    id: "a3",
    name: "Papas mayo",
    price: 0,
    category: "Agregados",
    image:
      "https://images.unsplash.com/photo-1707616954324-99c89a78a20d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNoZWQlMjBwb3RhdG9lc3xlbnwxfHx8fDE3NjQ1MzM4MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Papas con mayonesa",
    ingredients: ["Papas", "Mayonesa"],
  },
  {
    id: "a4",
    name: "Papas fritas",
    price: 0,
    category: "Agregados",
    image:
      "https://images.unsplash.com/photo-1630431341973-02e1b662ec35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBmcmllc3xlbnwxfHx8fDE3NjQ0NzM2NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Papas fritas crocantes",
    ingredients: ["Papas fritas"],
  },
  {
    id: "a5",
    name: "Papas doradas",
    price: 0,
    category: "Agregados",
    image:
      "https://images.unsplash.com/photo-1630431341973-02e1b662ec35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBmcmllc3xlbnwxfHx8fDE3NjQ0NzM2NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Papas doradas al horno",
    ingredients: ["Papas doradas"],
  },

  // Bebestibles
  {
    id: "b1",
    name: "Bebida express",
    price: 850,
    category: "Bebestibles",
    image:
      "https://images.unsplash.com/photo-1501474587451-40f1e29a4223?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0JTIwZHJpbmslMjBib3R0bGVzfGVufDF8fHx8MTc2NDU1MjEyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Bebida express",
    ingredients: ["Bebida express"],
  },
  {
    id: "b2",
    name: "Mini",
    price: 850,
    category: "Bebestibles",
    image:
      "https://images.unsplash.com/photo-1501474587451-40f1e29a4223?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0JTIwZHJpbmslMjBib3R0bGVzfGVufDF8fHx8MTc2NDU1MjEyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Bebida mini",
    ingredients: ["Bebida mini"],
  },
  {
    id: "b3",
    name: "Medio Coca-Cola (Coca-Cola, Sprite, Fanta, etc)",
    price: 1500,
    category: "Bebestibles",
    image:
      "https://images.unsplash.com/photo-1501474587451-40f1e29a4223?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0JTIwZHJpbmslMjBib3R0bGVzfGVufDF8fHx8MTc2NDU1MjEyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Medio litro de Coca-Cola, Sprite, Fanta u otra bebida",
    ingredients: ["Coca-Cola, Sprite, Fanta, etc"],
  },
  {
    id: "b4",
    name: "Medio CCU (Bilz, Pap, Kem, etc)",
    price: 1300,
    category: "Bebestibles",
    image:
      "https://images.unsplash.com/photo-1501474587451-40f1e29a4223?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0JTIwZHJpbmslMjBib3R0bGVzfGVufDF8fHx8MTc2NDU1MjEyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Medio litro de Bilz, Pap, Kem u otra bebida CCU",
    ingredients: ["Bilz", "Pap", "Kem", "etc"],
  },
  {
    id: "b5",
    name: "Watts boca ancha",
    price: 1200,
    category: "Bebestibles",
    image:
      "https://images.unsplash.com/photo-1501474587451-40f1e29a4223?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0JTIwZHJpbmslMjBib3R0bGVzfGVufDF8fHx8MTc2NDU1MjEyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Bebida Watts boca ancha",
    ingredients: ["Watts"],
  },
  {
    id: "b6",
    name: "Bebida 1.5 Ltrs",
    price: 2500,
    category: "Bebestibles",
    image:
      "https://images.unsplash.com/photo-1501474587451-40f1e29a4223?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0JTIwZHJpbmslMjBib3R0bGVzfGVufDF8fHx8MTc2NDU1MjEyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Bebida 1.5 litros",
    ingredients: ["Bebida 1.5 litros"],
  },
];
