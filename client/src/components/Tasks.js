import react from 'react'

export default function Tasks() {
    return(
        <div class='container col-4 d-flex-col justify-content-center my-5'>
            <div class='task-header justify-content-between d-flex'>
                <h2>Tasks Left: 0</h2>
                <button class='add-task-btn'>Add Task</button>
            </div>
            <div class='task-container'>

            </div>
        </div>
    )

}