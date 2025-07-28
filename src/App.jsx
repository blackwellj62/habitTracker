import { useState } from 'react'
import './App.css'

function App() {
  const [habits, setHabits] = useState([
    {id: 1, name:"morning stretches", completedToday: false},
    {id: 2, name: "exercise", completedToday:false},
    {id:3, name: "code", completedToday:false}
  ])

  return (
    <>
      <h1>Habit Tracker</h1>
    </>
  )
}

export default App
