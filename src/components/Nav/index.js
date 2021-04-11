import React, { useEffect } from 'react';
import style from './style.css';

export const Nav = ({ act, selector }) => {
  useEffect(() => {
    console.log(selector);
  }, []);

  return (
    <div className={style.nav}>
      <p
        className={selector === 'ALL' ? style.active : ''}
        onClick={() => act({ type: 'LIST_TASK', payload: 'ALL' })}
      >
        All
      </p>
      <p
        className={selector === 'ACTIVE' ? style.active : ''}
        onClick={() => act({ type: 'LIST_TASK', payload: 'ACTIVE' })}
      >
        Active
      </p>
      <p
        className={selector === 'COMPLETED' ? style.active : ''}
        onClick={() => act({ type: 'LIST_TASK', payload: 'COMPLETED' })}
      >
        Completed
      </p>
    </div>
  );
};
