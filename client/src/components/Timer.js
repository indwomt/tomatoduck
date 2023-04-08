import React, { useState } from 'react';
import { useTimer } from 'react-timer-hook';

export default function Timer() {
  const [duration, setDuration] = useState(30 * 60); // initial duration is 30 minutes

  let {
    seconds,
    minutes,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp: new Date().getTime() + duration * 1000,
    onExpire: () => console.warn('onExpire called'),
  });

  // function for timer setting buttons
  const handleButtonClick = (newDuration) => {
    setDuration(newDuration);
    // use react-timer-hook restart function to adjust timer duration
    restart(new Date().getTime() + newDuration * 1000);
  };

    return (
        <div className="container timer-box col-5 d-flex-col justify-content-center">
            <div className="timer-settings d-flex justify-content-center">
                <button onClick={() => handleButtonClick(5*60)}className="m-4 setting-btn">Short Break</button>
                <button onClick={() => handleButtonClick(10*60)}className="m-4 setting-btn">Long Break</button>
                <button onClick={() => handleButtonClick(25*1800)}className="m-4 setting-btn">Tomato Time</button>
            </div>
            <div className="timer container col-6 d-flex justify-content-center bordered">
            <span class="timer-display">{minutes}</span><span class="timer-display">:</span><span class="timer-display">{seconds=seconds<10?`0${seconds}`:seconds}</span>
                
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



