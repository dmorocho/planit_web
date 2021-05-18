import { Button } from '@material-ui/core'
import React from 'react'
import './banner.css'

const Banner = () => {
    

    return(
        <div className="banner">
            <div className = 'banner_info'>
                <h1>Plan it your way</h1>
                <h5>Discover new things to do</h5>
                <Button
                variant='outlined'>Explore Nearby</Button>
            </div>
            
        </div>
    )

}

export default Banner 