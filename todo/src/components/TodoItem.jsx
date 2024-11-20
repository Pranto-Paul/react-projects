import React, { useState, useRef } from "react";
import { FaRegEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { IoMdSave } from "react-icons/io";
import { useTodo } from "../context/TodoContext";
const TodoItem = ({ todo }) => {
  const [edit, setedit] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const todoRef = useRef(null);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();
  return (
    <div
      className={`flex items-center bg-gray-500 w-full rounded-lg ${
        completed ? "bg-slate-300 text-black" : ""
      }`}
    >
      <input
        value={completed}
        onChange={(e) => {
          setCompleted(e.target.checked);
          toggleComplete(todo.id)
        }}
        type="checkbox"
        name=""
        className="mx-5 py-2 cursor-pointer outline-none"
        id=""
      />
      <input
        readOnly={!edit}
        type="text"
        ref={todoRef}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        className={`w-full px-3 bg-transparent py-2 outline-none border-none ${
          completed ? "line-through" : ""
        }`}
        id=""
      />
      <button
        className="px-3 py-2 hover:text-blue-400"
        onClick={() => {
          if (!edit) {
            setedit(!edit);
            todoRef.current.select();
          } else {
            setedit(!edit);
            updateTodo(todo.id, { ...todo, todo: todoMsg });
          }
        }}
      >
        {edit ? <IoMdSave /> : <FaRegEdit />}
      </button>
      <button
        className="px-3 py-2 hover:text-red-400"
        onClick={(e) => deleteTodo(todo.id)}
      >
        <FaDeleteLeft />
      </button>
    </div>
  );
};

export default TodoItem;
