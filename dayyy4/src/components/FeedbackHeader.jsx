function FeedbackHeader({ title, subtitle }) {
  return (
    <header className="feedback-header">
      <span>STUDENT VOICE</span>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  )
}

export default FeedbackHeader