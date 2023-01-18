import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";
//importing component

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //functions

  //useeffect
  useEffect(() => {
    getLocalTodos();
  }, []);
  // 1:28:48

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed == true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed == false));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  //save to local storage
  const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  // when we refresh we have the empty array using the UseEffect
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
     let todoLocal=JSON.parse(localStorage.getItem("todos"));
     setTodos(todoLocal)
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Mika's ToDo List </h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  );
  }

//todos is an array

export default App;
