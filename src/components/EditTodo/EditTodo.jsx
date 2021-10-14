import {
  Button,
  Input,
} from 'antd';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import styles from './EditTodo.module.css';

function EditTodo({
  title,
  onChange,
  changeView,
}) {
  const [value, setValue] = useState(title);

  const handleChange = () => onChange(value);
  return (
    <>
      <Input
        size="small"
        className={styles.title}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        size="small"
        onClick={handleChange}
        className={styles.button}
      >
        ✅
      </Button>
      <Button
        size="small"
        onClick={changeView}
        className={styles.button}
      >
        ❌
      </Button>
    </>
  );
}

EditTodo.propTypes = {
  title: PropTypes.string,
  onChange: PropTypes.func,
  changeView: PropTypes.func,
};
EditTodo.defaultProps = {
  title: null,
  onChange: () => {},
  changeView: () => {},
};

export default EditTodo;
