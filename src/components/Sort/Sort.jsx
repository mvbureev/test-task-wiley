import {
  Button,
} from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './Sort.module.css';

function Sort({
  sort,
  onChangeSort,
  ...props
}) {
  const getSortImage = (value) => {
    if (value === 'asc') return '🔽';
    if (value === 'desc') return '🔼';
    return '↕️';
  };
  return (
    <Button
      size="small"
      onClick={onChangeSort}
      className={styles.button}
      {...props}
    >
      {sort.key}
      {' '}
      {getSortImage(sort.value)}
    </Button>
  );
}

Sort.propTypes = {
  sort: PropTypes.objectOf(Object),
  onChangeSort: PropTypes.func,
};
Sort.defaultProps = {
  sort: {},
  onChangeSort: () => {},
};

export default Sort;
