import {
  Button,
  Checkbox,
  Typography,
} from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './Todo.module.css';

function Todo({
  title,
  changeView,
  onRemove,
  checked,
  onCheckedChange,
}) {
  return (
    <>
      <Checkbox
        size="large"
        checked={checked}
        onChange={(e) => onCheckedChange(e.target.checked)}
        className={styles.checkbox}
      />
      <Typography
        className={styles.title}
      >
        {title}
      </Typography>
      <Button
        size="small"
        onClick={changeView}
        className={styles.button}
      >
        ✍️
      </Button>
      <Button
        size="small"
        onClick={onRemove}
        className={styles.button}
      >
        🗑
      </Button>
    </>
  );
}

Todo.propTypes = {
  title: PropTypes.string,
  checked: PropTypes.bool,
  changeView: PropTypes.func,
  onCheckedChange: PropTypes.func,
  onRemove: PropTypes.func,
};
Todo.defaultProps = {
  title: null,
  checked: false,
  changeView: () => {},
  onCheckedChange: () => {},
  onRemove: () => {},
};

export default Todo;
