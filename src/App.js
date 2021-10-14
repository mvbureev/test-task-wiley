import 'antd/dist/antd.css';

import { Divider } from 'antd';
import React from 'react';

import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';

const listMock = [
  {
    title: 'Task 1',
    checked: false,
  },
  {
    title: 'Task 2',
    checked: true,
  },
  {
    title: 'Task 3',
    checked: false,
  },
];

function App() {
  return (
    <div className="App">
      <div className="todos">
        <NewTodoForm onSubmit={(e) => console.log(e)} />
        <Divider />
        <TodoList list={listMock} />
      </div>
    </div>
  );
}

export default App;
