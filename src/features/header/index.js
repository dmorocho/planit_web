import React,{useState} from 'react'
import './header.css'
import Logo from '../../img/logo.png'
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { NavLink, useHistory } from "react-router-dom";
import LocationSearchInput from './autoplaces.js'
import nycLocations from '../../data/index'

const Header = () =>{
    const history = useHistory();
    const [location,setLocation] = useState('')
    const [term,setTerm] = useState('')
    

    //looks up location on change
    const handleLocChange =(e) => {
        e.preventDefault()
        setLocation(e.target.value)
        console.log({location})
        const result = nycLocations.filter(word => word.toLowerCase().includes(location))
         console.log(result)
    }

    const handleTermChange =(e) => {
        e.preventDefault()
        setTerm(e.target.value)

    }

    // const result = words.filter(word => word.includes('sp'));
    const handClick = () => {

        history.push("/search")
    }
    

    return (
        <div className="header">
            <NavLink to={"/"}>
                
                <img className="header_icon" alt='banner_logo' src={Logo}/>   
            </NavLink>
            <div className = 'header_center'>
                <input type='text' placeholder="where to go?" onChange={handleLocChange}/>
                {/* <LocationSearchInput/>  */}
                <span>|</span>
                <input type='text' placeholder=" what to do?"/>
                <SearchIcon onClick={handClick} onChange={handleTermChange}/>

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