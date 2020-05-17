import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Tabs from '@material-ui/core/Tabs/Tabs';
import Tab from '@material-ui/core/Tab/Tab';
import Theme from 'atoms/Theme/Theme';
import SemesterPanel from 'molecules/SemesterPanel/SemesterPanel';
import './SemesterTabs.css';

const SemesterTabs: React.FC<{ defaultVal?: number }> = props => {
  const { defaultVal = 0 } = props;
  const [value, setValue] = React.useState(defaultVal);
  const [semesters, setSemesters] = useState([]);

  const getSemesters = async () => {
    try {
      const response = await axios.get('https://uvic-scheduler-server.herokuapp.com/semesters');
      setSemesters(response.data);
    } catch (error) {
      // TODO handle this
    }
  };

  // get the semesters when the component mounts
  useEffect(() => {
    getSemesters();
  }, []);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const renderTabs = () => {
    if (!semesters) {
      return undefined;
    }
    return semesters.map((semester: any, index) => (
      <Tab id={`tab-${index}`} key={`tab-${semester.term}`} label={<span className="tab">{semester.title}</span>} />
    ));
  };

  const renderPanels = () => {
    if (!semesters) {
      return undefined;
    }
    return semesters.map((semester: any, index) => (
      <SemesterPanel key={`panel-${semester.term}`} value={value} index={index} semester={semester.term} />
    ));
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
          {renderTabs()}
        </Tabs>
      </AppBar>
      <div className="panel-container">{renderPanels()}</div>
    </>
  );
};

export default SemesterTabs;
