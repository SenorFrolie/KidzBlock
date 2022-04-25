import React from 'react'
import './css/LeaderBoard.css'
import LBData from '../../components/get-LB-data/GetSpellingLBData'
import { NavLink } from "react-router-dom"
import styled from 'styled-components'

function LeaderBoard() {

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
  border: 1px solid var(--color-light);
  border-radius: 50px;
  }

  .current {
    li {
      border-bottom: 2px solid black;
    }
  }

  .board {
    border: 1px solid var(--color-light);
    border-radius: 50px;
  }
`;
  //Button Data
  const links = [
      {name: "GamePage", path:"../game-pages/Spelling"},
      {name: "LeaderBoard", path:"/leaderboard-pages/LeaderBoard-Spelling"},
  ];

  return (
    <>
    {/*Makes the "GamePage" and "LeaderBoard" buttons */}
      <div className="window">
        <NavUnlisted>
          {links.map((link,index) => (
            <NavLink key={index} to={link.path} exact activeClassName="current">
              <li>{link.name}</li>
            </NavLink>
          ))}
        </NavUnlisted>
      </div>

      {/*Makes the leaderboard */}
      <div className="board">
        <h1 className='leaderboard'>Spelling LeaderBoard - Top 10</h1>
      <LBData />
      </div>
    </>
  );
}

export default LeaderBoard;