import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    let message;
    if (cart.length === 0) {
        message = <p>Please add some products</p>
    }
    else {
        message = <div>
            <h3>Boroloxx</h3>
            <p><small>Thanks for giving your money</small></p>
        </div>
    }
    return (
        <div>
            <h2 className={cart.length === 1 ? 'blue' : 'red'}>Order Summary: {cart.length}</h2>
            <p className={`bold bordered ${cart.length === 3 ? 'yellow' : 'purple'}`}>something</p>
            {cart.length > 2
                ? <span className='purple'>Let's shopping</span>
                : <span>I 'm fokira</span>
            }
            {message}
            {
                cart.map(shirt => <p
                    key={shirt._id}
                >{shirt.name} <button
                    onClick={() => handleRemoveFromCart(shirt._id)}
                >X</button></p>)
            }
            {
                cart.length === 2 && <p>Double bonanza!!</p>
            }
            {
                cart.length === 3 || <h3>3 ta tw hoilo na!!!</h3>
            }
        </div>
    );
};

export default Cart;

/*
* Conditional Rendering
* 1. use if else to set a variable that will contain a element, components. 
* 2. ternary operator: condition  ? 'for true' : 'false'.
* 3. logical && : (if the condition is true then the next thing will be displayed)
* 4. logical && : (if the condition is false then the next thing will be displayed)
 */

/*
* COnditional css class
* 1. use ternary
* 2. ternary inside template string
*/ 