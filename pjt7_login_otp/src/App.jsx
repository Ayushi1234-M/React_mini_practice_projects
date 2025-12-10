import { useEffect, useRef, useState } from "react";
import "./App.css";
import "./CutsomCSS.css";

function App() {
  const emptyArr = ["", "", "", ""];
  const refs = [useRef(), useRef(), useRef(), useRef()];
  const [inputs, setInputs] = useState(emptyArr);

  useEffect(() => {
    refs[0].current.focus();
  }, []);

function handleInputOtp(e, idx) {
  let val = e.target.value;

  if (isNaN(val) || val === "") return;

  const currentInputs = [...inputs];
  currentInputs[idx] = val.slice(-1); 

  setInputs(currentInputs);

  if (idx < inputs.length - 1) refs[idx + 1].current.focus();
}

  function handleOnKeyChange(e, idx) {
    console.log(e.keyCode);

    if (e.keyCode === 8) {
      const currentInputs = [...inputs];
      currentInputs[idx] = "";
      setInputs(currentInputs);

      if (idx > 0 && currentInputs[idx-1]!="") refs[idx - 1].current.focus();
    }
  }

  function handleOnPaste(e){
    const data = e.clipboardData.getData('text');
    console.log("pasted data: ",data);
    const nums = data.replace(/\D/g, '').slice(0, 4);
    console.log("Only nums: ",nums);

    const newInputs = [...inputs];

    for(let i=0; i<inputs.length;i++)
    {
      newInputs[i] =  nums[i];   
    }

    setInputs(newInputs); 

    refs[inputs.length-1].current.focus();

  }

  return (
    <>
      <h2>Enter the OTP</h2>
      <div className="inputPlace">
        {inputs.map((i, idx) => {
          return (
            <div className="inputBox" key={idx}>
              <input
                type="text"
                key={idx}
                value={i}
                maxLength={1}
                ref={refs[idx]}
                onChange={(e) => handleInputOtp(e, idx)}
                onKeyDown={(e) => handleOnKeyChange(e, idx)}
                onPaste={(e)=>handleOnPaste(e)}
              ></input>
            </div>
          );
        })}
      </div>

      <button>Submit</button>
    </>
  );
}

export default App;
