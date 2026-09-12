import CourseHeader from './components/CourseHeader'
import CourseCard from './components/CourseCard'
import CourseFooter from './components/CourseFooter'

function App() {
  return (
    <div className="page">
      <CourseHeader
        title="Explore Our Courses"
        description="Build useful skills with practical and beginner-friendly courses."
      />

      <main className="content">
        <div className="section-title">
          <span>POPULAR COURSES</span>
          <h2>Choose what you want to learn</h2>
          <p>Each course card is created using a reusable React component.</p>
        </div>

        <div className="course-grid">
          <CourseCard
            course="Full Stack Development"
            category="Web Development"
            duration="8 Weeks"
            mode="Online"
          />

          <CourseCard
            course="Data Analytics"
            category="Data"
            duration="6 Weeks"
            mode="Hybrid"
          />

          <CourseCard
            course="Python Programming"
            category="Programming"
            duration="5 Weeks"
            mode="Online"
          />

          <CourseCard
            course="UI/UX Design"
            category="Design"
            duration="4 Weeks"
            mode="Offline"
          />
        </div>
      </main>

      <CourseFooter message="Learn skills. Build projects. Grow your career." />
    </div>
  )
}

export default App