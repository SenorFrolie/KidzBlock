import React from 'react'
import { Route, Link, NavLink} from "react-router-dom"
import { Container } from "reactstrap";
import './My2048.css'
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
    {name: "My2048", path:"/game-pages/My2048"},
    {name: "LeaderBoard", path:"/LeaderBoard"},
];
// remove lines 37 - 43
function My2048() {
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
              <h1 className='gamePageHeading'>2048</h1>
              <iframe src="https://txstate.oscarfortanel.dev/CS3398/kidzblocks/games/2048/" width="1000" height="1000"></iframe>
          </div></>
  );
}

export default My2048