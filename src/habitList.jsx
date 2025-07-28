export const HabitList = ({habits, onToggle}) => {
    return(
        <ul>
            {habits.map((habit)=>(
                <li key={habit.id}>
                    <span>{habit.name}</span>
                    <button onClick={()=>onToggle(habit.id)}>
                        {habit.completedToday ? "☑️" : "✖️"}
                    </button>

                </li>
            ))}
        </ul>
    )
}