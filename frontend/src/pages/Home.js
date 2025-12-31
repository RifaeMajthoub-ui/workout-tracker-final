import { useEffect } from 'react'
import { useWorkoutContext } from "../hooks/useWorkoutContext"
import { useAuthContext } from "../hooks/useAuthContext"
import { Link } from 'react-router-dom'

import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {
  const { workouts, dispatch } = useWorkoutContext()
  const { user } = useAuthContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts', {
        headers: { 'Authorization': `Bearer ${user.token}` },
      })
      const json = await response.json()

      if (response.ok) {
        dispatch({ type: 'SET_WORKOUTS', payload: json })
      }
    }

    if (user) {
      fetchWorkouts()
    }
  }, [dispatch, user])

  if (!user) {
    return (
      <div className="landing">
        <div className="hero">
          <h1>Track Your Progress, <span className="highlight">Reach Your Goals.</span></h1>
          <p>The simplest way to record your workouts and stay consistent.</p>
          <div className="cta-buttons">
            <Link to="/signup" className="btn-primary">Get Started</Link>
            <Link to="/login" className="btn-secondary">Log In</Link>
          </div>
        </div>
        <div className="info-grid">
          <div className="info-card">
            <h3>Easy Logging</h3>
            <p>Add exercises in seconds.</p>
          </div>
          <div className="info-card">
            <h3>Secure</h3>
            <p>Stored safely in MySQL.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map((workout) => (
          <WorkoutDetails key={workout.id} workout={workout} />
        ))}
      </div>
      <WorkoutForm />
    </div>
  )
}

export default Home;