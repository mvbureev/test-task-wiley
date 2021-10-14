import PropTypes from 'prop-types';
import React, {
  useMemo,
} from 'react';

import styles from './TodoList.module.css';

function TodoList({ list: listProp }) {
  const list = useMemo(() => listProp, [listProp]);

  return (
    <div className={styles.wrapper}>
      <pre>
        {JSON.stringify(list)}
      </pre>
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
