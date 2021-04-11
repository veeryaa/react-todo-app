import React, { useEffect } from 'react';
import style from './style.css';

export const List = ({ task, status,  act }) => {
  return (
    <div className={style.list}>
      <input
        type="checkbox"
        onChange={(e) => act({ type: 'UPDATE_STATUS', payload: task })}
        className={style.list_check}
        checked={status == true ? true : false}
      />
      <span
        style={
          status == true
            ? { textDecoration: 'line-through' }
            : { textDecoration: 'none' }
        }
      >
        {task}
      </span>
    </div>
  );
};
