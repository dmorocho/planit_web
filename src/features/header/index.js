import React from 'react'
import './header.css'
import Logo from '../../img/logo.png'
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LocationSearchInput from './autoplaces.js'

const Header = () =>{
    

    return (
        <div className="header">
            <img className="header_icon" alt='banner_logo' src={Logo}/>   
            <div className = 'header_center'>
                <input type='text' placeholder="where to go?"/>
                {/* <LocationSearchInput/>  */}
                <span>|</span>
                <input type='text' placeholder=" what to do?"/>
                <SearchIcon/>

            </div>
            <div className="header_right">
                {/* <p>plan</p> */}
                <AccountCircleIcon/>
                <p>sign in</p>
            </div>
        </div>
    )
}

export default Header