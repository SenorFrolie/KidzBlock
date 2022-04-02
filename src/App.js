import React from 'react'
import Header from './components/Header';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import TinderCards from "./components/TinderCards";
import FirstnSecond from './pages/age-group-pages/FirstnSecond';
import ThirdnFourth from './pages/age-group-pages/ThirdnFourth';
import FifthnSix from './pages/age-group-pages/FifthnSix';
import LeaderBoard from './pages/LeaderBoard';
import Profile from './pages/Profile';
import TicTacToe from './pages/game-pages/TicTacToe'
//import NavBar from './components/NavBar';



function App() {
  return (
    <>
      <Router>
      <Header />  
        <Switch>
          <Route path='/' exact component={TinderCards} />
          <Route path='/FirstnSecond' exact component={FirstnSecond} />
          <Route path='/ThirdnFourth' exact component={ThirdnFourth} />
          <Route path='/FifthnSix' exact component={FifthnSix} />
          <Route path='/LeaderBoard' exact component={LeaderBoard} />
          <Route path='/Profile' exact component={Profile} />
          <Route path='/game-pages/TicTacToe' exact component={TicTacToe} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
  
