import React from 'react'



const Contact = () => {
  return (
    <>
    <div id="contact">
    <div className='contact-img'>
    <img src="https://saranyastudio.com/s-studio-content/uploads/2017/07/contactus.jpg" alt="conatct"/>
    </div>
    <div className='contact'>
        <h2>Contact</h2>
        <form>
            <label for="name">Name</label><br/><br/>
            <input type="text" placeholder='Enter Name'/><br/><br/>
            <label for="email">Email</label><br/><br/>
            <input type="email" placeholder='Enter Email'/><br/><br/>
            <label for="message">Message</label><br/><br/>
            <input type="text"/><br/><br/>
            <button>Submit</button>
        </form>

    </div>
    </div>
    
    </>
  )
}

export default Contact