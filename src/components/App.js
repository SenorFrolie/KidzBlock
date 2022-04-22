import React from 'react'
import './css/App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './Header';
import Menu from "./Menu";
import Puzzles from './../pages/category-pages/Puzzles';
import LettersNumbers from './../pages/category-pages/LettersNumbers';
import ActionAdventure from './../pages/category-pages/ActionAdventure';
import TicTacToe from './../pages/game-pages/TicTacToe'
import My2048 from './../pages/game-pages/My2048'
import Letters from './../pages/game-pages/Letters'
import Numbers from './../pages/game-pages/Numbers'
import Karts from './../pages/game-pages/Karts'
import Spelling from './../pages/game-pages/Spelling'
import Matching from './../pages/game-pages/Matching'
import Sliding from './../pages/game-pages/Sliding'
import Snake from './../pages/game-pages/Snake';
//import Letters from './pages/game-pages/Letters'
//import Numbers from './pages/game-pages/Numbers'
import LeaderBoardTicTacToe from './../pages/leaderboard-pages/LeaderBoard-TicTacToe'
import LeaderBoard2048 from './../pages/leaderboard-pages/LeaderBoard-2048'
import LeaderBoardLetters from './../pages/leaderboard-pages/LeaderBoard-Letters'
import LeaderBoardNumbers from './../pages/leaderboard-pages/LeaderBoard-Numbers'
import LeaderBoardSpelling from './../pages/leaderboard-pages/LeaderBoard-Spelling'
import LeaderBoardMatching from './../pages/leaderboard-pages/LeaderBoard-Matching'
import LeaderBoardSliding from './../pages/leaderboard-pages/LeaderBoard-SlidingPuzzle'
import LeaderBoardKart from './../pages/leaderboard-pages/LeaderBoard-Kart'
import LeaderBoardSnake from './../pages/leaderboard-pages/LeaderBoard-Snake'
import LeaderBoards from './../pages/leaderboard-pages/LeaderBoards'
//import LeaderBoardLetters from './pages/leaderboard-pages/LeaderBoard-Letters'
//import LeaderBoardNumbers from './pages/leaderboard-pages/LeaderBoard-Numbers'

function App() {
  return (
    <>
      <Router>
      <Header />  
        <Switch>
          <Route path='/' exact component={Menu} />
{/*Main Menu buttons */}
          <Route path='/Puzzles' exact component={Puzzles} />
          <Route path='/LettersNumbers' exact component={LettersNumbers} />
          <Route path='/ActionAdventure' exact component={ActionAdventure} />
{/*Game pages */}
          <Route path='/game-pages/TicTacToe' exact component={TicTacToe} />
          <Route path='/game-pages/My2048' exact component={My2048} />
          <Route path='/game-pages/Letters' exact component={Letters} />
          <Route path='/game-pages/Numbers' exact component={Numbers} />
          <Route path='/game-pages/Karts' exact component={Karts} />
          <Route path='/game-pages/Spelling' exact component={Spelling} />
          <Route path='/game-pages/Matching' exact component={Matching} />
          <Route path='/game-pages/Sliding' exact component={Sliding} />
          <Route path='/game-pages/Snake' exact component={Snake} />
          {/*
          <Route path='/game-pages/Letters' exact component={Letters} />
          <Route path='/game-pages/Numbers' exact component={Numbers} />
        */}
{/*Leaderboard pages */}
          <Route path='/leaderboard-pages/LeaderBoards' exact component={LeaderBoards} />
          <Route path='/leaderboard-pages/LeaderBoard-TicTacToe' exact component={LeaderBoardTicTacToe} />
          <Route path='/leaderboard-pages/LeaderBoard-2048' exact component={LeaderBoard2048} />
          <Route path='/leaderboard-pages/LeaderBoard-Letters' exact component={LeaderBoardLetters} />
          <Route path='/leaderboard-pages/LeaderBoard-Numbers' exact component={LeaderBoardNumbers} />
          <Route path='/leaderboard-pages/LeaderBoard-Spelling' exact component={LeaderBoardSpelling} />
          <Route path='/leaderboard-pages/LeaderBoard-Matching' exact component={LeaderBoardMatching} />
          <Route path='/leaderboard-pages/LeaderBoard-SlidingPuzzle' exact component={LeaderBoardSliding} />
          <Route path='/leaderboard-pages/LeaderBoard-Kart' exact component={LeaderBoardKart} />
          <Route path='/leaderboard-pages/LeaderBoard-Snake' exact component={LeaderBoardSnake} />
          {/*
          <Route path='/leaderboard-pages/Letters' exact component={LeaderBoardLetters} />
          <Route path='/leaderboard-pages/Numbers' exact component={LeaderBoardNumbers} />
        */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
  
