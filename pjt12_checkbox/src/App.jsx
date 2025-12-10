import { useState } from "react";
import "./App.css";

function App() {
  const arr = [
    {
      id: 1,
      checked: false,
      text: "abbc",
    },
    {
      id: 2,
      checked: false,
      text: "lmnp",
    },
    {
      id: 3,
      checked: false,
    },
    {
      id: 4,
      checked: false,
    },
    {
      id: 5,
      checked: false,
    },
  ];

  const [array, setArray] = useState(arr);

  function handleCheck(id) {
    let copyArray = array.map((i) => {
      if (i.id === id)
        return {...i, checked:!i.checked}

      return i;
    });

    setArray(copyArray);
    setAllcheck(copyArray.every((i) => (i.checked === true)));
  }

  const [allcheck, setAllcheck] = useState(false);

  function handleCheckUncheckAll() {
    let allChecked = array.every((i) => (i.checked === true));
    console.log('allchecked: ' + allChecked);

    if (allChecked) {
      let copy = array.map((i) => {
        return {...i, checked : false}
      });

      setArray(copy);
      setAllcheck(false);
    } else {
      let copy = array.map((i) => {
        return {...i, checked : true}
      });

      setArray(copy);
      setAllcheck(true);
    }
  }

  return (
    <>
      <div>
        <input
          type="checkbox"
          checked={allcheck}
          onClick={() => handleCheckUncheckAll()}
        ></input>
        <span>Check/Uncheck All</span>
      </div>

      {array.map((i) => {
        return (
          <div key={i.id}>
            <input
              type="checkbox"
              checked={i.checked}
              onChange={() => handleCheck(i.id)}
            ></input>
            <span>Checkbox {i.id}</span>
          </div>
        );
      })}
    </>
  );
}

export default App;
