import React from "react";
import { Todo, TodoStatus } from "../types/todo";
//import TodoCard from "./TodoCard";

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

  const handleDone = (todoId: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, status: TodoStatus.COMPLETED } : todo
      )
    );
  };

  const handleDelete = (todoId: string) => {
    const newTodos = todos.filter((todo) => {
      return todoId != todo.id;
    });
    setTodos(newTodos);
  };
  return (
    <div className="mt-6 space-y-4">
      {filteredTodos.length > 0 ? (
        filteredTodos.map((todo, todoIndex) => (
          <div
            key={todoIndex}
            className="bg-white p-4 rounded-lg border-l-4 transition-all shadow-md hover:shadow-lg border-gray-300"
          >
            <p className="text-gray-800 text-lg font-semibold">{todo.input}</p>
            <div className="flex items-center justify-between mt-3">
              <span
                className={`flex items-center rounded-full text-sm font-medium px-3 py-1
                    ${
                      todo.status === TodoStatus.COMPLETED &&
                      "bg-green-100 text-green-600"
                    } 
                    ${
                      todo.status === TodoStatus.OPEN &&
                      "bg-gray-100 text-gray-600"
                    } 
                    ${
                      todo.status === TodoStatus.IN_PROGRESS &&
                      "bg-yellow-100 text-yellow-600"
                    }`}
              >
                {todo.status}
              </span>
              <div className="flex gap-3">
                <button
                  className="rounded-lg px-4 py-2 bg-green-400 text-white text-sm hover:bg-green-600 transition"
                  onClick={() => handleDone(todo.id)}
                >
                  Done
                </button>

                <button
                  className="rounded-lg px-4 py-2 bg-red-400 text-white text-sm hover:bg-red-600 transition"
                  onClick={() => handleDelete(todo.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center text-gray-600 mt-6 text-lg">
          The todo list is empty
        </div>
      )}
    </div>
  );
};

export default TodoList;
