import { ShoppingCart } from "lucide-react";

interface FloatingCartButtonProps {
  itemCount: number;
  onClick: () => void;
}

export function FloatingCartButton({
  itemCount,
  onClick,
}: FloatingCartButtonProps) {
  if (itemCount === 0) return null;

  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 w-16 h-16 bg-orange-500 hover:bg-orange-600 rounded-full shadow-lg flex items-center justify-center transition-all z-40 hover:scale-110"
    >
      <ShoppingCart className="w-6 h-6 text-white" />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </button>
  );
}
