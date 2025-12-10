import React from "react";

function Todo() {
  return (
    <div>
      <h1>Todo App</h1>
      <h2>Functionalities:</h2>
      <ol>
        <li style={{ textDecoration: "line-through" }}>
          Type some todo item- input box
        </li>
        <li style={{ textDecoration: "line-through" }}>
          Click on 'add' button to add the above item to a list below
        </li>
        <li style={{ textDecoration: "line-through" }}>
          Below list should have an option to X delete the todo item
        </li>
        <li style={{ textDecoration: "line-through" }}>
          Below list should have an option to - strike the todo item
        </li>
        <li style={{ textDecoration: "line-through" }}>
          Below list should have an option 'edit' to edit the todo item and save
        </li>
        <li style={{ textDecoration: "line-through" }}>Checkbox like - to check all and uncheck all</li>
        <li style={{ textDecoration: "line-through" }}>'add' on enter key</li>
      </ol>

      <h2>Enhancements ideas: (new component)</h2>
      <p>
        <h4>Easy to implement:</h4>

        <ol>
          <li style={{ textDecoration: "line-through" }}>Filter tabs - Show All / Active / Completed tasks</li>
          <li style={{ textDecoration: "line-through" }}>Task counter - Display total tasks and completed count</li>
          <li style={{ textDecoration: "line-through" }}>Clear all completed - Button to remove all done tasks at once</li>
          <li style={{ textDecoration: "line-through" }}>Cancel edit mode - Button to exit edit without saving</li>
        </ol>

        <h4>Intermediate:</h4>

        <ol>
          <li style={{ textDecoration: "line-through" }}>
            LocalStorage persistence - Save tasks so they survive page refresh
          </li>
          <li style={{ textDecoration: "line-through" }}>
            Priority levels - Add high/medium/low priority with color coding
          </li>
          <li style={{ textDecoration: "line-through" }}>Due dates - Add calendar date picker for deadlines</li>
          <li style={{ textDecoration: "line-through" }}>Search/filter - Search bar to find specific tasks</li>
          <li style={{ textDecoration: "line-through" }}>Toggle complete - Click checkmark again to mark incomplete</li>
        </ol>

        <h4>Advanced:</h4>

        <ol>
          <li>Subtasks - Add nested checklist items under main tasks</li>
          <li>Dark mode toggle - Theme switcher</li>
          <li>Animations - Add/delete transitions for smoother UX</li>
          <li>Export/Import - Download tasks as JSON or CSV</li>
        </ol>
      </p>
    </div>
  );
}

export default Todo;
