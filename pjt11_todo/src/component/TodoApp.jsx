import React, { useEffect, useState } from "react";
import "./Styles.css";

function TodoApp() {
  const [todoList, setTodoList] = useState([]);

  const [copyTodoList, setCopyTodoList] = useState([]);

  const [inputVal, setInputVal] = useState("");

  function handleInput(e) {
    let val = e.target.value;

    setInputVal(val);
  }

  function handleAddTodoItem() {
    if (inputVal === "") {
      alert("Add a task");
      return;
    }

    const currObj = {
      id: new Date().getTime(),
      value: inputVal,
      done: false,
    };

    setTodoList([...todoList, currObj]);
    setCopyTodoList([...todoList, currObj]);

    setInputVal("");
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

    setInputVal(i.value);

    setEditModeId(i.id);
  }

  function handleUpdateTodoItem() {
    let updatedArray = todoList.map((i) => {
      if (i.id === editModeId) {
        i.value = inputVal;
      }
      return i;
    });

    //later
    setTodoList(updatedArray);
    setCopyTodoList(updatedArray);
    setEditMode(false);
    setEditModeId("");
    setInputVal("");
  }

  function handleCancelUpdate()
  {
    setEditMode(false);
    setEditModeId("");
    setInputVal("");
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

  return (
    <div>
      <div>
        <h2>
          {taskComp} / {totaltask} task completed!
        </h2>
      </div>

      <div className="inputTodo">
        <input
          placeholder="Add task here"
          value={inputVal}
          onChange={(e) => handleInput(e)}
          onKeyDown={(e) => handkeKeyDown(e)}
        ></input>
        {editMode ? (
          <div>
          <button onClick={() => handleUpdateTodoItem()}>Update</button>
          <button onClick={()=>handleCancelUpdate()}>Cancel</button>
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

              <span className={i.done ? "strike" : "notStriked"}>
                {i.value}
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

export default TodoApp;
