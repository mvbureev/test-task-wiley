import 'antd/dist/antd.css';

import React from 'react';

import NewTodoForm from './components/NewTodoForm';
// import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <div className="todos">
        <NewTodoForm onSubmit={(e) => console.log(e)} />
        {/* <NewTodoForm onSubmit={onSubmit} /> */}
        {/* <TodoList list={list} /> */}
      </div>
    </div>
  );
}

export default App;
