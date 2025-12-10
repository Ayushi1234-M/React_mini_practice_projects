import React, { useState } from "react";
import "./CalcStyle.css";

function Calc() {
  let arr = [
    "1",
    "2",
    "3",
    "=",
    "4",
    "5",
    "6",
    "*",
    "7",
    "8",
    "9",
    "/",
    "+",
    "0",
    "-",
    ".",
    "clr",
    "b",
  ];

  const [inputVal, setInputVal] = useState("");

  function handleInputs(e) {
    let val = e.target.getAttribute('item')

    console.log(val);

    if (val === "clr") {
      setInputVal("");
    } else if (val === "=") {
      //todo
      calculateOutput();
    } else if (val === "b") {
      //todo
      let newVal = inputVal.substring(0, inputVal.length-1);
      setInputVal(newVal);
    } else {
      setInputVal((v) => v + val);
    }
  }

  function calculateOutput()
  {
    try{
        const ans = eval(inputVal);
        setInputVal(ans);
    }
    catch(err)
    {
        alert('Invalid Input');
    }
  }

  return (
    <div>
      <input className="screen" value={inputVal}></input>

      <div className="calcButtons" onClick={handleInputs}>
        {arr.map((i) => {
          return (
            <div>
              {" "}
              <button item={i}>{i}</button>{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Calc;
