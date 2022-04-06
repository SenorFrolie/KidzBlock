import React from 'react'
import Header from './components/Header';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import TinderCards from "./components/TinderCards";
import Puzzles from './pages/category-pages/Puzzles';
import LettersNumbers from './pages/category-pages/LettersNumbers';
import ActionAdventure from './pages/category-pages/ActionAdventure';
//import LeaderBoard from './pages/LeaderBoard';
import Profile from './pages/Profile';
import TicTacToe from './pages/game-pages/TicTacToe'
import My2048 from './pages/game-pages/My2048'
import Spelling from './pages/game-pages/Spelling'
import Matching from './pages/game-pages/Matching'
//import SlidingPuzzle from './pages/game-pages/SlidingPuzzle'
//import Letters from './pages/game-pages/Letters'
//import Numbers from './pages/game-pages/Numbers'
//import Kart from './pages/game-pages/Kart'
//import Snake from './pages/game-pages/Snake'
import LeaderBoardTicTacToe from './pages/leaderboard-pages/LeaderBoard-TicTacToe'
import LeaderBoard2048 from './pages/leaderboard-pages/LeaderBoard-2048'
import LeaderBoardSpelling from './pages/leaderboard-pages/LeaderBoard-Spelling'
import LeaderBoardMatching from './pages/leaderboard-pages/LeaderBoard-Matching'
//import SlidingPuzzle from './pages/game-pages/SlidingPuzzle'
//import Letters from './pages/game-pages/Letters'
//import Numbers from './pages/game-pages/Numbers'
//import Kart from './pages/game-pages/Kart'
//import Snake from './pages/game-pages/Snake'

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
  {/*
          <Route path='/LeaderBoard' exact component={LeaderBoard} />
  */}
          <Route path='/Profile' exact component={Profile} />
          <Route path='/game-pages/TicTacToe' exact component={TicTacToe} />
          <Route path='/game-pages/My2048' exact component={My2048} />
          <Route path='/game-pages/Spelling' exact component={Spelling} />
          <Route path='/game-pages/Matching' exact component={Matching} />
          {/*
          <Route path='/game-pages/Letters' exact component={Letters} />
          <Route path='/game-pages/SlidingPuzzle' exact component={SlidingPuzzle} />
          <Route path='/game-pages/Numbers' exact component={Numbers} />
          <Route path='/game-pages/Kart' exact component={Kart} />
          <Route path='/game-pages/Snake' exact component={Snake} />
          */}
          <Route path='/leaderboard-pages/LeaderBoard-TicTacToe' exact component={LeaderBoardTicTacToe} />
          <Route path='/leaderboard-pages/LeaderBoard-2048' exact component={LeaderBoard2048} />
          <Route path='/leaderboard-pages/LeaderBoard-Spelling' exact component={LeaderBoardSpelling} />
          <Route path='/leaderboard-pages/LeaderBoard-Matching' exact component={LeaderBoardMatching} />
          {/*
          <Route path='/leaderboard-pages/Letters' exact component={Letters} />
          <Route path='/leaderboard-pages/SlidingPuzzle' exact component={SlidingPuzzle} />
          <Route path='/leaderboard-pages/Numbers' exact component={Numbers} />
          <Route path='/leaderboard-pages/Kart' exact component={Kart} />
          <Route path='/leaderboard-pages/Snake' exact component={Snake} />
          */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
  
