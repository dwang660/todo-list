import React, { useEffect, useState } from "react";
import { Todo, TodoStatus } from "../types/todo";

const TodoTabs = ({
  todos,
  currentTab,
  setCurrentTab,
}: {
  todos: Todo[];
  currentTab: string;
  setCurrentTab: (card: string) => void;
}) => {
  const [tabs, setTabs] = useState<{ name: string; count: number }[]>([]);

  useEffect(() => {
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

  const handleTabClick = (card: string) => {
    setCurrentTab(card);
  };
  return (
    <div className="flex justify-center my-4">
      <div className="flex space-x-4 bg-gray-100 p-2 rounded-lg shadow-md">
        <div className="flex">
          {tabs.map((tab, tabIndex) => (
            <button
              key={tabIndex}
              onClick={() => handleTabClick(tab.name)}
              className={`relative px-4 py-2 text-sm font-medium rounded-md transition-all duration-300
                ${
                  currentTab === tab.name
                    ? "bg-pink-500 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-pink-100"
                }`}
            >
              {tab.name} ({tab.count})
              {currentTab === tab.name && (
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-pink-500 shadow-md"></span>
              )}
            </button>
          ))}
        </div>
        <hr></hr>
      </div>
    </div>
  );
};

export default TodoTabs;
