function ProgressCard({ subject, progress, onIncrease, onDecrease }) {
  return (
    <div className="progress-card">
      <div className="card-heading">
        <h2>{subject}</h2>
        <span>{progress}%</span>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="button-group">
        <button onClick={onDecrease}>−</button>
        <button onClick={onIncrease}>+</button>
      </div>
    </div>
  )
}

export default ProgressCard