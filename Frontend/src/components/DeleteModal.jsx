
export default function DeleteModal({ onClose, onConfirm, loading }) {
  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-8">
      <div className="w-full flex flex-col gap-3 p-8 max-w-lg bg-background">
        <h2 id="modal-title" className="text-lg text-white font-semibold">
          Tem certeza?
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Tem certeza que quer deletar esse produto? Esta ação não pode ser desfeita.
        </p>
        <div className="flex">
          <button
            onClick={() => onClose?.()}
            className="bg-gray-300 text-slate-900 px-4 py-2 rounded-md cursor-pointer mr-2"
            disabled={loading}
          >
            Cancelar
          </button>
          <button
            onClick={() => onConfirm?.()}
            className="bg-red-600 cursor-pointer text-white px-4 py-2 rounded-md"
            disabled={loading}
          >
            {loading ? "Deletando..." : "Deletar"}
          </button>
        </div>
      </div>
    </section>
  )
}