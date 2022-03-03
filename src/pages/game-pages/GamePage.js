import React from 'react'
import { Route, Link} from "react-router-dom"
import { Container } from "reactstrap";
import './GamePage.css'

function GamePage() {
  return (
    <div className="playWindow">
        <h1 className='gamePageHeading'>Game Page</h1>
        <div className="windowSelector">
            <Link to="/game-pages/GamePage">
            <button>Game Window</button>
            </Link>
            <Link to="/LeaderBoard">
            <button>LeaderBoard</button>
            </Link>
        </div>
    </div>
  );
}

export default GamePage