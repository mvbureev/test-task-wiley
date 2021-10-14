import { Space } from 'antd';
import PropTypes from 'prop-types';
import React, {
  useMemo,
} from 'react';

import TodoListItem from '../TodoListItem';
import styles from './TodoList.module.css';

function TodoList({ list: listProp }) {
  const list = useMemo(() => listProp, [listProp]);

  return (
    <div className={styles.wrapper}>
      <Space
        className={styles.space}
        direction="vertical"
      >
        {list.map(({ id, ...todo }) => (
          <TodoListItem
            key={id}
            id={id}
            {...todo}
          />
        ))}
      </Space>
    </div>
  );
}

TodoList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.objectOf(Object)),
};
TodoList.defaultProps = {
  list: [{}],
};

export default TodoList;
