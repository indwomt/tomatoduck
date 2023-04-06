import react from 'react'
// import timer from '../utils/timer'
import{useTimer} from 'react-timer-hook'


export default function Timer({expiryTimestamp}){

    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
      } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });



    return (
        <div className="container timer-box col-5 d-flex-col justify-content-center">
            <div className="timer-settings d-flex justify-content-center">
                <button className="m-4 setting-btn">Short Break</button>
                <button className="m-4 setting-btn">Long Break</button>
                <button className="m-4 setting-btn">Tomato Time</button>
            </div>
            <div className="timer container col-6 d-flex justify-content-center bordered">
            <span>{minutes}</span>:<span>{seconds}</span>
                
            </div>
            <div class="container start-btn-box d-flex justify-content-center">
            <button onClick={start}>Start</button>
    //   <button onClick={pause}>Pause</button>
    //   <button onClick={resume}>Resume</button>
    //   <button onClick={() => {
        // Restarts to 5 minutes timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + 1800);
        restart(time)
      }}>Restart</button>
            <button class='start-btn my-5'>Start Timer!</button>
            </div>
        </div>



    //     <div style={{textAlign: 'center'}}>
    //   <h1>react-timer-hook </h1>
    //   <p>Timer Demo</p>
    //   <div style={{fontSize: '100px'}}>
    //     <span>{minutes}</span>:<span>{seconds}</span>
    //   </div>
    //   <p>{isRunning ? 'Running' : 'Not running'}</p>
    //   <button onClick={start}>Start</button>
    //   <button onClick={pause}>Pause</button>
    //   <button onClick={resume}>Resume</button>
    //   <button onClick={() => {
    //     // Restarts to 5 minutes timer
    //     const time = new Date();
    //     time.setSeconds(time.getSeconds() + 1800);
    //     restart(time)
    //   }}>Restart</button>
    // </div>



    )
}


