import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Greeting from './Greeting';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Greeting} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
