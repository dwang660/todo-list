"use client";
import Image from "next/image";

import Header from "./components/Header";
import TodoTabs from "./components/TodoTabs";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { Todo, TodoStatus } from "./types/todo";
import { v4 as uuidv4 } from "uuid";
import { ReactElement, ReactEventHandler, useEffect, useState } from "react";

export default function Home() {
  // const [todos, setTodos] = useState<Todo[]>([
  //   { input: "text1", status: TodoStatus.OPEN },
  //   { input: "text2", status: TodoStatus.IN_PROGRESS },
  //   { input: "text3", status: TodoStatus.COMPLETED },
  // ]);

  const [todos, setTodos] = useState<Todo[]>(() => {
    const storedTodos = localStorage.getItem("todo-list");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  const [currentTab, setCurrentTab] = useState("All");

  const [input, setInput] = useState("");

  //useEffect(() => {}, [todos]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const handleAdd = () => {
    const newTodos = todos.concat({
      id: uuidv4(),
      input: input,
      status: TodoStatus.OPEN,
    });
    setTodos(newTodos);
    setInput("");
  };

  useEffect(() => {
    const storedTodos = localStorage.getItem("todo-list");
    if (storedTodos !== JSON.stringify(todos)) {
      localStorage.setItem("todo-list", JSON.stringify(todos));
    }
  }, [todos]);

  return (
    <div className="max-w-lg mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
      <Header></Header>
      <TodoTabs
        todos={todos}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      ></TodoTabs>
      <TodoList
        todos={todos}
        setTodos={setTodos}
        currentTab={currentTab}
      ></TodoList>
      <div className="flex items-center gap-2 mt-6">
        <input
          className="flex-1 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400 outline-none"
          type="text"
          value={input}
          placeholder="Add a new task..."
          onChange={handleChange}
        ></input>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
          onClick={handleAdd}
        >
          add
        </button>
      </div>
    </div>
  );
}
