import { useState, useEffect } from "react"
import Header from "./components/Header"
import DiaryList from "./components/DiaryList"
import ViewEntryModal from "./components/ViewEntryModal"
import AddEntryModal from "./components/AddEntryModal"



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
    success: true,
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

  {selectedEntry && (
    <ViewEntryModal
    selectedEntry={selectedEntry}
    onDeleteEntry={handleDeleteEntry}
    onClose={() => setSelectedEntry(null)}
    />
)}

  {isFormOpen && (
    <AddEntryModal
      onClose={() => setIsFormOpen(false)}
      onAddEntry={handleAddEntry}
    />
  )}
  </div>
  )
}


export default App