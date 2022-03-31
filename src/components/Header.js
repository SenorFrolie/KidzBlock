import "./Header.css";
import React from "react"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logo from './../images/kblogo.png';
import IconButton from '@material-ui/core/IconButton';
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
//import MenuIcon from '@mui/icons-material/Menu';
//import LeaderboardIcon from '@mui/icons-material/Leaderboard';
//import { CenterFocusStrong } from "@material-ui/icons";

function Header() {
  return (
    // BEM
    <div className="header">
    <NavBar />
    <Link to="/">
        <IconButton>
          <img 
           className="header__logo"
          src={logo} 
            alt="Kidz-Blocks Logo"
        />
          </IconButton>
    </Link>

 <Link to="/profile">
    <IconButton>
       <AccountCircleIcon className="header__icon" fontSize="large" />
    </IconButton>
</Link>
     
      

      </div>
  );
}

export default Header


/*{

==============
       <IconButton>
        <MenuIcon className="header__icon" fontSize="large" />
        </IconButton>
    
===========



}*/ 