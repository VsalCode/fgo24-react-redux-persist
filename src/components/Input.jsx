import { useDispatch } from "react-redux";
import { addTodo } from "../redux/reducers/todo";
import { RiCalendarTodoLine } from "react-icons/ri";
import { MdAddBox } from "react-icons/md";
import { useForm } from "react-hook-form"


function Input() {
  const dispatch = useDispatch();
  const {register, handleSubmit} = useForm()

  const handleAddTodo = (value) => {
    const { query : e } = value
    console.log(e);
    
    if (e) {
      dispatch(addTodo(e));
    }
  };

  return (
    <form onSubmit={handleSubmit(handleAddTodo)} className="bg-[#202020] w-full max-w-150 rounded-xl h-fit py-4 px-5 flex gap-5 justify-between items-center">
      <RiCalendarTodoLine className="text-3xl" />
      <input type="text"  className="outline-none grow text-lg" placeholder="Add a todo" {...register('query')} />
      <button type="submit" className="flex items-center gap-2 bg-[#A87BF8] text-[#0D0D0D] font-bold py-2 px-3 rounded-xl cursor-pointer">
        <span>ADD</span>
        <MdAddBox className="text-2xl" />
      </button>
    </form>
  );
}

export default Input;
