import react from 'react'

export default function Tasks() {
    return(
        <div className='container col-4 d-flex-col justify-content-center my-5'>
            <div className='task-header col-12 justify-content-between d-flex flex-wrap'>
                <h2 class='col-12 col-md-6 flex-wrap'>Tasks Left: 0</h2>
                <button className='add-task-btn col-md-6 col-12 flex-wrap'>Add Task</button>
            </div>
            <div className='task-container'>

            </div>
        </div>
    )

}