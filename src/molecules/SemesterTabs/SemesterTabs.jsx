import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Tabs from '@material-ui/core/Tabs/Tabs';
import Tab from '@material-ui/core/Tab/Tab';
import Theme from 'atoms/Theme/Theme';
import SemesterPanel from 'molecules/SemesterPanel/SemesterPanel';
import './SemesterTabs.css';

const SemesterTabs = props => {
  const { defaultVal } = props;
  const [value, setValue] = React.useState(defaultVal);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar id="app-bar" position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          TabIndicatorProps={{ style: { background: Theme.primary } }}
        >
          <Tab id="0" label="Fall" />
          <Tab id="1" label="Spring" />
          <Tab id="2" label="Summer" />
        </Tabs>
      </AppBar>
      <div className="panel-container">
        <SemesterPanel value={value} index={0} />
        <SemesterPanel value={value} index={1} />
        <SemesterPanel value={value} index={2} />
      </div>
    </>
  );
};

SemesterTabs.propTypes = {
  defaultVal: PropTypes.number,
};

SemesterTabs.defaultProps = {
  defaultVal: 0,
};

export default SemesterTabs;
