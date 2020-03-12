import React from 'react';
import PropTypes from 'prop-types';

const SemesterPanel = props => {
  const { value, index } = props;

  if (value !== index) {
    return <></>;
  }

  return <div>{value}</div>;
};

export default SemesterPanel;

SemesterPanel.propTypes = {
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};
