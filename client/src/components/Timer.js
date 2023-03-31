import react from 'react'

export default function Timer(){
    return (
        <div className="container timer-box col-5 d-flex-col justify-content-center">
            <div className="timer-settings d-flex justify-content-center">
                <button className="m-4 setting-btn">Short Break</button>
                <button className="m-4 setting-btn">Long Break</button>
                <button className="m-4 setting-btn">Tomato Time</button>
            </div>
            <div className="timer container col-6 d-flex justify-content-center bordered">
                <h1 className='my-5'>45:00</h1>
                
            </div>
            <div class="container start-btn d-flex justify-content-center">
            <button class='my-5'>Start Timer!</button>
            </div>
        </div>
    )
}


