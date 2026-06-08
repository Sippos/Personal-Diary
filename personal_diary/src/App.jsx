import { useState } from "react"
import Header from "./components/Header"
import DiaryList from "./components/DiaryList"
import sampleEntries from "./components/data/sampleEntries"
import EntryForm from "./components/EntryForm"


function App() {
  const [entries, setEntries] = useState(sampleEntries)
  const [selectedEntry, setSelectedEntry] = useState(null)
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
    <main className="mx-auto max-w-6xl px-4 py-8">
    <Header />

    <button onClick={() => setIsFormOpen(true)}
    className="mb-6 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
    >Add Entry</button>

    <DiaryList entries={entries} />
    </main>

    {isFormOpen && (
      <EntryForm onClose={() => setIsFormOpen(false)} />
    )}
    </div>
  )
}

export default App