import React, { useReducer } from 'react';
import { List } from './components/List';
import { Nav } from './components/Nav';
import { Add } from './components/Add';
import style from './style.css';

export const reducer = (state, action) => {
  switch (action.type) {
    case 'INSERT_TASK':
      state.result.push({ task: action.payload, status: false });
      return { ...state, selector: 'ALL' };
    case 'UPDATE_STATUS':
      state.result.find((e) => {
        if (e.task === action.payload) e.status = !e.status;
      });
      return { ...state };
    case 'LIST_TASK':
      return { ...state, selector: action.payload };
    default:
      return { ...state };
  }
};

export const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    result: [],
    selector: 'ALL',
  });

  const filterData = (data) => {
    return data.map((e, i) => (
      <List key={i} task={e.task} status={e.status} act={dispatch} />
    ));
  };

  const selector = () => {
    if (state.selector === 'COMPLETED') {
      return filterData(state.result.filter((e) => e.status));
    } else if (state.selector === 'ACTIVE') {
      return filterData(state.result.filter((e) => !e.status));
    } else {
      return filterData(state.result.filter((e) => e.status || !e.status));
    }
  };

  return (
    <div className={style.container}>
      <h1>react #todo</h1>
      <Nav act={dispatch} selector={state.selector} />
      <Add act={dispatch} selector={state.selector} />
      {selector()}
    </div>
  );
};
