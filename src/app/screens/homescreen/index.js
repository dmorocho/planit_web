import React from 'react'
import './home.css'

//components
import Banner from '../../../features/banner'

const HomePage = () => {
    return(
            /* home */
        <div className ="home">
           
            {/* Header */}
            {/* banner */}
            <Banner/>
            {/* card sections */}
            <div className='home_section'>
            {/* <Card/>
            <Card/>
            <Card/> */}
            </div>
            {/* footer */}
        
        </div>
    )
}
export default HomePage