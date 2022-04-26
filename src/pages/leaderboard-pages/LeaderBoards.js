import React from 'react'
import "./css/LeaderBoard.css"
import Button from "react-tinder-card";
import { useState } from 'react';
import './../../components/css/Menu.css';
import { IconButton } from '@mui/material';
import { Link } from "react-router-dom"

function LeaderBoard() {
/* Button data */
//const [kart] = useState([{name: "Kart", url: "http://cs.txstate.edu/~rge15/raceCarGame.png"},]);
//const [snake] = useState([{name: "Snake", url: "http://cs.txstate.edu/~rge15/snakeyGame.png"},]);
//const [ticTacToe] = useState([{name: "Tic-Tac-Toe", url: "http://cs.txstate.edu/~rge15/TicTacToeGame.png"},]);
//const [sliding] = useState([{name: "Sliding Puzzle", url: "http://cs.txstate.edu/~rge15/puzzleGame.png"},]);
const [matching] = useState([{name: "Matching", url: "http://cs.txstate.edu/~rge15/matchingGame.png"},]);
const [my2048] = useState([{name: "2048", url: "http://cs.txstate.edu/~rge15/2048Game.png"},]);
const [spelling] = useState([{name: "Spelling", url: "http://cs.txstate.edu/~rge15/spellingGame.png"},]);
const [letters] = useState([{name: "Letters", url: "http://cs.txstate.edu/~rge15/letters.png"},]);
const [numbers] = useState([{name: "Numbers", url: "http://cs.txstate.edu/~rge15/numbers.png"},]);

  return (
    <>
      <div>
        <h1 className="mainTitle">All LeaderBoards</h1>
      </div>
      <div className='category'>
        <div className='leaderboard'>
          <h2 className="title">Puzzles</h2>
        </div>
        <div>
          <div className="LeaderboardGameContainer">
            {/*Matching Button */}
            {matching.map(game => (
              <Link to="/leaderboard-pages/LeaderBoard-Matching">
                <IconButton>
                  <Button className="swipe" key={game.name} preventSwipe={['up','down','left','right']}>
                    <div style={{ backgroundImage: `url(${game.url})` }} className="leaderboardGameCard">
                      <h3>{game.name}</h3>
                    </div>
                  </Button>
                </IconButton>
              </Link>
            ))}
            {/*2048 Button */}
            {my2048.map(game => (
              <Link to="/leaderboard-pages/LeaderBoard-2048">
                <IconButton>
                  <Button className="swipe" key={game.name} preventSwipe={['up','down','left','right']}>
                    <div style={{ backgroundImage: `url(${game.url})` }} className="leaderboardGameCard">
                      <h3>{game.name}</h3>
                    </div>
                  </Button>
                </IconButton>
              </Link>
            ))}
          </div>  
        </div> 
      </div>
      <div className='category'>
        <div className="leaderboard">
          <h2 className="title">Letters And Numbers</h2>
        </div>
        <div>
          <div className="LeaderboardGameContainer">
            {/*Letters Button */}
            {letters.map(game => (
              <Link to="/leaderboard-pages/LeaderBoard-Letters">
                <IconButton>
                  <Button className="swipe" key={game.name} preventSwipe={['up','down','left','right']}>
                    <div style={{ backgroundImage: `url(${game.url})` }} className="leaderboardGameCard">
                      <h3>{game.name}</h3>
                    </div>
                  </Button>
                </IconButton>
              </Link>
            ))}
            {/*Numbers Button */}
            {numbers.map(game => (
              <Link to="/leaderboard-pages/LeaderBoard-Numbers">
                <IconButton>
                  <Button className="swipe" key={game.name} preventSwipe={['up','down','left','right']}>
                    <div style={{ backgroundImage: `url(${game.url})` }} className="leaderboardGameCard">
                      <h3>{game.name}</h3>
                    </div>
                  </Button>
                </IconButton>
              </Link>
            ))}
            {/*Spelling Button */}
            {spelling.map(game => (
              <Link to="/leaderboard-pages/LeaderBoard-Spelling">
                <IconButton>
                  <Button className="swipe" key={game.name} preventSwipe={['up','down','left','right']}>
                    <div style={{ backgroundImage: `url(${game.url})` }} className="leaderboardGameCard">
                      <h3>{game.name}</h3>
                    </div>
                  </Button>
                </IconButton>
              </Link>
            ))}
          </div>  
        </div> 

      </div>
    </>
  )
}

export default LeaderBoard