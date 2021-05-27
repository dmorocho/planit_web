import React from 'react'
import './header.css'
import Logo from '../../img/logo.png'
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { NavLink, useHistory } from "react-router-dom";
import LocationSearchInput from './autoplaces.js'

const Header = () =>{
    const history = useHistory();
    const handClick = () => {

        history.push("/search")
    }
    

    return (
        <div className="header">
            <NavLink to={"/"}>
                
                <img className="header_icon" alt='banner_logo' src={Logo}/>   
            </NavLink>
            <div className = 'header_center'>
                <input type='text' placeholder="where to go?"/>
                {/* <LocationSearchInput/>  */}
                <span>|</span>
                <input type='text' placeholder=" what to do?"/>
                <SearchIcon onClick={handClick}/>

            </div>
            <div className="header_right">
                {/* <p>plan</p> */}
                <AccountCircleIcon  />
                <p>sign in</p>
            </div>
        </div>
    )
}

export default Header