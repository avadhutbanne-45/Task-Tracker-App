function CourseHeader({ title, description }) {
  return (
    <header className="course-header">
      <div>
        <span>LEARNING CENTER</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="header-icon">LC</div>
    </header>
  )
}

export default CourseHeader