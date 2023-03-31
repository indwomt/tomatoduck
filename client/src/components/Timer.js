import react from 'react'

export default function Timer(){
    return (
        <div className="container timer-box col-5 d-flex-col justify-content-center">
            <div className="timer-settings d-flex justify-content-center">
                <button className="m-4">Short Break</button>
                <button className="m-4">Long Break</button>
                <button className="m-4">Tomato Time</button>
            </div>
            <div className="timer container col-6 d-flex justify-content-center bordered">
                <h1 className='my-5'>45:00</h1>
            </div>
        </div>
    )
}


