import React from 'react'
import './errorpage.css'
import errorImg from '../../../img/404fail.gif'


const ErrorPage = () => {


    return(
        <div className ='error_div'>
        <h2>404</h2>
        <h3>You Almost Had it.</h3>
        <img src={errorImg}/>
        </div>
    )
}

export default ErrorPage