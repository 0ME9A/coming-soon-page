import React from 'react'
import './homepage.sass'
import { useState } from 'react'
import BackImg  from '../assets/bg-pattern-desktop.svg'
import DeskImg from '../assets/hero-desktop.jpg'
import TabImg from '../assets/hero-mobile.jpg'
import Arrow from '../assets/icon-arrow.svg'
import Error from '../assets/icon-error.svg'


function Homepage() {
  let hideError = {
    opacity:0,
  }
  const [error, setError] = useState(hideError);
  const [btnStatus, setBtnStatus] = useState(true);
  
  const storeEmail =(event) => {
    event.preventDefault()
    alert(document.getElementById("mail").value)
  }

  const checkMail = (event)=>{
    let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    let emailInput = event.target.value;
    let showError = {
      opacity:1,
    }

    if (emailInput.match(pattern) || emailInput === '') {
      setError(hideError)
      event.target.style.border = "1px solid hsl(0, 36%, 80%)"
      setBtnStatus(false)
    }
    else{
      setError(showError)
      event.target.style.border = "2px solid hsl(0, 93%, 68%)"
      setBtnStatus(true)
    }
    if(emailInput === ''){
      setBtnStatus(true)
    }
  }

  return (
    <header>
      <div className="textcontent">
        <figure>
          <img src={BackImg} alt="" />
        </figure>
        <div className="text-area">
          <h1><span>WE'RE</span><br /> COMING <br /> SOON</h1>
          <p>Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
          <form>
            <input type="text" placeholder='Email Address' autoFocus id='mail' onInput={checkMail}/>
            <label htmlFor="mail" className='error' style={error}>Please provide a valid email</label>
            <div className="error-icon error" style={error}><img src={Error} alt="" /></div>
            <button type="submit" onClick={storeEmail} disabled={btnStatus} value=''><img src={Arrow} alt="" /></button>
          </form>
        </div>
      </div>
      <picture>
        <source media="(max-width: 1024px)" srcset={TabImg} />
        <img src={DeskImg} alt="" />
      </picture>
    </header>
  )
}

export default Homepage