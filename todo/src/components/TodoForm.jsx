import React,{useState} from "react";
import { useTodo } from "../context/TodoContext";
const TodoForm = () => {
  const [todo, settodo] = useState("")
  const {addTodo} = useTodo()
  const add=(e)=>{
    e.preventDefault();
    if(!todo) return
    addTodo({id:Math.random(),todo:todo,completed:false})
    settodo("")
  }
  return (
    <div>
      <form className="flex items-center"
        onSubmit={(e) => {
          add(e)
        }}
      >
        <input
          type="text"
          name=""
          value={todo}
          onChange={(e) => {
            settodo(e.target.value);
          }}
          placeholder="Add a todo"
          className="py-1.5 px-3 bg-white/20 rounded-l-lg outline-none border-none w-full"
          id=""
        />
        <button type="submit" className="py-1.5 px-3 bg-green-600 hover:bg-green-800 duration-75 text-white rounded-r-lg">Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
