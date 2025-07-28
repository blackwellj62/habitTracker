import { useState } from "react"

export const AddHabit = ({onAdd})=> {
    const [habitName, setHabitName] = useState("")

const handleSubmit = (event)=>{
    event.preventDefault()
    if (habitName.trim() === "") return

    onAdd(habitName)
    setHabitName("")
}

    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="New Habit"
            value={habitName}
            onChange={(event)=>{setHabitName(event.target.value)}}
            />
            <button type="submit">
                Add Habit
            </button>
        </form>
    )
}