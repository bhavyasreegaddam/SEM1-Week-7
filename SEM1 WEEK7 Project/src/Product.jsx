import React from 'react'

function Product(props) {
    return (
        <div>
        <img src={props.img} alt="products" />
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <h4>{props.price}</h4>
        <button>{props.button}</button>
      </div>
    );
}



export default Product