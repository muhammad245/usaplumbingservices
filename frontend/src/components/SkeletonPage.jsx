function SkeletonPage() {
  return (
    <main className="animate-pulse">
      <div className="h-18 bg-brand-navy" />
      <div className="container-x py-10">
        <div className="mb-6 h-10 w-2/3 rounded bg-gray-200" />
        <div className="mb-3 h-5 w-full rounded bg-gray-200" />
        <div className="mb-3 h-5 w-5/6 rounded bg-gray-200" />
        <div className="h-10 w-40 rounded bg-gray-300" />
      </div>
      <div className="container-x grid gap-5 pb-12 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, idx) => (
          <div key={idx} className="rounded-xl bg-gray-100 p-6">
            <div className="mb-4 h-8 w-8 rounded bg-gray-300" />
            <div className="mb-3 h-4 w-2/3 rounded bg-gray-300" />
            <div className="mb-2 h-3 rounded bg-gray-200" />
            <div className="h-3 w-3/4 rounded bg-gray-200" />
          </div>
        ))}
      </div>
    </main>
  )
}

export default SkeletonPage
