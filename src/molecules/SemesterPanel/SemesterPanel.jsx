import React from 'react';
import PropTypes from 'prop-types';
import CoursePanel from 'molecules/CoursePanel/CoursePanel';

const SemesterPanel = props => {
  const { value, index } = props;

  if (value !== index) {
    return <></>;
  }

  return <CoursePanel />;
};

export default SemesterPanel;

SemesterPanel.propTypes = {
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};
