"use client";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../store/todoSlice";
import { Button } from "antd";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between p-2 border-b">
      <span>{todo.text}</span>
      <Button
        type="primary"
        danger
        onClick={() => dispatch(deleteTodo(todo.id))}
      >
        Delete
      </Button>
    </div>
  );
};

export default TodoItem;
