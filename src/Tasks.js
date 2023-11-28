import React from 'react'

const Tasks = ({ tasks, handleDeleteTask }) => {
    return (
        <div>
            {(tasks.length) ? (
                tasks.map((task) => (
                    <li key={task.id} className={task.completed ? 'completed' : ''}>
                        <input type="checkbox" checked={task.checked} />
                        {task.description}
                        <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                    </li>
                ))) : <p>Task is empty</p>}
        </div>
    )
}

export default Tasks