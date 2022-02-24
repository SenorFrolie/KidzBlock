import "./Header.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import logo from './kblogo.png';
import IconButton from '@material-ui/core/IconButton';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';

function Header() {
  return (
    // BEM
    <div className="header">
        <IconButton>
        <AccountCircleIcon className="header__icon" fontSize="large" />
        </IconButton>
        <img 
         className="header__logo"
         src={logo} 
         alt="Kidz-Blocks Logo"
        />

        <IconButton>
        <MenuIcon className="header__icon" fontSize="large" />
        </IconButton>
        {/*
        <IconButton>
        <LeaderboardIcon className="header__icon" fontSize="large" />
        </IconButton>
        */}
      </div>
  );
}

export default Header