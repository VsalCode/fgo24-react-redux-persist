import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";
import { RiCalendarTodoLine } from "react-icons/ri";
import { MdAddBox } from "react-icons/md";

const Input = () => {
  const { addTodo } = useContext(TodoContext);
  const [input, setInput] = React.useState("");

  const handleAdd = () => {
    addTodo(input);
    setInput("");
  };

  return (
    <div className="bg-[#202020] w-full max-w-150 rounded-xl h-fit py-4 px-5 flex gap-5 justify-between items-center">
      <RiCalendarTodoLine className="text-3xl" />
      <input className="outline-none grow text-lg" type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button className="flex items-center gap-2 bg-[#A87BF8] text-[#0D0D0D] font-bold py-2 px-3 rounded-xl cursor-pointer" onClick={handleAdd}>
        <span>ADD</span>
        <MdAddBox className="text-2xl" />
      </button>
    </div>
  );
};

export default Input;
