import './footer.css'
import { AiFillFacebook} from 'react-icons/ai';
import { AiFillLinkedin} from 'react-icons/ai';




function Footer() {
    
    return (
        <div className="footer"> 
         <div className="Bottom-footer">
         <div className="logo-icons">
                <a href="https://www.facebook.com/" style={{textDecoration: 'none', color: '#FFFFFF'}}><AiFillFacebook size={62}/></a>
                <a href="https://www.linkedin.com/" style={{textDecoration: 'none', color: '#FFFFFF'}}><AiFillLinkedin size={62}/></a>
                <div className='copy_wrapper'>
                <p className='copy'>Jake Vieth Coaching. © 2022</p>
                </div>
            </div>
          
          
            </div>
        </div>
    )
}

export default Footer