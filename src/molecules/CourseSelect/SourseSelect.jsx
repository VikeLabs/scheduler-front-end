import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import 'isomorphic-fetch';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';

const CourseSelect = ({ term, onAddCourse }) => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState([]);
  const loading = open && !options.length;

  const getCourses = async active => {
    const response = await fetch(`https://uvic-scheduler-server.herokuapp.com/courses?term=${term}`);
    const courses = await response.json();

    if (active) {
      setOptions(Object.keys(courses).map(i => `${courses[i].subject} ${courses[i].code}`));
    }
  };

  useEffect(() => {
    let active = true;

    if (loading) return undefined;

    getCourses(active);

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) setOptions([]);
  }, [open]);

  const handleOpen = value => () => {
    setOpen(value);
    setInputValue('');
  };

  const handleBlur = () => {
    setInputValue('');
  };

  const handleInputChange = (event, value) => {
    setInputValue(value);
  };

  const handleAddCourse = (event, value) => {
    if (value) {
      const [subject, code] = value.split(' ');
      onAddCourse({ subject, code: parseInt(code, 10) });
    }
    setInputValue('\r');
  };

  const renderInput = params => (
    <TextField
      {...params}
      label="Courses"
      fullWidth
      variant="outlined"
      InputProps={{
        ...params.InputProps,
        endAdornment: (
          <>
            {loading ? <CircularProgress color="inherit" size={20} /> : null}
            {params.InputProps.endAdornment}
          </>
        ),
      }}
    />
  );

  return (
    <Autocomplete
      id="course-select"
      blurOnSelect
      loading={loading}
      open={open}
      onOpen={handleOpen(true)}
      onClose={handleOpen(false)}
      onBlur={handleBlur}
      options={options}
      onInputChange={handleInputChange}
      onChange={handleAddCourse}
      getOptionSelected={(option, value) => option === value}
      renderInput={renderInput}
      inputValue={inputValue}
      // value={null}
    />
  );
};

CourseSelect.propTypes = {
  term: PropTypes.number.isRequired,
  onAddCourse: PropTypes.func.isRequired,
};

export default CourseSelect;
