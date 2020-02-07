import React from 'react';
import Calendar from './atoms/Calendar/Calendar';
import ExpansionPanel from './atoms/ExpansionPanel/ExpansionPanel';

const App: React.FC = () => {
  return (
    <div>
      <Calendar />
      <ExpansionPanel/>
    </div>
  );
};

export default App;
