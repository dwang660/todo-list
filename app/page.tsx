"use client";
import Image from "next/image";

import Header from "./components/Header";
import TodoTabs from "./components/TodoTabs";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { Todo, TodoStatus } from "./types/todo";
import { ReactElement, ReactEventHandler, useEffect, useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([
    { input: "text1", status: TodoStatus.OPEN },
    { input: "text2", status: TodoStatus.IN_PROGRESS },
    { input: "text3", status: TodoStatus.COMPLETED },
  ]);

  const [input, setInput] = useState("");

  //useEffect(() => {}, [todos]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const handleAdd = () => {
    const newTodos = todos.concat({ input: input, status: TodoStatus.OPEN });
    setTodos(newTodos);
    setInput("");
  };

  useEffect(() => {
    console.log("Todos in page");
    console.log(todos);
  }, [todos]);

  return (
    <div className="">
      <Header></Header>
      <TodoTabs todos={todos}></TodoTabs>
      <TodoList todos={todos} setTodos={setTodos}></TodoList>
      <div>
        <input type="text" value={input} onChange={handleChange}></input>
        <button onClick={handleAdd}>add</button>
      </div>
    </div>
  );
}
