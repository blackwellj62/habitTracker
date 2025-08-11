export const HabitList = ({habits, onToggle}) => {
    return(
        <ul className="habit-container">
            {habits.map((habit)=>(
                <li key={habit.id}>
                    <span className="habit">{habit.name}</span>
                    <button onClick={()=>onToggle(habit.id)}>
                        {habit.completedToday ? "☑️" : "✖️"}
                    </button>

                </li>
            ))}
        </ul>
    )
}