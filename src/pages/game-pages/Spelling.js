import React from 'react'
import { Route, Link, NavLink} from "react-router-dom"
import { Container } from "reactstrap";
import './Spelling.css'
import styled, { css } from 'styled-components'

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
// lines 29 31
const links = [
    {name: "Spelling", path:"/game-pages/Spelling"},
    {name: "LeaderBoard", path:"/LeaderBoard"},
];
// remove lines 37 - 43
function Spelling() {
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
      <div className="playWindow">
              <h1 className='gamePageHeading'>Spelling</h1>
              <iframe src="https://txstate.oscarfortanel.dev/CS3398/kidzblocks/games/wordgame/" width="1000" height="1000"></iframe>
          </div></>
  );
}

export default Spelling