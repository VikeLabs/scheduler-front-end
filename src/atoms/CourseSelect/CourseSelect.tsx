import 'isomorphic-fetch';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';

interface CourseType {
  subject: string;
  code: string;
}

const CourseSelect: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<CourseType[]>([]);
  const loading = open && options.length === 0;

  // TODO: Save the courses added by a user
  /**
  Adds course to user.
  @param {any} _event The onChange event.
  @param {any} num2 The value of the input.
  @returns {any} The course that has been added.
 */
  function handleAddCourse(_event: any, value: any) {
    return value;
  }

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      // TODO: Import the user's active termCode this is a placeholder
      const termCode = 201901;
      const response = await fetch(`https://uvic-scheduler-server.herokuapp.com/courses?term=${termCode}`);
      const courses = await response.json();
      const space = ' ' as any;

      if (active) {
        setOptions(Object.keys(courses).map(key => courses[key].subject + space + courses[key].code) as CourseType[]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      id="course-select"
      style={{ width: 300 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      onChange={handleAddCourse}
      getOptionSelected={(option, value) => option === value}
      options={options}
      loading={loading}
      renderInput={params => (
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
      )}
    />
  );
};

export default CourseSelect;
