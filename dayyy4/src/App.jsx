import FeedbackHeader from './components/FeedbackHeader'
import FeedbackForm from './components/FeedbackForm'

function App() {
  return (
    <div className="app">
      <FeedbackHeader
        title="Share Your Feedback"
        subtitle="Your thoughts help us create a better learning experience."
      />

      <main className="content">
        <FeedbackForm />
      </main>
    </div>
  )
}

export default App