function DiaryCard ({entry}) {
    return (
        <article className="overflow-hidden rounded-xl bg-white shadow">
            <img src={entry.image} alt={entry.title} className="h-48 w-full object-cover"/>

        <div className="p-4">
            <p className="text-sm text-gray-500">{entry.date}</p>
            <h2 className="mt-2 text-xl font-bold">{entry.title}</h2>
            <p className="mt-2 text-gray-700">{entry.content}</p>
        </div>
        </article>
    )
}

export default DiaryCard