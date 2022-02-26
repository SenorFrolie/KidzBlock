import "./Header.css";
import React from "react"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import logo from './kblogo.png';
import IconButton from '@material-ui/core/IconButton';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import { Link } from "react-router-dom";

function Header() {
  return (
    // BEM
    <div className="header">
      <Link to="/profile">
        <IconButton>
        <AccountCircleIcon className="header__icon" fontSize="large" />
        </IconButton>
      </Link>

      <Link to="/">
      <IconButton>
        <img 
         className="header__logo"
         src={logo} 
         alt="Kidz-Blocks Logo"
        />
        </IconButton>
      </Link>
      
      
        <IconButton>
        <MenuIcon className="header__icon" fontSize="large" />
        </IconButton>
    
      </div>
  );
}

export default Header