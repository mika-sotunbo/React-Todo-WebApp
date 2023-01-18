import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            todos={todos}
            todo={todo}
            setTodos={setTodos}
            key={todo.id}
            text={todo.text}
            id={todo.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
//todos is empty array
//todo is the array item

/* want to make anything typed into the input go into the todo and display
what is typed into the input= value
how to go to the todo= props
display= 






*/
