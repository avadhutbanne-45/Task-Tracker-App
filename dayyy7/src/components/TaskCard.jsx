function TaskCard({ task, onComplete, onRemove }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onComplete(task.id)}
        className="h-5 w-5 cursor-pointer"
      />

      <div className="flex-1">
        <p
          className={`font-medium ${
            task.completed
              ? 'text-slate-400 line-through'
              : 'text-slate-800'
          }`}
        >
          {task.title}
        </p>
      </div>

      <button
        onClick={() => onRemove(task.id)}
        className="rounded-lg bg-rose-500 px-4 py-2 text-sm font-semibold text-white hover:bg-rose-600"
      >
        Remove
      </button>
    </div>
  )
}

export default TaskCard