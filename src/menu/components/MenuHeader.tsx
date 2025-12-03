import { MoreVertical } from "lucide-react";

interface MenuHeaderProps {
  isVisible: boolean;
}

export function MenuHeader({ isVisible }: MenuHeaderProps) {
  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-white z-40 border-b border-orange-100 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-3">
        <h1 className="text-orange-700">Donde la Vita</h1>
        <button className="p-2 hover:bg-orange-50 rounded-full transition-colors">
          <MoreVertical className="w-5 h-5 text-orange-700" />
        </button>
      </div>
    </header>
  );
}
