import React, { useEffect, useState } from "react";
import "./Styles.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function TodoWithDatePriority() {
  // const [todoList, setTodoList] = useState([]);
  //local storage:

  const[todoList, setTodoList]=useState(()=>{
    const savedTodo = localStorage.getItem('todoList');
    return savedTodo? JSON.parse(savedTodo):[]
  })

  const [copyTodoList, setCopyTodoList] = useState(()=>{
    const savedTodo = localStorage.getItem('todoList');
    return savedTodo? JSON.parse(savedTodo):[]
  })

  const [inputObj, setInputObj] = useState({
    inputText: "",
    inputDate: "",
    inputPri: "",
  });

  //useeffect to store everytime changes happen

  useEffect(()=>{
    localStorage.setItem('todoList', JSON.stringify(todoList));
  })

  // const [inputVal, setInputVal] = useState("");
  // const [dateVal, setDateVal] = useState("");
  // const [priVal, setPriVal] = useState("");

  function handleInput(e) {
    let val = e.target.value;
    let id = e.target.id;

    const newObj = { ...inputObj, [id]: val };

    setInputObj(newObj);

    // if (id === "inputText") setInputVal(val);
    // else if (id === "inputDate") setDateVal(val);
    // else setPriVal(val);
  }

  function handleAddTodoItem() {
    if (inputObj.inputText === "") {
      alert("Add a task");
      return;
    }

    const currObj = {
      id: new Date().getTime(),
      value: inputObj.inputText,
      date: inputObj.inputDate,
      pri: inputObj.inputPri,
      done: false,
    };

    setTodoList([...todoList, currObj]);
    setCopyTodoList([...todoList, currObj]);

    // setInputVal("");
    // setDateVal("");

    setInputObj({
      inputText: "",
      inputDate: "",
      inputPri: "",
    });
  }

  function deleteTodoItem(id) {
    console.log(id);

    let filteredArray = todoList.filter((i) => {
      return i.id !== id;
    });

    setTodoList(filteredArray);
    setCopyTodoList(filteredArray);
  }

  function hanldeComplete(id) {
    let mapArray = todoList.map((i) => {
      if (id === i.id) {
        i.done = !i.done;
      }

      return i;
    });

    setTodoList(mapArray);
    setCopyTodoList(mapArray);

    let count = mapArray.filter((i) => i.done === true).length;

    setTaskComp(count);
  }

  const [editMode, setEditMode] = useState(false);

  const [editModeId, setEditModeId] = useState("");

  function handleEditTodo(i) {
    setEditMode(true);

    // setInputVal(i.value);
    // setDateVal(i.date);

    setInputObj({
      inputText: i.value,
      inputDate: i.date,
      inputPri: i.pri,
    });

    setEditModeId(i.id);
  }

  function handleUpdateTodoItem() {
    let updatedArray = todoList.map((i) => {
      if (i.id === editModeId) {
        i.value = inputObj.inputText;
        i.date = inputObj.inputDate;
        i.pri = inputObj.inputPri;
      }
      return i;
    });

    //later
    setTodoList(updatedArray);
    setCopyTodoList(updatedArray);
    setEditMode(false);
    setEditModeId("");
    setInputObj({
      inputText: "",
      inputDate: "",
      inputPri: "",
    });
  }

  function handleCancelUpdate() {
    setEditMode(false);
    setEditModeId("");
    // setInputVal("");
    // setDateVal("");
    setInputObj({
      inputText: "",
      inputDate: "",
      inputPri: "",
    });
  }

  function handleCheckUncheckAll() {
    const allDone = todoList.every((i) => i.done);

    let modifiedArr = [];
    if (allDone) {
      modifiedArr = todoList.map((i) => {
        if (i.done) i.done = false;

        return i;
      });
    } else {
      modifiedArr = todoList.map((i) => {
        if (!i.done) i.done = true;

        return i;
      });
    }

    setTodoList(modifiedArr);
    setCopyTodoList(modifiedArr);

    let count = modifiedArr.filter((i) => i.done === true).length;

    setTaskComp(count);
  }

  function handleClearAll() {
    setTodoList([]);
    setCopyTodoList([]);
  }

  function handkeKeyDown(e) {
    if (e.key === "Enter")
      editMode ? handleUpdateTodoItem() : handleAddTodoItem();
  }

  const [filterTaskTodoActive, setFilterTaskTodoActive] = useState(false);

  function handleFilterTaskTodo() {
    setFilterTaskTodoActive(!filterTaskTodoActive);

    let filter = !filterTaskTodoActive;

    if (filter === true) {
      let copy = todoList.filter((i) => {
        return i.done === false;
      });

      setCopyTodoList(copy);
    } else {
      setCopyTodoList(todoList);
    }
  }

  //Display total tasks and completed count

  const [totaltask, setToaltask] = useState(0);

  const [taskComp, setTaskComp] = useState(copyTodoList.length);

  useEffect(() => {
    setToaltask(copyTodoList.length);
  }, [copyTodoList]);

  const [inputSearch, setInputSearch] = useState("");

  function handleSearch(e) {
    let val = e.target.value;

    setInputSearch(val);

    if (val === "") {
      setCopyTodoList(todoList);
    } else {

      //search

      let copyArray = todoList.filter((i)=>{

       return i.value.includes(val);
      })

      setCopyTodoList(copyArray);

    }
  }

  return (
    <div>
      <div>
        <h2>
          {taskComp} / {totaltask} task completed!
        </h2>
      </div>

      <div>
        <input
          placeholder="seach a task here"
          value={inputSearch}
          onChange={(e) => handleSearch(e)}
        ></input>
      </div>

      <div className="inputTodo">
        <input
          placeholder="Add task here"
          value={inputObj.inputText}
          id="inputText"
          onChange={(e) => handleInput(e)}
          onKeyDown={(e) => handkeKeyDown(e)}
        ></input>

        <input
          type="date"
          value={inputObj.inputDate}
          id="inputDate"
          onChange={(e) => handleInput(e)}
          onKeyDown={(e) => handkeKeyDown(e)}
        ></input>

        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Priority</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="inputPri"
              value={inputObj.inputPri}
              label="Priority"
              onChange={(e) => {
                setInputObj({ ...inputObj, inputPri: e.target.value });
              }}
            >
              <MenuItem value={"p1"}>p1</MenuItem>
              <MenuItem value={"p2"}>p2</MenuItem>
              <MenuItem value={"p3"}>p3</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {editMode ? (
          <div>
            <button onClick={() => handleUpdateTodoItem()}>Update</button>
            <button onClick={() => handleCancelUpdate()}>Cancel</button>
          </div>
        ) : (
          <button onClick={() => handleAddTodoItem()}>Add</button>
        )}
      </div>

      <div>
        <button onClick={() => handleCheckUncheckAll()}>
          ✔️ Check/Uncheck all
        </button>
        <button onClick={() => handleClearAll()}>🗑️ Delete/Clear all</button>
      </div>

      <div className="allFilters">
        <button onClick={() => handleFilterTaskTodo()}>Task todo</button>
      </div>

      <div className="ToDoList">
        {copyTodoList.map((i, idx) => {
          return (
            <div>
              <span onClick={() => hanldeComplete(i.id)}>✔️</span>

              <span
                className={`${i.done ? "strike" : "notStriked"} pri-${i.pri} `}
              >
                {i.value} # {i.date} # {i.pri}
              </span>

              <span onClick={() => deleteTodoItem(i.id)}>🗑️</span>

              <span onClick={() => handleEditTodo(i)}>✏️</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TodoWithDatePriority;
