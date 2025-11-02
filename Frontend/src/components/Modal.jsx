
export default function Modal({ title, text, onClose, onSave, initialData = {} }) {
  return (
    <div
      id="modal"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-8"
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
    >
      <div className="w-full max-w-lg bg-background text-slate-900 rounded-xl shadow-xl ring-1 ring-slate-200 overflow-hidden">
        <header className="flex items-start justify-between px-6 py-4 border-b border-slate-100">
          <div>
            <h2 id="modal-title" className="text-lg text-white font-semibold">
              {title}
            </h2>
            {text && <p className="text-sm text-slate-500 mt-1">{text}</p>}
          </div>
          <div>
            <button
              type="button"
              onClick={() => onClose?.()}
              aria-label="Fechar"
              className="text-slate-400 hover:text-slate-600 transition"
            >
              ✕
            </button>
          </div>
        </header>

        <form
          className="px-6 py-6 grid grid-cols-1 gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const data = {
              name: form.name?.value,
              price: form.price?.value,
              image: form.image?.value,
            };
            onSave?.(data);
          }}
        >
          <label className="text-sm text-slate-600">Nome do produto</label>
          <input
            defaultValue={initialData.name || ""}
            name="name"
            placeholder="Ex: Notebook"
            type="text"
            required
            className="w-full px-3 py-2 border border-slate-200 rounded-md bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
          />

          <label className="text-sm text-slate-600">Preço</label>
          <input
            defaultValue={initialData.price || ""}
            name="price"
            placeholder="Ex: 1500"
            type="number"
            min="0"
            step="0.01"
            required
            className="w-full px-3 py-2 border border-slate-200 rounded-md bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
          />

          <label className="text-sm text-slate-600">URL da imagem</label>
          <input
            defaultValue={initialData.image || ""}
            name="image"
            placeholder="https://..."
            type="url"
            required
            className="w-full px-3 py-2 border border-slate-200 rounded-md bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
          />

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => onClose?.()}
              className="px-4 py-2 rounded-md bg-slate-100 text-slate-700 hover:bg-slate-200 transition"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-sky-600 text-white hover:bg-sky-700 transition"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}