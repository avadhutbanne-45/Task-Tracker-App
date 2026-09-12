function CourseCard({ course, category, duration, mode }) {
  return (
    <article className="course-card">
      <div className="course-top">
        <span>{category}</span>
        <span>{mode}</span>
      </div>

      <h2>{course}</h2>

      <div className="course-info">
        <p>
          <strong>Duration</strong>
          {duration}
        </p>

        <p>
          <strong>Mode</strong>
          {mode}
        </p>
      </div>

      <button>Explore Course</button>
    </article>
  )
}

export default CourseCard