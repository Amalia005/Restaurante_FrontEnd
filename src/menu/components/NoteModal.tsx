import { useState } from "react";
import { X } from "lucide-react";

interface NoteModalProps {
  currentNote: string;
  dishName: string;
  onClose: () => void;
  onSave: (note: string) => void;
}

export function NoteModal({
  currentNote,
  dishName,
  onClose,
  onSave,
}: NoteModalProps) {
  const [note, setNote] = useState(currentNote);

  const handleSave = () => {
    onSave(note);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl max-w-md w-full mx-4 overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b border-orange-100">
          <h2 className="text-gray-900">Nota para {dishName}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-orange-50 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="p-4">
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="w-full border border-orange-200 rounded-lg p-2 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Ej: sin cebolla, poco aliño..."
          />
        </div>

        <div className="p-4 border-t border-orange-100 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-orange-200 text-gray-700 hover:bg-orange-50"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600"
          >
            Guardar nota
          </button>
        </div>
      </div>
    </div>
  );
}
