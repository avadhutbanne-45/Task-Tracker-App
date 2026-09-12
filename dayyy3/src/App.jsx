import { useState } from 'react'
import ProgressHeader from './components/ProgressHeader'
import ProgressCard from './components/ProgressCard'

function App() {
  const [htmlProgress, setHtmlProgress] = useState(40)
  const [pythonProgress, setPythonProgress] = useState(55)
  const [reactProgress, setReactProgress] = useState(25)

  const increase = (value, setter) => {
    if (value < 100) {
      setter(value + 10)
    }
  }

  const decrease = (value, setter) => {
    if (value > 0) {
      setter(value - 10)
    }
  }

  return (
    <div className="app">
      <ProgressHeader
        title="Learning Progress"
        subtitle="Track your progress and keep improving your skills."
      />

      <main className="progress-container">
        <ProgressCard
          subject="HTML & CSS"
          progress={htmlProgress}
          onIncrease={() => increase(htmlProgress, setHtmlProgress)}
          onDecrease={() => decrease(htmlProgress, setHtmlProgress)}
        />

        <ProgressCard
          subject="Python Programming"
          progress={pythonProgress}
          onIncrease={() => increase(pythonProgress, setPythonProgress)}
          onDecrease={() => decrease(pythonProgress, setPythonProgress)}
        />

        <ProgressCard
          subject="React Development"
          progress={reactProgress}
          onIncrease={() => increase(reactProgress, setReactProgress)}
          onDecrease={() => decrease(reactProgress, setReactProgress)}
        />
      </main>
    </div>
  )
}

export default App