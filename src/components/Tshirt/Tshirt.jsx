import React from 'react';
import './Tshirt.css'

const Tshirt = ({tShirt,  handleAddToCart}) => {
    const {picture, name, price, _id} = tShirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <button onClick={() =>handleAddToCart(tShirt)}>Buy Now</button>
        </div>
    );
};

export default Tshirt;