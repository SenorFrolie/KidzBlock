import React from 'react'
import "./css/LeaderBoard.css"
import Button from "react-tinder-card";
import { useState } from 'react';
import './../../components/css/Menu.css';
import { IconButton } from '@mui/material';
import { Link } from "react-router-dom"

function LeaderBoard() {
/* Button data */
const [kart] = useState([{name: "Kart", url: "http://cs.txstate.edu/~rge15/raceCarGame.png"},]);
const [snake] = useState([{name: "Snake", url: "http://cs.txstate.edu/~rge15/snakeyGame.png"},]);
const [ticTacToe] = useState([{name: "Tic-Tac-Toe", url: "http://cs.txstate.edu/~rge15/TicTacToeGame.png"},]);
const [matching] = useState([{name: "Matching", url: "http://cs.txstate.edu/~rge15/matchingGame.png"},]);
const [sliding] = useState([{name: "Sliding Puzzle", url: "http://cs.txstate.edu/~rge15/puzzleGame.png"},]);
const [my2048] = useState([{name: "2048", url: "http://cs.txstate.edu/~rge15/2048Game.png"},]);
const [spelling] = useState([{name: "Spelling", url: "http://cs.txstate.edu/~rge15/spellingGame.png"},]);
//const [letters] = useState([{name: "Letters", url: "http://cs.txstate.edu/~rge15/alphabetGame.png"},]);
//const [numbers] = useState([{name: "Numbers", url: "http://cs.txstate.edu/~rge15/numberGame.png"},]);

  return (
    <>
      <div>
        <h1>All LeaderBoards</h1>
      </div>
      <div className='category'>
        <div className='leaderboard'>
          <h2>Puzzles</h2>
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
            {/*Sliding Puzzle Button */}
            {sliding.map(game => (
              <Link to="/leaderboard-pages/LeaderBoard-SlidingPuzzle">
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
        <div>
          <h2>Letters And Numbers</h2>
        </div>
        <div>
          <div className="LeaderboardGameContainer">
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
      <div className='category'>
        <div>
          <h2>Action Adventure</h2>
        </div>
        <div>
          <div className="LeaderboardGameContainer">
            {/*Kart Button */}
            {kart.map(game => (
              <Link to="/leaderboard-pages/LeaderBoard-Kart">
                <IconButton>
                  <Button className="swipe" key={game.name} preventSwipe={['up','down','left','right']}>
                    <div style={{ backgroundImage: `url(${game.url})` }} className="leaderboardGameCard">
                      <h3>{game.name}</h3>
                    </div>
                  </Button>
                </IconButton>
              </Link>
            ))}
            {/*Snake Button */}
            {snake.map(game => (
              <Link to="/leaderboard-pages/LeaderBoard-Snake">
                <IconButton>
                  <Button className="swipe" key={game.name} preventSwipe={['up','down','left','right']}>
                    <div style={{ backgroundImage: `url(${game.url})` }} className="leaderboardGameCard">
                      <h3>{game.name}</h3>
                    </div>
                  </Button>
                </IconButton>
              </Link>
            ))}
            {/*Tic-Tac-Toe Button */}
            {ticTacToe.map(game => (
              <Link to="/leaderboard-pages/LeaderBoard-TicTacToe">
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