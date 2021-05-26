import React from 'react'
import './home.css'
import Card from '../../../features/Card/Card'

//components
import Banner from '../../../features/Banner'

const HomePage = () => {
    return(
            /* home */
        <div className ="home">
           
            {/* Header */}
            {/* banner */}
            <Banner/>
            {/* card sections */}
            <div className='home_section'>
            <Card
                src="https://images.unsplash.com/photo-1585730315692-5252e57d4b40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1"
                title="Best Burgers in Queens"
                description="The top rated burgers in NYC"
            />
            <Card
                 src="https://images.unsplash.com/photo-1602087564121-ecda2f6c7ee9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1347&q=80"
                title="Visit a Park"
                description="Unique things to do at NYC"
            />
            <Card
                 src="https://images.unsplash.com/photo-1585730315692-5252e57d4b40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1"
                title="Best Burgers in Queens"
                description="The top rated burgers in NYC"
            />
            </div>
            {/* footer */}
        
        </div>
    )
}
export default HomePage