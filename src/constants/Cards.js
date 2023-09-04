import React from 'react';


const Cards = ({number, name, text}) => {
    return(
        <div>
            <div className="box">
                <h4 className='mb-3'>{number}</h4>
                <h3 className='mb-4'>{name}</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}
export default Cards;

