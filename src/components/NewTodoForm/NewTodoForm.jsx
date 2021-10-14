import {
  Button,
  Input,
} from 'antd';
import PropTypes from 'prop-types';
import React, {
  useState,
} from 'react';

import styles from './NewTodoForm.module.css';

function NewTodoForm({ onSubmit }) {
  const [todo, setTodo] = useState(null);

  const handleSubmit = () => {
    if (todo) {
      onSubmit(todo);
      setTodo(null);
    }
  };

  return (
    <div className={styles.wrapper}>
      <Input
        placeholder="Add new todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <Button onClick={handleSubmit}>➕</Button>
    </div>
  );
}

NewTodoForm.propTypes = {
  onSubmit: PropTypes.func,
};
NewTodoForm.defaultProps = {
  onSubmit: () => {},
};

export default NewTodoForm;
