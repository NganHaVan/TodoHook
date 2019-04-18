import React, { useState } from "react";
import "./App.css";

function Todo({ todo, completeTodo, index }) {
  return (
    <div className="todo">
      <p style={{ textDecoration: todo.complete ? "line-through" : "" }}>
        {todo.text}
      </p>
      <button onClick={() => completeTodo(index)}>
        {!todo.complete ? "Complete" : "Undo"}
      </button>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) {
      return;
    }
    addTodo(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        name=""
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      complete: false
    },
    {
      text: "Bake cake",
      complete: true
    },
    {
      text: "Build cool todo app",
      complete: false
    }
  ]);
  const addTodo = text => {
    const newTodo = [...todos, { text, complete: false }];
    setTodos(newTodo);
  };
  const completeTodo = index => {
    const updateTodo = [...todos];
    updateTodo[index] = {
      ...updateTodo[index],
      complete: !updateTodo[index].complete
    };
    setTodos(updateTodo);
  };
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => {
          return (
            <Todo
              todo={todo}
              key={index}
              index={index}
              completeTodo={completeTodo}
            />
          );
        })}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
