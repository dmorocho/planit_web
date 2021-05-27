import React from 'react'
import {Button} from '@material-ui/core'
import './searchScreen.css'

const SearchPage = () => {


    return (
        <div className='searchPage'>
            <div className='searchPage_info'>

                <p>This is your results for burgers</p>
            
                <Button
                varient='outlined'
                >
                price
                </Button>
                <Button
                varient='outlined'
                >
                distance
                </Button>
                <Button
                varient='outlined'
                >
                reviews
                </Button>
            </div>
            
        </div>

    )
}

export default SearchPage