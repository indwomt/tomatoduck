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
            <span class="timer-display">{minutes}</span><span class="timer-display">:</span><span class="timer-display">{seconds}</span>
                
            </div>
            <div class="container start-btn-box d-flex justify-content-center">
            
            
            
        </div><div class='hook-btns container col-4 d-flex justify-content-around my-5'>
       <button class='timer-btn'onClick={pause}>Pause</button>
      <button class='timer-btn'onClick={resume}>Start</button>
       <button class='timer-btn'onClick={() => {
        // Restarts to 5 minutes timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + 1800);
        restart(time)
      }}>Restart</button>
            </div>
        </div>
    )
}


