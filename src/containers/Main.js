import React from 'react'
import videoBg from "../assets/backgroundImage.mp4"
import femaleBefore from "../assets/beforeAfterFemale.png"
import logo from "../assets/logoWhite.png"
import ContactForm from '../components/ContactForm';
import { Link } from "react-router-dom";
import './main.css'



const Main = () => {
  return (
    <div className='main'>
    
  
    <div className='overlay'></div>
    
  
    <video src={videoBg} autoPlay loop muted/>
    <div className="content">
    <ContactForm/>
    <img src={logo} alt="Logo" className="logo" />
    <img src={femaleBefore} alt="weight loss pic" className="before_pic" />
    <h1 className='heading-main'>8 Week Transformation</h1>
    <p className='p-main'>Results guaranteed</p>
   

    <div className='list-wrapper'>
      <ul className="list-main-ul ul-left">
        <li className="list-included">8 week body transformation</li>
        <li className="list-included">Full meal plan</li>
        <li className="list-included">Online support</li>
        
      </ul>
      <ul className="list-main-ul">
        <li className="list-included">Online community support</li>
        <li className="list-included">Two online sessions per week</li>
        <li className="list-included">Weekly online support</li>

      </ul>
      <div className='contact_form_mobile'>
        <Link to="/contactWin" ><button className='win_button'>Win 8 Weeks Free</button></Link>
      </div>
      
    </div>


    </div>

   
    </div>
    
  )
}

export default Main