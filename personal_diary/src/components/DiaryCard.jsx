function DiaryCard ({entry}) {
    return (
        <article className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg">
            <img src={entry.image} alt={entry.title} className="h-48 w-full object-cover"/>

        <div className="p-4">
            <p className="text-sm font-medium text-gray-500">{entry.date}</p>
            <h2 className="mt-2 text-xl font-bold">{entry.title}</h2>
            <p className="mt-2 text-gray-700">{entry.content}</p>
        </div>
        </article>
    )
}

export default DiaryCard