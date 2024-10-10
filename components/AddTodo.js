"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";
import { Input, Button } from "antd";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (todo.trim()) {
      dispatch(addTodo({ id: Date.now(), text: todo }));
      setTodo("");
    }
  };

  return (
    <div className="flex space-x-2">
      <Input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a new task"
      />
      <Button type="primary" onClick={handleAddTodo}>
        Add
      </Button>
    </div>
  );
};

export default AddTodo;
