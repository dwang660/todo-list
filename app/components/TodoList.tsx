import React from "react";
import { Todo, TodoStatus } from "../types/todo";
import TodoCard from "./TodoCard";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  currentTab: string;
}

const TodoList = ({ todos, setTodos, currentTab }: Props) => {
  const filteredTodos =
    currentTab === "All"
      ? todos
      : todos.filter((todo) => {
          return todo.status == currentTab;
        });

  const handleDone = (todoIndex: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, index) =>
        index === todoIndex ? { ...todo, status: TodoStatus.COMPLETED } : todo
      )
    );
  };

  const handleDelete = (todoIndex: number) => {
    const newTodos = todos.filter((todo, index) => {
      return todoIndex != index;
    });
    setTodos(newTodos);
  };
  return (
    <div>
      {filteredTodos ? (
        <table className="table-auto">
          <thead>
            <tr>
              <td>Descripion</td>
              <td>Status</td>
              <td>Action</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {filteredTodos.map((todo, todoIndex) => (
              <tr key={todoIndex}>
                <td>{todo.input}</td>
                <td>{todo.status}</td>
                <td>
                  <button onClick={() => handleDone(todoIndex)}>Done</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(todoIndex)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>The todo list is empty</div>
      )}
    </div>
  );
};

export default TodoList;
