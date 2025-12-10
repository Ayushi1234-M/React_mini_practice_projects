import "./App.css";
import Todo from "./component/Todo";
import TodoApp from "./component/TodoApp";
import TodoWithDateApp from "./component/TodoWithDateApp";
import TodoWithDatePriority from "./component/TodoWithDatePriority";

function App() {
  return (
    <>
      <div className="allComps">
        <div className="todoTasks">
          <Todo></Todo>
        </div>

        <div className="divider1">
          <div className="todoFunc">
            <TodoApp></TodoApp>
          </div>

          <hr></hr>

          <div className="todoEnhanced">
            <TodoWithDateApp></TodoWithDateApp>
          </div>

          <hr></hr>

          <div>
            <TodoWithDatePriority/>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
