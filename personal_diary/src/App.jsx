import { useState } from "react"
import Header from "./components/Header"
import DiaryList from "./components/DiaryList"
import sampleEntries from "./components/data/sampleEntries"


function App() {
  const [entries, setEntries] = useState(sampleEntries)
  const [selectedEntry, setSelectedEntry] = useState(null)
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <>
    <Header />
    <DiaryList entries={entries} />
    </>
  )
}

export default App