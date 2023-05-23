import { useEffect, useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import todoIcon from "./assets/Todo-Icon.png";

function todoRducer(todos, action) {
  switch (action.type) {
    case "ADD":
      return [
        ...todos,
        { id: uuidv4(), text: action.payload, completed: false },
      ];
    case "TOGGLE":
      return todos.map((item) =>
        item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item
      );
    case "DELETE":
      return todos.filter((item) => item.id !== action.payload);
    case "EDIT":
      return todos.map((item) =>
        item.id === action.payload.id
          ? { ...item, text: action.payload.text }
          : item
      );
    default:
      break;
  }
}

function App() {
  const [todos, dispatch] = useReducer(todoRducer, [], () => {
    const localValue = JSON.parse(localStorage.getItem("TODOS"));
    return localValue ? localValue : [];
  });
  const [newTodo, setNewTodo] = useState("");
  const [isEdit, setIsEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem("TODOS", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTodo();
  };

  const handleAddTodo = () => {
    if (!newTodo.trim()) return;
    if (isEdit) {
      dispatch({ type: "EDIT", payload: { id: isEdit.id, text: newTodo } });
      setIsEdit(null);
    } else {
      dispatch({ type: "ADD", payload: newTodo });
      setNewTodo("");
    }
    setNewTodo("");
  };

  const handleToggle = (id) => {
    dispatch({ type: "TOGGLE", payload: id });
  };

  const handleDelete = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const handleEdit = (item) => {
    setNewTodo(item.text);
    setIsEdit(item);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full mx-auto max-w-lg p-4 rounded-md drop-shadow-xl flex flex-col justify-center bg-[#758bfd] mt-10"
      >
        <img
          src={todoIcon}
          alt="Todo Image"
          className="w-20 m-auto drop-shadow-2xl"
        />
        <h2 className="w-max m-auto text-2xl underline pt-6">Todo App</h2>
        <div className="flex items-center gap-3 mb-5 w-full mt-10">
          <input
            className="p-3 text-black w-full rounded outline-none drop-shadow-lg"
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add Todo...."
          />
          <button
            onClick={handleAddTodo}
            className="py-3 px-5 cursor-pointer rounded  bg-[#003566] hover:bg-[#001d3d] text-white drop-shadow-lg transition-all duration-200 outline-none"
          >
            {isEdit ? "Save" : "Add"}
          </button>
        </div>

        <ul className="flex flex-col gap-3">
          {todos.length <= 0 && (
            <div className="text-white uppercase text-center text-xl">
              Empty List...
            </div>
          )}

          {todos.map((item) => (
            <li
              key={item.id}
              className="flex justify-between p-3 items-center rounded-md hover:bg-black hover:bg-opacity-30 transition-all"
            >
              <div className="flex justify-between gap-3 items-center flex-1">
                <input
                  checked={item.completed}
                  onChange={() => handleToggle(item.id)}
                  className="w-6 h-6"
                  type="checkbox"
                />
                <span
                  className={`${item.completed ? "line-through" : ""} flex-1`}
                >
                  {item.text}
                </span>
              </div>

              <div className=" flex items-center gap-3">
                <span
                  onClick={() => handleDelete(item.id)}
                  className="cursor-pointer w-8 h-8 flex items-center justify-center bg-red-100 rounded-full text-red-500 drop-shadow-md"
                >
                  <AiFillDelete size={20}></AiFillDelete>
                </span>
                <span
                  onClick={() => handleEdit(item)}
                  className="cursor-pointer w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full text-blue-500 drop-shadow-md"
                >
                  <AiFillEdit size={20}></AiFillEdit>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </form>
    </>
  );
}

export default App;
