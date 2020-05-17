import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const CoursePanel: React.FC = () => {
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>Test</ExpansionPanelSummary>
      <ExpansionPanelDetails>This will show more things</ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default CoursePanel;
