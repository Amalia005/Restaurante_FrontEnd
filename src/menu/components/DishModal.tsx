import { useState } from "react";
import { X, Plus, Minus } from "lucide-react";
import type { Dish } from "../types/menu";

interface DishModalProps {
  dish: Dish;
  onClose: () => void;
  onAdd: (quantity: number) => void;
}

export function DishModal({ dish, onClose, onAdd }: DishModalProps) {
  const [quantity, setQuantity] = useState(1);

  const handleConfirm = () => {
    onAdd(quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl max-w-md w-full mx-4 overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b border-orange-100">
          <h2 className="text-gray-900">{dish.name}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-orange-50 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="p-4 space-y-3">
          <p className="text-gray-700">{dish.description}</p>
          <p className="text-orange-700 font-medium">
            ${dish.price.toLocaleString()}
          </p>

          <div className="flex items-center gap-4 mt-2">
            <span className="text-gray-800">Cantidad:</span>
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="p-2 rounded-full border border-orange-200 hover:bg-orange-50"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-8 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="p-2 rounded-full border border-orange-200 hover:bg-orange-50"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="p-4 border-t border-orange-100">
          <button
            onClick={handleConfirm}
            className="w-full text-white py-3 rounded-xl transition-colors"
            style={{ backgroundColor: "#f97316" }} // mismo naranja que el carrito
          >
            Agregar al pedido
          </button>
        </div>
      </div>
    </div>
  );
}

