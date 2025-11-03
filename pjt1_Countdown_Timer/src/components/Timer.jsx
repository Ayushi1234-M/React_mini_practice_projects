import React, { useEffect, useState } from "react";
import "./TimerCustomCSS.css";

function Timer() {
  const [isStart, setIsStart] = useState(false);
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const [sec, setSec] = useState(0);
  const [isPause, setIsPause] = useState(false);
  const [timerId, setTimerId] = useState();

  function handleStart() {
    setIsStart(true);
  }

  function handleInput(e) {
    if (e.target.id == "hours") {
      setHours(parseInt(e.target.value));
    } else if (e.target.id == "mins") {
      setMins(parseInt(e.target.value));
    } else if (e.target.id == "seconds") {
      setSec(parseInt(e.target.value));
    }
  }

  function countdownTimer() {
    if (sec == 0 && mins == 0 && hours == 0) {
      setMins(0);
      setHours(0);
      setSec(0);

      setIsStart(false);

      alert("Timer finished");
    } else if (sec > 0) {
      setSec((sec) => sec - 1);
    } else if (sec == 0 && mins > 0) {
      setMins((mins) => mins - 1);
      setSec(59);
    } else if (sec == 0 && mins == 0 && hours > 0) {
      setMins(59);
      setSec(59);
      setHours((hours) => hours - 1);
    }
  }

  useEffect(() => {
    let tid;
    if (isStart && !isPause) {
      tid = setInterval(() => {
        countdownTimer();
      }, 1000);
    }

    setTimerId(tid);

    return () => {
      clearInterval(tid);
    };
  }, [isStart, hours, mins, sec, isPause]);

  function handlePause() {
    setIsPause(true);
    clearInterval(timerId);
  }

  function handleResume() {
    setIsPause(false);
  }

  function handleReset() {
    setMins(0);
    setHours(0);
    setSec(0);

    setIsStart(false);
  }

  return (
    <div>
      <h2>Countdown Timer</h2>

      {!isStart && (
        <div className="inputBox">
          <input
            className="inputField"
            placeholder="HH"
            id="hours"
            onChange={handleInput}
          ></input>
          <input
            className="inputField"
            placeholder="MM"
            id="mins"
            onChange={handleInput}
          ></input>
          <input
            className="inputField"
            placeholder="SS"
            id="seconds"
            onChange={handleInput}
          ></input>

          <br></br>

          <button onClick={handleStart}>Start</button>
        </div>
      )}

      {isStart && (
        <div className="timerBox">
          <span>{hours < 10 ? `0${hours}` : hours}</span>
          <span>:</span>
          <span>{mins < 10 ? `0${mins}` : mins}</span>
          <span>:</span>
          <span>{sec < 10 ? `0${sec}` : sec}</span>

          <br></br>

          {!isPause && <button onClick={handlePause}>Pause</button>}

          {isPause && <button onClick={handleResume}>Resume</button>}

          <button onClick={handleReset}>Reset</button>
        </div>
      )}
    </div>
  );
}

export default Timer;
