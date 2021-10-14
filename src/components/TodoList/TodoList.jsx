import { Space } from 'antd';
import PropTypes from 'prop-types';
import React, {
  useMemo,
} from 'react';

import TodoItem from '../TodoItem';
import styles from './TodoList.module.css';

function TodoList({ list: listProp }) {
  const list = useMemo(() => listProp, [listProp]);

  return (
    <div className={styles.wrapper}>
      <pre>
        {JSON.stringify(list)}
      </pre>
      <Space
        className={styles.space}
        direction="vertical"
      >
        {list.map((todo) => (
          <TodoItem
            key={todo.title}
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
