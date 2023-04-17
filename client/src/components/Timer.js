import React, { useState } from 'react';
import alarm from '../assets/clock-alarm-8761.mp3'
import { useTimer } from 'react-timer-hook';

export default function Timer() {
  const [duration, setDuration] = useState(25 * 60); // initial duration is 30 minutes
  let timerTime = [{name: `Short Break`, time:5}, {name: `Long Break`, time:10}, {name: `Tomato Time`, time:25}]
  let {
    seconds,
    minutes,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp: new Date().getTime() + duration * 1000,
    onExpire: () => {
      console.warn('onExpire called')
      const audio = new Audio(alarm)
      audio.play()
    },
    autoStart: false
  });

  // function for timer setting buttons
  const handleButtonClick = (newDuration) => {
    setDuration(newDuration);
    // use react-timer-hook restart function to adjust timer duration
    restart(new Date().getTime() + newDuration * 1000);
  };

  return (
    <div className="container col-12 d-flex-col timer-box">
      <div className="timer-settings d-flex justify-content-center flex-wrap">
        {timerTime.map( el => (<button key={el.time}
          onClick={() => handleButtonClick(el.time * 60)}
          className="m-2 col-md-2 col-4 setting-btn"
        >
          {el.name}
        </button>))
        }
      </div>
      <div className="timer container col-6 d-flex justify-content-center bordered">
        <span className="timer-display">{minutes}</span>
        <span className="timer-display">:</span>
        <span className="timer-display">
          {seconds < 10 ? `0${seconds}` : seconds}
        </span>
      </div>
      <div className="container start-btn-box d-flex justify-content-center"></div>
      <div className="hook-btns container col-6 mx-auto my-3 d-flex justify-content-around flex-wrap">
        <button className="timer-btn m-2 col-md-2 col-4" onClick={pause}>
          Pause
        </button>
        <button className="timer-btn m-2 col-md-2 col-4" onClick={resume}>
          Start
        </button>
        <button
          className="timer-btn m-2 col-md-2 col-4"
          onClick={() => {
            const time = new Date();
            time.setSeconds(time.getSeconds() + duration );
            restart(time);
          }}
        >
          Restart
        </button>
      </div>
    </div>
  );
}





