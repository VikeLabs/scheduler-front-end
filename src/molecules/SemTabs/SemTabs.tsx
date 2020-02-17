import React from 'react';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Tabs from '@material-ui/core/Tabs/Tabs';
import Tab from '@material-ui/core/Tab/Tab';
import Theme from '../../atoms/Theme/Theme';
import './SemTabs.css';

const SemTabs: React.FC<{ defaultVal?: number }> = props => {
  const { defaultVal = 0 } = props;
  const [value, setValue] = React.useState(defaultVal);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <AppBar id="app-bar" position="static">
      <Tabs
        value={value}
        onChange={(event, newValue) => handleChange(event, newValue)}
        variant="fullWidth"
        TabIndicatorProps={{ style: { background: Theme.primary } }}
      >
        <Tab id="0" label="Fall" />
        <Tab id="1" label="Spring" />
        <Tab id="2" label="Summer" />
      </Tabs>
    </AppBar>
  );
};

export default SemTabs;
