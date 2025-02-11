import React, { useEffect, useState } from "react";
import { Todo, TodoStatus } from "../types/todo";

const TodoTabs = ({ todos }: { todos: Todo[] }) => {
  const [todoOpen, setTodoOpen] = useState<Todo[]>([]);
  const [todoInProgress, setTodoInProgress] = useState<Todo[]>([]);
  const [todoCompleted, setTodoCompleted] = useState<Todo[]>([]);
  const [tabs, setTabs] = useState<{ name: string; count: number }[]>([]);

  useEffect(() => {
    setTodoOpen(
      todos.filter((todo) => {
        return todo.status == TodoStatus.OPEN;
      })
    );
    setTodoInProgress(
      todos.filter((todo) => {
        return todo.status == TodoStatus.IN_PROGRESS;
      })
    );
    setTodoCompleted(
      todos.filter((todo) => {
        return todo.status == TodoStatus.COMPLETED;
      })
    );
    const tabs = [
      {
        name: "All",
        count: todos.length,
      },
      {
        name: "Open",
        count: todos.filter((todo) => {
          return todo.status == TodoStatus.OPEN;
        }).length,
      },
      {
        name: "In Progress",
        count: todos.filter((todo) => {
          return todo.status == TodoStatus.IN_PROGRESS;
        }).length,
      },
      {
        name: "Completed",
        count: todos.filter((todo) => {
          return todo.status == TodoStatus.COMPLETED;
        }).length,
      },
    ];
    setTabs(tabs);
  }, [todos]);

  return (
    <div className="flex">
      {tabs.map((tab, tabIndex) => (
        <button className="p-2" key={tabIndex}>
          {`${tab.name}(${tab.count})`}
        </button>
      ))}
    </div>
  );
};

export default TodoTabs;
