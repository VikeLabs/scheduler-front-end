import React from 'react';
import PropTypes from 'prop-types';
import CoursePanel from 'molecules/CoursePanel/CoursePanel';

const SemesterPanel: React.FC<{
  value: number;
  index: number;
  semester: number;
}> = props => {
  const { value, index, semester } = props;

  if (value !== index) {
    return <></>;
  }

  return (
    <>
      {semester}
      <CoursePanel />
    </>
  );
};

export default SemesterPanel;

SemesterPanel.propTypes = {
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  semester: PropTypes.number.isRequired,
};
