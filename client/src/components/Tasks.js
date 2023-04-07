import react from 'react'

export default function Tasks() {
    return(
        <div className='container col-4 d-flex-col justify-content-center my-5'>
            <div className='task-header justify-content-between d-flex'>
                <h2>Tasks Left: 0</h2>
                <button className='add-task-btn'>Add Task</button>
            </div>
            <div className='task-container'>

            </div>
        </div>
    )

}