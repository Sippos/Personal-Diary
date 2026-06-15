import EntryForm from "./EntryForm"

function AddEntryModal({ onClose, onAddEntry }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
                <h2 className="text-2xl font-bold text-slate-900">Add New Entry</h2>
                
                
                <EntryForm onClose={onClose} onAddEntry={onAddEntry} />
            </div>
        </div>
    )
}

export default AddEntryModal