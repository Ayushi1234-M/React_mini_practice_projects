import { useState } from "react";
import "./App.css";
import "./CustomCss.css";

function App() {
  const [currIndex, setCurrIndex] = useState(0);

  const jsonForm = [
    {
      id: 0,
      inputLabel: "Name",
      placeholder: "Please enter your name",
      inputType: "text",
    },
    {
      id: 1,
      inputLabel: "Email",
      placeholder: "Please enter your email",
      inputType: "text",
    },
    {
      id: 2,
      inputLabel: "Number",
      placeholder: "Please enter your phone number",
      inputType: "Number",
    },
  ];

  function handleBack(idx) {
    setCurrIndex(idx - 1);
  }

  function handleNext(idx) {
    setCurrIndex(idx + 1);
  }

  return (
    <>
      <div className="form">
        <div className="indiv">
          <label>{jsonForm[currIndex].inputLabel}</label>
          <br></br>
          <input
            type={jsonForm[currIndex].inputType}
            placeholder={jsonForm[currIndex].placeholder}
          ></input>
          <br></br>
          {jsonForm[currIndex].id > 0 && (
            <button onClick={() => handleBack(jsonForm[currIndex].id)}>
              Back
            </button>
          )}

          {jsonForm[currIndex].id < jsonForm.length - 1 && (
            <button onClick={() => handleNext(jsonForm[currIndex].id)}>
              Next
            </button>
          )}

          {jsonForm[currIndex].id == jsonForm.length - 1 && (
            <button>Submit</button>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
