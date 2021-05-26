import React from 'react'
import './card.css'

const Card = ({src,title,description,price}) => {


return (
    <div className='card'>
    <div className='card_img'>
    <img src={src} />
    </div>

         <div className ='card_info'>
            <h2>{title}</h2>
            <h4>{description}</h4>
            <h3>{price}</h3>
         </div>
    </div>
)
}

export default Card