function ViewEntryModal({ selectedEntry, onDeleteEntry, onClose }) {
  if (!selectedEntry) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
        <img
          src={selectedEntry.image}
          alt={selectedEntry.title}
          className="h-72 w-full object-cover"
        />

        <div className="p-6">
          <p className="text-sm font-medium text-slate-500">
            {selectedEntry.date}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            {selectedEntry.title}
          </h2>

          <p className="mt-4 whitespace-pre-line text-slate-700">
            {selectedEntry.content}
          </p>

          <div className="mt-6 flex justify-end gap-3">
            {/* Call the delete function passed from App.jsx */}
            <button
              onClick={() => onDeleteEntry(selectedEntry.id)}
              className="rounded-lg bg-red-600 px-4 py-2 font-medium text-white hover:bg-red-700"
            >
              Delete
            </button>

            <button
              onClick={onClose}
              className="rounded-lg bg-slate-900 px-4 py-2 font-medium text-white hover:bg-slate-700"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewEntryModal;