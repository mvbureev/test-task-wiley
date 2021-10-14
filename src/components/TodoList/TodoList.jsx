import { Space } from 'antd';
import PropTypes from 'prop-types';
import React, {
  useMemo,
} from 'react';

import { sortBy } from '../../helpers';
import Sort from '../Sort';
import TodoListItem from '../TodoListItem';
import styles from './TodoList.module.css';

function TodoList({
  list: listProp,
  sort,
  onChangeSort,
}) {
  const list = useMemo(() => listProp, [listProp]);

  const sortedList = sort.flatMap((item) => {
    if (item.value === 'asc') {
      return list.concat().sort(sortBy(item.key));
    }
    if (item.value === 'desc') {
      return list.concat().sort(sortBy(item.key)).reverse();
    }
    return list;
  });

  return (
    <div className={styles.wrapper}>
      <Sort
        sort={sort[0]}
        onChangeSort={() => onChangeSort('title')}
        className={styles.sort}
      />
      <Space
        className={styles.space}
        direction="vertical"
      >
        {sortedList.map(({ id, ...todo }) => (
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
  sort: PropTypes.arrayOf(PropTypes.objectOf(Object)),
  onChangeSort: PropTypes.func,
};
TodoList.defaultProps = {
  list: [{}],
  sort: [{}],
  onChangeSort: () => {},
};

export default TodoList;
