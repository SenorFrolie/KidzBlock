import "./Header.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import logo from './kblogo.png';
import IconButton from '@material-ui/core/IconButton';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import { Link } from "react-router-dom";
import { CenterFocusStrong } from "@material-ui/icons";
import NavBar from "./components/NavBar";

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