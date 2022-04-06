import React, {useState} from 'react'
import './LeaderBoard.css'
import Profiles from './../../components/Profiles'
import { Leaderboard } from './../../components/ProfileDataBase'
import { Route, Link, NavLink } from "react-router-dom"
import { NavigateBefore } from '@material-ui/icons'
import { Button} from 'react-bootstrap';
import styled, { css } from 'styled-components'


/* Used to handle click events for filtering leaderboard by time */
function LeaderBoard() {

    const [period, setPeriod] = useState(0);

    const handleClick = (e) =>{
        setPeriod(e.target.dataset.id)
    }

    const NavUnlisted = styled.ul`
    display: flex;
    a {
      text-decoration: none;
    }
    li {
      color: red;
      margin: 0 0.8rem;
      font-size: 1.3rem;
      position: relative;
      list-style: none;
      display: flex;
    justify-content: center;
    }
  
    .current {
      li {
        border-bottom: 2px solid black;
      }
    }
  `;

  const links = [
    {name: "GamePage", path:"../game-pages/Karts"},
    {name: "LeaderBoard", path:"/leaderboard-pages/LeaderBoard-Kart"},
];

    return (
        <><div className="window">
            <NavUnlisted>
      {links.map((link,index) => (
        <NavLink key={index} to={link.path} exact activeClassName="current">
          <li>{link.name}</li>
        </NavLink>
      ))}
    </NavUnlisted>
        </div>
        <div className="board">
            <h1 className='leaderboard'>LeaderBoard Page</h1>
            <div className="duration">
                <button onClick={handleClick} data-id='7'>7 Days</button>
                <button onClick={handleClick} data-id='30'>30 Days</button>
                <button onClick={handleClick} data-id='0'>All Time</button>
            </div>
            <Profiles Leaderboard={between(Leaderboard, period)}></Profiles>
        </div></>
  );
}

between(Leaderboard)

function between(data, between){
    const today = new Date();
    const previous = new Date(today);
    previous.setDate(previous.getDate() - (between+1));

    let filter = data.filter(val => {
        let userDate = new Date(val.dt);
        if (between == 0) return val;
        return previous <= userDate && today >= userDate;
    })
    return filter.sort((a,b)=> {
        if (a.score == b.score){
            return b.score-a.score;
        } else{
            return b.score-a.score;
        }
    })
}

export default LeaderBoard;