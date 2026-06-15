import { useState } from "react"


function EntryForm ({onClose, onAddEntry}) {
    const [title, setTitle] = useState ("")
    const [date, setDate] = useState ("")
    const [image, setImage] = useState ("")
    const [content, setContent] = useState ("")
    const [error, setError] = useState ("")
    
    function handleSubmit(event) {
        event.preventDefault()

        if (!title || !date || !image || !content) {
            setError("Please fill in all fields")
            return
        }
        setError("")
    
        const newEntry = {
            id: Date.now(),
            title: title,
            date: date,
            image: image,
            content: content,
        }
        const result = onAddEntry(newEntry)

        if (!result.success) {
            setError(result.message)
            return
        }
        setError("")
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
                <h2 className="text-2xl font-bold text-slate-900">Add New Entry</h2>
                {error && (
                    <p className="mt-4 rounded-lg bg-red-100 px-3 py-2 text-sm text-red-700">{error}</p>
                )}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <input type="text" placeholder="Title" 
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />

                <input type="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"/>

                <input type="text" placeholder="Image URl"
                value={image}
                onChange={(event) => setImage(event.target.value)}className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />

                <textarea placeholder="Write your diary entry..."
                value={content}
                onChange={(event) => setContent(event.target.value)}
                className="min-h-32 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"/>

                <div className="flex justify-end gap-3 pt-2">
                <button type="button" onClick={onClose} className="rounded-lg border border-slate-300 px-4 py-2 font-medium text-slate-700 hover:bg-slate-100" >Cancel</button>

                <button type="submit" className="rounded-lg border border-slate-300 px-4 py-2 font-medium text-slate-700 hover:bg-slate-100">Send</button>
                </div>
            </form>
            </div>
        </div>
    )
}


export default EntryForm