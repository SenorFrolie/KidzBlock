import React from 'react'
import Header from './Header';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import TinderCards from "./TinderCards"

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/profile">
            <h1>This is the profile page</h1>
          </Route>
          <Route path="/">
            <h1>Welcome to Kidz Blocks! Please select your age group:</h1>
            <TinderCards />
            {/*game buttons*/}
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
