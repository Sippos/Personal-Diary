function EntryForm ({onClose}) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
                <h2 className="text-2xl font-bold">Add New Entry</h2>
            </div>
            <form className="mt-6 space-y-4">
                <input type="text" placeholder="Title" className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />

                <input type="date" className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"/>

                <input type="text" placeholder="Image URl" className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />

                <textarea placeholder="Write your diary entry..." className="min-h-32 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"/>

                <div className="flex justify-end gap-3">
                <button type="submit" onClick={onClose} className="rounded-lg border border-slate-300 px-4 py-2 font-medium text-slate-700 hover:bg-slate-100" >Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default EntryForm