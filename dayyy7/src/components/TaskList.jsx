import TaskCard from './TaskCard'

function TaskList({ tasks, onComplete, onRemove }) {
  if (tasks.length === 0) {
    return (
      <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
        <p className="text-slate-500">
          Your task list is empty.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onComplete={onComplete}
          onRemove={onRemove}
        />
      ))}
    </div>
  )
}

export default TaskList