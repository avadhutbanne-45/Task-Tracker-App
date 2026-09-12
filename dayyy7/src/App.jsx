import { useState } from 'react'
import TaskList from './components/TaskList'

function App() {
  const [tasks, setTasks] = useState([])
  const [taskText, setTaskText] = useState('')

  const addTask = (event) => {
    event.preventDefault()

    const title = taskText.trim()

    if (!title) {
      return
    }

    const task = {
      id: Date.now(),
      title,
      completed: false
    }

    setTasks((currentTasks) => [...currentTasks, task])
    setTaskText('')
  }

  const completeTask = (id) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }

  const removeTask = (id) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== id)
    )
  }

  const completed = tasks.filter((task) => task.completed).length
  const remaining = tasks.length - completed

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-emerald-950 px-6 py-12 text-white">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold tracking-[3px] text-emerald-300">
            PERSONAL PLANNER
          </p>

          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            Daily Task Board
          </h1>

          <p className="mt-3 text-emerald-200">
            Organize your work and keep track of your progress.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-10">
        <section className="rounded-3xl bg-white p-6 shadow-lg sm:p-8">
          <form
            onSubmit={addTask}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <input
              type="text"
              value={taskText}
              onChange={(event) => setTaskText(event.target.value)}
              placeholder="What do you need to do?"
              className="flex-1 rounded-xl border border-slate-300 px-4 py-3 text-slate-700 outline-none focus:border-emerald-500"
            />

            <button
              type="submit"
              className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700"
            >
              Add Task
            </button>
          </form>

          <div className="mt-7 grid grid-cols-3 gap-3">
            <div className="rounded-xl bg-slate-100 p-4 text-center">
              <p className="text-xs font-semibold text-slate-500">
                TOTAL
              </p>
              <p className="mt-1 text-2xl font-bold text-slate-800">
                {tasks.length}
              </p>
            </div>

            <div className="rounded-xl bg-emerald-50 p-4 text-center">
              <p className="text-xs font-semibold text-emerald-600">
                DONE
              </p>
              <p className="mt-1 text-2xl font-bold text-emerald-700">
                {completed}
              </p>
            </div>

            <div className="rounded-xl bg-amber-50 p-4 text-center">
              <p className="text-xs font-semibold text-amber-600">
                LEFT
              </p>
              <p className="mt-1 text-2xl font-bold text-amber-700">
                {remaining}
              </p>
            </div>
          </div>

          <div className="mt-8">
            <TaskList
              tasks={tasks}
              onComplete={completeTask}
              onRemove={removeTask}
            />
          </div>
        </section>
      </main>

      <footer className="px-6 pb-8 text-center text-slate-500">
        <p>Plan it. Complete it. Keep moving.</p>
      </footer>
    </div>
  )
}

export default App