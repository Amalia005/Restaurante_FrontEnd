import { X, Trash2, MessageSquare } from "lucide-react";
import type { CartItem } from "../types/menu";

interface CartPanelProps {
  cartItems: CartItem[];
  onClose: () => void;
  onRemoveItem: (itemId: string) => void;
  onAddNote: (itemId: string) => void;
  onCheckout: () => void;
}

export function CartPanel({
  cartItems,
  onClose,
  onRemoveItem,
  onAddNote,
  onCheckout,
}: CartPanelProps) {
  const total = cartItems.reduce(
    (sum, item) => sum + item.dish.price * item.quantity,
    0
  );

  return (
    <div className="fixed inset-0 bg-black/30 z-50 flex items-end sm:items-center justify-center">
      <div className="bg-white w-full sm:max-w-lg sm:rounded-t-2xl rounded-t-2xl max-h-[90vh] flex flex-col">
        <div className="sticky top-0 bg-white z-10 flex justify-between items-center p-4 border-b border-orange-100">
          <h2 className="text-gray-900">Pedido Actual</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-orange-50 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              Tu pedido está vacío
            </div>
          ) : (
            <div className="space-y-3">
              {cartItems.map((item) => (
                <div
                  key={item.dish.id}
                  className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg"
                >
                  <div className="flex-1">
                    <h3 className="text-gray-900 mb-1">{item.dish.name}</h3>
                    <p className="text-gray-600">
                      Cantidad: {item.quantity}
                    </p>
                    {item.note && (
                      <p className="text-orange-700 mt-1">
                        Nota: {item.note}
                      </p>
                    )}
                  </div>
                  <div className="text-right flex flex-col items-end gap-2">
                    <span className="text-orange-600">
                      ${(item.dish.price * item.quantity).toLocaleString()}
                    </span>
                    <div className="flex gap-1">
                      <button
                        onClick={() => onAddNote(item.dish.id)}
                        className="p-2 hover:bg-orange-100 rounded-full transition-colors"
                        title="Agregar nota"
                      >
                        <MessageSquare className="w-4 h-4 text-orange-600" />
                      </button>
                      <button
                        onClick={() => onRemoveItem(item.dish.id)}
                        className="p-2 hover:bg-red-100 rounded-full transition-colors"
                        title="Eliminar"
                      >
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="sticky bottom-0 bg-white border-t border-orange-100 p-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-900">Total:</span>
              <span className="text-orange-600">
                ${total.toLocaleString()}
              </span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl transition-colors"
            >
              Pagar pedido
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
