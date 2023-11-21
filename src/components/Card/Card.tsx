import React from 'react'
import './Card.css'
interface Card {
    id?: number;
    title: string;
    text: string;

}
const Card: React.FC<Card> = ({ title, text }) => {
    return (
        <div className='card'>
            <h3 className='card-title'>{title}</h3>
            <p className='card-text'>{text}</p>
        </div>
    )
}

export default Card
