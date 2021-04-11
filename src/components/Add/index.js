import React, { useState } from 'react';
import style from './style.css';

export const Add = ({ act }) => {
  const [input, setInput] = useState('');

  return (
    <div className={style.add}>
      <input
        type="text"
        className={style.input_add}
        placeholder="add details"
        value={input}
        onChange={(e) =>
          setInput(e.target.value)
        }
      />
      <span>
        <button
          className={style.button_add}
          onClick={() => {
            if (input !== '') {
              act({ type: 'INSERT_TASK', payload: input });
              setInput('');
            }
          }}
        >
          Add
        </button>
      </span>
    </div>
  );
};
