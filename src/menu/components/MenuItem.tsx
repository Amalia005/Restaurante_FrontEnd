import type { Dish } from "../types/menu";
import { ImageWithFallback } from "./ImageWithFallback";

interface MenuItemProps {
  dish: Dish;
  onClick: () => void;
}

export function MenuItem({ dish, onClick }: MenuItemProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-3 p-3 w-full hover:bg-orange-50 transition-colors rounded-lg"
    >
      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-orange-100">
        <ImageWithFallback
          src={dish.image}
          alt={dish.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left">
        <h3 className="text-gray-900">{dish.name}</h3>
      </div>
      <div className="text-orange-600">
        ${dish.price.toLocaleString()}
      </div>
    </button>
  );
}
