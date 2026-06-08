import DiaryCard from "./DiaryCard";

function DiaryList({entries}) {
    if (entries.length === 0) {
        return (
            <p className="rounded-xl bg-white p-6 text-slate-600 shadow-sm">No diary entries yet. Add your first entry.</p>
        )
    }
    return (
        <section className="grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
            {entries.map((entry) => (
                <DiaryCard key={entry.id} entry={entry} />
            ))}
        </section>
    )
}

export default DiaryList