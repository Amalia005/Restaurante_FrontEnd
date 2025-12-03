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
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const textarea = form.elements.namedItem("note") as HTMLTextAreaElement;
    onSave(textarea.value);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl max-w-md w-full mx-4 overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b border-orange-100">
          <h2 className="text-gray-900 text-sm md:text-base">
            Nota para: <span className="font-semibold">{dishName}</span>
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-orange-50 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div>
            <label
              htmlFor="note"
              className="block text-xs md:text-sm text-gray-700 mb-1"
            >
              Comentario para la cocina (opcional)
            </label>
            <textarea
              id="note"
              name="note"
              defaultValue={currentNote}
              className="w-full border border-orange-100 rounded-lg p-2 text-xs md:text-sm resize-none focus:outline-none focus:ring-1 focus:ring-orange-300"
              rows={3}
              placeholder="Ej: sin cebolla, poco aliño, etc."
            />
          </div>

          <div className="flex justify-end gap-2 pt-2 border-t border-orange-100">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-2 rounded-lg text-xs md:text-sm text-gray-700 border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg text-xs md:text-sm text-white transition-colors"
              style={{ backgroundColor: "#f97316" }} // mismo naranja que los otros botones
            >
              Guardar nota
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
