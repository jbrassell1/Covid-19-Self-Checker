import { HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Main from './pages/Main.js';
import Question from './pages/Question.js';
import Home from './pages/Home.js';
import './App.css';
import Urgent from './pages/Urgent.js';
import Call from './pages/Call.js';
import React from 'react';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Main/>
          </Route>
          <Route path="/questions" component={Question} />
          <Redirect from="/questions" to="/questions/question1" />
          <Route path="/results/home">
           <Home />
          </Route>
          <Route path="/results/urgent">
            <Urgent />
          </Route>
          <Route path="/results/call">
            <Call />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
