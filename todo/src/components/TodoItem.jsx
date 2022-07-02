import React, { useRef } from "react";
//icons
import { AiFillEdit } from "react-icons/ai";
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";
//redux

const TodoItem = ({ item, updateTodo, removeTodo, completeTodo }) => {
  const inputRef = useRef(true);
  //functions
  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };
  const update = (id, value, e) => {
    if (e.which === 13) {
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };
  return (
    <div>
      <li key={item.id} className="card">
        <textarea
          ref={inputRef}
          disabled={inputRef}
          defaultValue={item.item}
          onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
        />
        <div className="btns">
          <button onClick={() => changeFocus()}>
            <AiFillEdit />
          </button>
          {item.completes === false && (
            <button onClick={() => completeTodo(item.id)}>
              <IoCheckmarkDoneSharp />
            </button>
          )}
          <button onClick={() => removeTodo(item.id)}>
            <IoClose />
          </button>
        </div>
        {item.completed && <span className="completed">done</span>}
      </li>
    </div>
  );
};

export default TodoItem;
