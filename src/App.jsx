import { useState } from 'react'
import './App.css'
import { HabitList } from './habitList.jsx'

function App() {
  const [habits, setHabits] = useState([
    {id: 1, name:"morning stretches", completedToday: false},
    {id: 2, name: "exercise", completedToday:false},
    {id:3, name: "code", completedToday:false}
  ])

const toggleHabit = (id) => {
  const updated = habits.map((habit) =>
      habit.id === id
        ? { ...habit, completedToday: !habit.completedToday }
        : habit
    );
    setHabits(updated);
}

  return (
    <>
      <h1>Habit Tracker</h1>
      <HabitList habits={habits} onToggle={toggleHabit}/>
    </>
  )
}

export default App
