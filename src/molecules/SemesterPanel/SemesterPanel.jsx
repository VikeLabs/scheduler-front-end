import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CoursePanel from 'molecules/CoursePanel/CoursePanel';
import CourseSelect from 'molecules/CourseSelect/SourseSelect';

const SemesterPanel = ({ value, index, term }) => {
  const [courses, setCourses] = useState([]);

  if (value !== index) {
    return <></>;
  }

  const addCourse = course => {
    setCourses([...courses, course]);
  };

  const renderCourses = () =>
    courses.map(course => <p key={`${course.subject} ${course.code}`}>{`${course.subject} ${course.code}`}</p>);

  return (
    <>
      {term}
      {renderCourses()}
      <CourseSelect term={201901} onAddCourse={addCourse} />
      <CoursePanel />
    </>
  );
};

export default SemesterPanel;

SemesterPanel.propTypes = {
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  term: PropTypes.number.isRequired,
};
