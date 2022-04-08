import "./css/Header.css";
import React from "react"
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import IconButton from '@material-ui/core/IconButton';
import logo from './../images/kblogo.png';
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

function Header() {
  return (
    // BEM
    <div className="header">
{/*Navigation Menu Icon */}
      <NavBar />
{/*Home Page Icon / Logo */}
      <Link to="/">
        <IconButton>
          <img className="header__logo" src={logo} alt="Kidz-Blocks Logo" />
        </IconButton>
      </Link>
{/*Leaderboard Icon */}
      <Link to="/leaderboard-pages/LeaderBoards">
        <IconButton>
          <LeaderboardIcon className="header__icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header