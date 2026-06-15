import { useState, useEffect } from "react"
import Header from "./components/Header"
import DiaryList from "./components/DiaryList"
import EntryForm from "./components/EntryForm"


function App() {
  const [entries, setEntries] = useState(() => {
    const savedEntries = localStorage.getItem("diaryEntries")

    if (savedEntries) {
      return JSON.parse(savedEntries)
    }
    return []
  })

  const [isFormOpen, setIsFormOpen] = useState(false)
  const [selectedEntry, setSelectedEntry] = useState(null)

  function handleAddEntry(newEntry) {
    const entryAlreadyExists = entries.some(
      (entry) => entry.date === newEntry.date
    )
    if (entryAlreadyExists) {
      return {
        success: false,
        message: "You already wrote an entry for this day. Come back tomorrow."
      }
    }
  setEntries((currentEntries) => [newEntry, ...currentEntries])
  setIsFormOpen(false)

  return {
    sucess: true,
  }
}

  function handleDeleteEntry(entryID) {
    setEntries((currentEntries) => 
    currentEntries.filter((entry) => entry.id !== entryID)
    )
    setSelectedEntry(null)
  }

  useEffect(() => {
    localStorage.setItem("diaryEntries", JSON.stringify(entries))
  }, [entries])

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
    <main className="mx-auto max-w-6xl px-4 py-8">
    <Header />

    <div className="mb-6 flex justify-end">
    <button onClick={() => setIsFormOpen(true)}
    className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl text-white shadow-lg  hover:bg-blue-700
    sm:static sm:h-auto sm:w-auto sm:rounded-lg
    sm:px-4 sm:py-2 sm:text-base"

    >Add</button>
    </div>

    <DiaryList
    entries={entries}
    onSelectEntry={setSelectedEntry}
    />
    </main>

    {isFormOpen && (
      <EntryForm onClose={() => setIsFormOpen(false)} 
      onAddEntry={handleAddEntry}/>
    )}

    {selectedEntry && (
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
        <button
          onClick={() => handleDeleteEntry(selectedEntry.id)}
          className="rounded-lg bg-red-600 px-4 py-2 font-medium text-white hover:bg-red-700"
        >
          Delete
        </button>

        <button
          onClick={() => setSelectedEntry(null)}
          className="rounded-lg bg-slate-900 px-4 py-2 font-medium text-white hover:bg-slate-700"
        >
          Close
        </button>
      </div>
      </div>
    </div>
  </div>
)}
    </div>
  )
}


export default App