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
        <div>
          {filteredTodos.map((todo, todoIndex) => (
            <div className="flex gap-2" key={todoIndex}>
              <TodoCard todo={todo}></TodoCard>
              <button onClick={() => handleDone(todoIndex)}>Done</button>
              <button onClick={() => handleDelete(todoIndex)}>Delete</button>
            </div>
          ))}
        </div>
      ) : (
        <div>The todo list is empty</div>
      )}
    </div>
  );
};

export default TodoList;
