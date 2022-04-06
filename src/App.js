import React from 'react'
import Header from './components/Header';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import TinderCards from "./components/TinderCards";
import Puzzles from './pages/age-group-pages/Puzzles';
import LettersNumbers from './pages/age-group-pages/LettersNumbers';
import ActionAdventure from './pages/age-group-pages/ActionAdventure';
import LeaderBoard from './pages/LeaderBoard';
import Profile from './pages/Profile';
import TicTacToe from './pages/game-pages/TicTacToe'
import My2048 from './pages/game-pages/My2048'
import Karts from './pages/game-pages/Karts'
import Spelling from './pages/game-pages/Spelling'
import Matching from './pages/game-pages/Matching'
import Sliding from './pages/game-pages/Sliding'
import Snake from './pages/game-pages/Snake';

//import NavBar from './components/NavBar';



function App() {
  return (
    <>
      <Router>
      <Header />  
        <Switch>
          <Route path='/' exact component={TinderCards} />
          <Route path='/Puzzles' exact component={Puzzles} />
          <Route path='/LettersNumbers' exact component={LettersNumbers} />
          <Route path='/ActionAdventure' exact component={ActionAdventure} />
          <Route path='/LeaderBoard' exact component={LeaderBoard} />
          <Route path='/Profile' exact component={Profile} />
          <Route path='/game-pages/TicTacToe' exact component={TicTacToe} />
          <Route path='/game-pages/TicTacToe' exact component={TicTacToe} />
          <Route path='/game-pages/My2048' exact component={My2048} />
          <Route path='/game-pages/Karts' exact component={Karts} />
          <Route path='/game-pages/Spelling' exact component={Spelling} />
          <Route path='/game-pages/Matching' exact component={Matching} />
          <Route path='/game-pages/Sliding' exact component={Sliding} />
          <Route path='/game-pages/Snake' exact component={Snake} />

        </Switch>
      </Router>
    </>
  );
}

export default App;
  
