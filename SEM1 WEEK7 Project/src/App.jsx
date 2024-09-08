import React from 'react'
import Navbar from './Navbar'
import Product from './Product'
import Contact from './Contact'
import ShoppingCart from './ShoppingCart'


function App(){
  return (
    <>
    <Navbar/>
    <div id="book">
      <h1 className='h1'>BEST BOOKS</h1>
      <div className='App'>
        <Product 
        img="../img1.jpg"
        name={<span style={{ color: 'black',fontFamily:'cursive', marginLeft:'120px',fontSize:'22px'}}>The Harry Potter</span>}
        desc="Author: JK Rowling"
        price={<span style={{ color: 'green', fontWeight: 'bold',marginLeft:'200px' }}>$40</span>}
        button="Add to Cart"
        />
        <Product
        img="../img2.jpg"
        name={<span style={{ color: 'black',fontFamily:'cursive', marginLeft:'130px',fontSize:'22px'}}>The Jungle Book</span>}
        desc="Author: Jack"
        price={<span style={{ color: 'green', fontWeight: 'bold',marginLeft:'200px' }}>$50</span>}
        button="Add to Cart"
        />
        <Product
        img="../img3.jpg"
        name={<span style={{ color: 'black',fontFamily:'cursive', marginLeft:'140px',fontSize:'22px'}}>Aesop's Fables</span>} 
        desc="Author:John Doe"
        price={<span style={{ color: 'green', fontWeight: 'bold',marginLeft:'220px' }}>$46</span>}
        button="Add to Cart"
        />
        <Product
        img="../img4.jpg"
        name={<span style={{ color: 'black',fontFamily:'cursive', marginLeft:'180px',fontSize:'22px'}}>Aladdin</span>} 
        desc="Author: Alice"
        price={<span style={{ color: 'green', fontWeight: 'bold',marginLeft:'220px' }}>$89</span>}
        button="Add to Cart"
        />
      </div>
    </div>
  <Contact/>
    </>
  )
}

export default App 
