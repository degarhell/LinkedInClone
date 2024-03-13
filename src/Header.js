import React from "react";
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HeaderOption from "./HeaderOption";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { logout } from "./features/userSlice";

function Header(){

    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    }

    return(
        <div className="header">
            <div className="header__left">
                <img src="https://media.licdn.com/dms/image/C5622AQEp0KBMh49zpA/feedshare-shrink_800/0/1672130508248?e=2147483647&v=beta&t=_48SXr4g6xxdwUiVted5lxtAwhxsEZtIIMvowDytOmE" alt="LinkedIn IMG" />
                <div className="header__search">
                    <SearchIcon />
                    <input placeholder="Search" type="text" />
                </div>
            
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon}title='Home' />
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
                <HeaderOption Icon={BusinessCenterIcon} title='My Network' />
                <HeaderOption Icon={ChatIcon} title='My Network' />
                <HeaderOption Icon={NotificationsIcon} title='My Network' />
                <HeaderOption avatar={true}
                title='me' onClick={logoutOfApp}/>
                
            </div>

        </div>
    )
}

export default Header