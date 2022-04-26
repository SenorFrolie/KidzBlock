import React from 'react'
import { NavLink } from "react-router-dom"
import './css/game-page.css'
import styled from 'styled-components'

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

//Buttons for switching from game page to leaderboard
const links = [
  {name: "GamePage", path:"../game-pages/Numbers"},
  {name: "LeaderBoard", path:"/leaderboard-pages/LeaderBoard-Numbers"},
];

function Numbers() {
  return (
    <>
      <div className="window">
{/*Use NavLink to make the Buttons go to the correct pages */}
        <NavUnlisted>
          {links.map((link,index) => (
            <NavLink key={index} to={link.path} exact activeClassName="current">
              <li>{link.name}</li>
            </NavLink>
          ))}
        </NavUnlisted>
      </div>
      <div className="playWindow">
        <h1 className='gamePageHeading'>Numbers</h1>
        <iframe src="https://txstate.oscarfortanel.dev/CS3398/kidzblocks/games/numbersGame/" width="1000" height="1000" title="Numbers"></iframe>
      </div>
    </>
  );
}

export default Numbers