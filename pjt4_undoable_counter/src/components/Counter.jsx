import React, { useState } from "react";
import "./CounterCss.css";

function Counter() {
  const calc = ["-20", "-10", "-1", "+1", "+10", "+100"];
  const [currVal, setCurrVal] = useState(0);

  const [history, setHistory] = useState([]);

  function handleOperation(op) {
    let val = currVal + parseInt(op);
    setCurrVal(val);

    let obj = {
      initialVal: currVal,
      operation: op,
      outputVal: val,
    };

    setHistory([...history, obj]);
  }

  function handleUndo() {
    if(history.length===0) return 0;

    let target = history[history.length-1];

    let val = currVal - parseInt(target.operation);

    let undoHistory = history.slice(0, history.length-1);

    setHistory(undoHistory);

    setCurrVal(val);


  }

  function handleRedo() {
    if(history.length===0) return 0;

    let target = history[history.length-1];

    let val = currVal + parseInt(target.operation);
    setCurrVal(val);

    let obj = {
      initialVal: currVal,
      operation: target.operation,
      outputVal: val,
    }

    setHistory([...history, obj]);
  }

  return (
    <div>
      <div className="buttonsSection">
        <h2>The Undoable Counter</h2>

        <div className="majorBtns">
          <button onClick={handleUndo}>Undo</button>
          <button onClick={handleRedo}>Redo</button>
        </div>

        <div className="numberBtns">
          {calc.map((i, idx) => {
            return (
              <button key={idx} onClick={() => handleOperation(i)}>
                {i}
              </button>
            );
          })}
        </div>
      </div>

      <h3 style={{ color: "blue" }} className="currentValue">
        Current Value: {currVal}
      </h3>

      <hr></hr>

      <h3>History</h3>

      <div className="historySection">
        <div className="history">
          {history.length > 0 &&
            history.map((i, idx) => {
              return (
                <div key={idx}>
                  <span style={{float:'left'}}>{`${i.operation}`}</span>

                  <span>{`${i.initialVal} -> ${i.outputVal} `}</span>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Counter;
