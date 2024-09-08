import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
    <div>
       <p>Book <span>Store</span></p> 
    </div>
    <div>
    <nav>
        <a href="#navbar">Home</a>
        <a href="../ProductList.html">Books</a>
        <a href="../login.html">Login</a>
        <a href="../signup.html">Signup</a>
    </nav>
    </div>
    </div>
    <div className='main-body'>
        <h5>Best <span>Books </span> Available</h5>
        <h4>Buy quality books at cheaper price in our Store.</h4>
        <label for="search"></label>
        <input type="text" placeholder='Search Books' className='search' />
        <button>Search </button>
        
    </div>
    </>
  )
}

export default Navbar