import React from 'react'
import Header from './Header';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import TinderCards from "./TinderCards"

function App() {
  return (
    <div className="App">
      <Router>
      <Header />        
        <Switch>
          <Route path="/profile">
            <h1>This is the profile page</h1>
          </Route>
          <Route path="/grade1thr2">
            <h1>Weclome 1st and 2nd graders!</h1>
          </Route>
          <Route path="/grade3thr4">
            <h1>Weclome 3rd and 4th graders!</h1>
          </Route>
          <Route path="/grade5thr6">
            <h1>Weclome 5th and 6th graders!</h1>
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
