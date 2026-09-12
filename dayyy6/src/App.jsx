function App() {
  const projects = [
    {
      title: 'Weather Dashboard',
      type: 'Web Application',
      description: 'A responsive dashboard interface for displaying weather information.'
    },
    {
      title: 'Student Portal',
      type: 'College Project',
      description: 'A simple portal design for managing student information.'
    },
    {
      title: 'Book Store',
      type: 'Frontend Project',
      description: 'An online bookstore interface with books and categories.'
    }
  ]

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-indigo-950 px-6 py-12 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold tracking-[3px] text-indigo-300">
            MY PROJECTS
          </p>

          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            Things I Have Built
          </h1>

          <p className="mt-4 max-w-2xl text-indigo-200">
            A collection of projects created while learning modern web development.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-700">
                {project.type}
              </span>

              <h2 className="mt-6 text-2xl font-bold text-slate-900">
                {project.title}
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                {project.description}
              </p>

              <button className="mt-6 rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700">
                View Project
              </button>
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t bg-white px-6 py-6 text-center text-slate-500">
        <p>Built while learning React and Tailwind CSS.</p>
      </footer>
    </div>
  )
}

export default App