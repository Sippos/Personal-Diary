import DiaryCard from "./DiaryCard";

function DiaryList({entries}) {
    return (
        <section className="grid gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
            {entries.map((entry) => (
                <DiaryCard key={entry.id} entry={entry} />
            ))}
        </section>
    )
}

export default DiaryList