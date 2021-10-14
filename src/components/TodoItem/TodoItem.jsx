import { Card } from 'antd';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import EditTodo from '../EditTodo';
import Todo from '../Todo';
import styles from './TodoItem.module.css';

function TodoItem({
  title,
  checked,
  onChange,
  onCheckedChange,
  onRemove,
}) {
  const [editView, setEditView] = useState(false);

  const handleDefaultView = () => setEditView(false);
  const handleEditView = () => setEditView(true);
  const handleChange = (value) => {
    onChange(value);
    handleDefaultView();
  };

  return (
    <Card
      className={styles.card}
    >
      {editView ? (
        <EditTodo
          title={title}
          onChange={handleChange}
          changeView={handleDefaultView}
        />
      ) : (
        <Todo
          title={title}
          changeView={handleEditView}
          onRemove={onRemove}
          checked={checked}
          onCheckedChange={onCheckedChange}
        />
      )}
    </Card>
  );
}

TodoItem.propTypes = {
  title: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  onRemove: PropTypes.func,
  onCheckedChange: PropTypes.func,
};
TodoItem.defaultProps = {
  title: null,
  checked: false,
  onChange: () => {},
  onRemove: () => {},
  onCheckedChange: () => {},
};

export default TodoItem;
