import React, { useState } from "react";

// create your first component
const Todolist = () => {

  const [inputValue, setInputValue] = useState('');
  const [valueList, setValueList] = useState([]);

  function addTodo(e) {
    e.preventDefault();

    if (inputValue.trim() !== '') {
      setValueList([...valueList, inputValue]);
      setInputValue('');
    }
  }

  return (
    <div className="container">
      <h1 className="text-center my-4">todos</h1>

      <form onSubmit={addTodo}>
        <div className="input-group mb-0">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            placeholder={valueList.length === 0 && inputValue === '' ? 'No tasks, add taks!' : 'Add a task!'}
          />

        </div>

      </form>

      <ul className="list-group">
        {valueList.map((task, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {task}
            <button className="btn" onClick={() => {
              const newList = valueList.filter((_, idx) => idx !== index);
              setValueList(newList);
            }}>
              <i class="fa-solid fa-x"></i>
            </button>
          </li>

        ))}
        <div className="my-1">
          <h6>{valueList.length} item left</h6>
        </div>
      </ul>

    </div>
  );
};

export default Todolist;
