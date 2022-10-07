import React from 'react'
import videoBg from "../assets/backgroundImage.mp4"
import femaleBefore from "../assets/beforeAfterFemale.png"
import ContactFormWin from '../components/ContactFormWin'
import './main.css'



const WinPage = () => {
  return (
    <div className='main'>
    
  
    <div className='overlay overlay_mobile'></div>
    
  
    <video className='video_mobile' src={videoBg} autoPlay loop muted/>
    <div className="content">
    <img src={femaleBefore} alt="weight loss pic" className="before_pic before_pic_mobile" />
   <ContactFormWin/>
    </div>

   
    </div>
    
  )
}

export default WinPage