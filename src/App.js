import 'antd/dist/antd.css';

import { Divider } from 'antd';
import React, { useState } from 'react';

import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';
import * as helpers from './helpers';

function App() {
  const [todosLS, setTodosLS] = useState(helpers.getTodoItemsFromLocalStorage('todo') || []);
  const save = (data) => {
    setTodosLS(data);
    helpers.saveTodoItemsToLocalStorage('todo', data);
  };

  const createNewTodo = (title) => {
    const id = helpers.genId();
    save([...todosLS, {
      id,
      title,
      checked: false,
    }]);
  };

  const updateTodo = (id, value, key) => {
    save([...todosLS.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          [key]: value,
        };
      }
      return todo;
    })]);
  };

  const deleteTodo = (id) => save([...todosLS.filter((todo) => todo.id !== id)]);

  const getActions = (id) => ({
    onChange: (title) => updateTodo(id, title, 'title'),
    onCheckedChange: (checked) => updateTodo(id, checked, 'checked'),
    onRemove: () => deleteTodo(id),
  });

  const todoItems = todosLS.map((todo) => ({
    ...todo,
    ...getActions(todo.id),
  }));

  const sortBase = [{
    key: 'title',
    value: null,
  }];
  const [sort, setSort] = useState(sortBase || []);
  const updateSortValue = (value) => {
    if (value === 'asc') return 'desc';
    if (value === 'desc') return null;
    return 'asc';
  };
  const onChangeSort = (key) => {
    setSort((prevState) => prevState.map((sortItem) => {
      if (sortItem.key === key) {
        return { ...sortItem, value: updateSortValue(sortItem.value) };
      }
      return sortItem;
    }));
  };

  return (
    <div className="App">
      <div className="todos">
        <NewTodoForm onSubmit={createNewTodo} />
        <Divider />
        <TodoList
          list={todoItems}
          sort={sort}
          onChangeSort={onChangeSort}
        />
      </div>
    </div>
  );
}

export default App;
