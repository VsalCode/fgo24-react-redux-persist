import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../redux/reducers/todo";
import { FaTrashAlt, FaRegEdit } from "react-icons/fa";
import { useForm } from "react-hook-form";

function TodoList() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null); 
  const { register, handleSubmit, reset } = useForm();

  const handleEditSubmit = (value) => {
    const { query } = value;
    if (editIndex && query) { 
      dispatch(editTodo({ index: editIndex, newText: query }));
      setShowModal(false);
      setEditIndex(null);
      reset()
    }
  };

  const openEditModal = (index) => {
    setEditIndex(index);
    setShowModal(true);
  };

  return (
    <ul className="w-full max-w-[600px]">
      {todos.map((todo, index) => (
        <li
          key={index}
          className="bg-[#202020] flex items-center justify-between rounded-xl h-fit py-4 px-5 mt-5"
        >
          {showModal && editIndex === index ? ( 
            <form
              onSubmit={handleSubmit(handleEditSubmit)}
              className="text-xl flex gap-5 items-center grow"
            >
              <input
                type="text"
                defaultValue={todo} 
                {...register("query")}
                className="outline-none text-white p-2 rounded flex-grow bg-gray-700"
              />
              <button
                type="submit"
                className="text-[#202020] font-semibold py-2 bg-green-500 px-3 rounded"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowModal(false);
                  setEditIndex(null);
                  reset();
                }}
                className="text-[#202020] font-semibold py-2 bg-gray-500 px-3 rounded"
              >
                Cancel
              </button>
            </form>
          ) : (
            <>
              <label className="text-xl flex gap-5 items-center grow cursor-pointer">
                <input
                  type="checkbox"
                  name="checkbox"
                  id={`checkbox-${index}`}
                  className="peer"
                />
                <span className="peer-checked:line-through">{todo}</span>
              </label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => openEditModal(index)}
                  className="bg-[#A87BF8] p-3 rounded-xl cursor-pointer text-[#202020] font-bold"
                >
                  <FaRegEdit className="text-xl" />
                </button>
                <button
                  onClick={() => dispatch(deleteTodo(index))}
                  className="bg-[#7D0A0A] p-3 rounded-xl cursor-pointer"
                >
                  <FaTrashAlt className="text-xl" />
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;