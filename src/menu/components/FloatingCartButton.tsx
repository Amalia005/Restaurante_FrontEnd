import { ShoppingCart } from "lucide-react";

interface FloatingCartButtonProps {
  itemCount: number;
  onClick: () => void;
}

export function FloatingCartButton({ itemCount, onClick }: FloatingCartButtonProps) {
  if (itemCount === 0) return null;

  return (
    <button
      onClick={onClick}
      className="
        fixed bottom-6 right-6
        w-16 h-16
        rounded-full shadow-lg
        flex items-center justify-center
        transition-all z-40 hover:scale-110
      "
      // 🔶 color del botón del carrito
      style={{ backgroundColor: "#f97316" }}  // naranja fuerte
    >
      <ShoppingCart className="w-6 h-6 text-white" />

      {itemCount > 0 && (
        <span
          className="
            absolute -top-1 -right-1
            w-6 h-6 rounded-full
            flex items-center justify-center
            text-[10px] font-semibold text-white
          "
          // 🔴 color del circulito con el número
          style={{ backgroundColor: "#ef4444" }}  // rojo
        >
          {itemCount}
        </span>
      )}
    </button>
  );
}
