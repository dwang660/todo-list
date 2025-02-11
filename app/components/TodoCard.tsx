import React from "react";
import { Todo } from "../types/todo";

interface Props {
  todo: Todo;
}

const TodoCard = ({ todo }: Props) => {
  return (
    <div>
      <div className="flex gap-2">
        <div>{todo.input}</div>
        <div>{todo.status}</div>
      </div>
    </div>
  );
};

export default TodoCard;
