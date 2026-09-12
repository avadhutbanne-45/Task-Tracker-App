import { useState } from 'react'

function App() {
  const [visible, setVisible] = useState(true)

  const workshops = [
    {
      id: 1,
      title: 'Web Development',
      mentor: 'Amit Shah',
      duration: '3 Days'
    },
    {
      id: 2,
      title: 'Python Programming',
      mentor: 'Neha Joshi',
      duration: '4 Days'
    },
    {
      id: 3,
      title: 'Database Basics',
      mentor: 'Rohan Kulkarni',
      duration: '2 Days'
    },
    {
      id: 4,
      title: 'UI Design',
      mentor: 'Priya More',
      duration: '3 Days'
    }
  ]

  return (
    <div className="page">
      <header>
        <span>LEARNING HUB</span>
        <h1>Upcoming Workshops</h1>
        <p>Explore the workshops available for students.</p>
      </header>

      <main>
        <button
          className="view-button"
          onClick={() => setVisible(!visible)}
        >
          {visible ? 'Hide Workshops' : 'View Workshops'}
        </button>

        {visible ? (
          <div className="workshops">
            {workshops.map((workshop) => (
              <div className="workshop" key={workshop.id}>
                <div className="number">{workshop.id}</div>
                <h2>{workshop.title}</h2>
                <p>Mentor: {workshop.mentor}</p>
                <strong>{workshop.duration}</strong>
              </div>
            ))}
          </div>
        ) : (
          <div className="hidden-box">
            <h2>Workshops Hidden</h2>
            <p>Click the button to display the available workshops.</p>
          </div>
        )}
      </main>
    </div>
  )
}

export default App