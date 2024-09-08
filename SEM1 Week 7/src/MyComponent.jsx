import React from 'react'

const user={
  name:'Bhavya',
  rollno:236913715,
};

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];
const listItems = products.map(product =>
  <li
    key={product.id}
    style={{
      color: product.isFruit ? 'orange' : 'darkgreen'
    }}
  >
    {product.title}
  </li>
);


const MyComponent = () => {
  return (
    <>
    <button>Click</button>
    <h1>{user.name}</h1>
    <ul>{listItems}</ul>
   
    </>
  )
}

export default MyComponent