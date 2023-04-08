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
    autoStart: false
  });

  // function for timer setting buttons
  const handleButtonClick = (newDuration) => {
    setDuration(newDuration);
    // use react-timer-hook restart function to adjust timer duration
    restart(new Date().getTime() + newDuration * 1000);
  };

  return (
    <div className="container timer-box">
      <div className="timer-settings d-flex justify-content-center flex-wrap">
        <button
          onClick={() => handleButtonClick(5 * 60)}
          className="m-2 col-md-2 col-4 setting-btn"
        >
          Short Break
        </button>
        <button
          onClick={() => handleButtonClick(10 * 60)}
          className="m-2 col-md-2 col-4 setting-btn"
        >
          Long Break
        </button>
        <button
          onClick={() => handleButtonClick(25 * 60)}
          className="m-2 col-md-2 col-4 setting-btn"
        >
          Tomato Time
        </button>
      </div>
      <div className="timer container col-6 d-flex justify-content-center bordered">
        <span className="timer-display">{minutes}</span>
        <span className="timer-display">:</span>
        <span className="timer-display">
          {seconds < 10 ? `0${seconds}` : seconds}
        </span>
      </div>
      <div className="container start-btn-box d-flex justify-content-center"></div>
      <div className="hook-btns container col-8 mx-auto my-5 d-flex justify-content-around flex-wrap">
        <button className="timer-btn m-2 col-md-2 col-4" onClick={pause}>
          Pause
        </button>
        <button className="timer-btn m-2 col-md-2 col-4" onClick={resume}>
          Start
        </button>
        <button
          className="timer-btn m-2 col-md-2 col-4"
          onClick={() => {
            // Restarts to 25 minutes timer
            const time = new Date();
            time.setSeconds(time.getSeconds() + 25 * 60);
            restart(time);
          }}
        >
          Restart
        </button>
      </div>
    </div>
  );
}





