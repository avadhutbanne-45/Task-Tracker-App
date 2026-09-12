import { useState } from 'react'

function FeedbackForm() {
  const [name, setName] = useState('')
  const [course, setCourse] = useState('')
  const [rating, setRating] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="form-card">
      <form onSubmit={handleSubmit}>
        <label>Student Name</label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your name"
          required
        />

        <label>Course</label>
        <select
          value={course}
          onChange={(event) => setCourse(event.target.value)}
          required
        >
          <option value="">Select a course</option>
          <option value="Web Development">Web Development</option>
          <option value="Python">Python</option>
          <option value="Data Analytics">Data Analytics</option>
          <option value="UI/UX Design">UI/UX Design</option>
        </select>

        <label>Rating</label>
        <select
          value={rating}
          onChange={(event) => setRating(event.target.value)}
          required
        >
          <option value="">Choose rating</option>
          <option value="Excellent">Excellent</option>
          <option value="Good">Good</option>
          <option value="Average">Average</option>
        </select>

        <label>Your Feedback</label>
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Write your feedback"
          rows="5"
          required
        ></textarea>

        <button type="submit">Submit Feedback</button>
      </form>

      {submitted && (
        <div className="success-box">
          <h3>Thank you, {name}!</h3>
          <p>Your feedback has been submitted successfully.</p>
        </div>
      )}
    </div>
  )
}

export default FeedbackForm