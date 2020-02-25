import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './pages/Main/Main';
import Home from './pages/Home/Home';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/main">
          <Main />
        </Route>
        <Route path="/signup">
          <Home signin={false} />
        </Route>
        <Route path="/">
          <Home signin />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
