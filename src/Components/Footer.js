import React from 'react'
import "../stayle/footer.css"
import { FaFacebook,FaTelegram,FaTwitter,FaInstagram } from 'react-icons/fa';
export const Footer = () => {
  return (
    <div>
           <div id='scrool' className="Footer1">
            <div className="headfooter">
          <p  class="text-center">
             Let’s start together.</p> 
             </div>
<div className="heading3">
    <p> Phone: +251911516413/ +251953969696</p>
   <div className="hr"><hr></hr></div> 
</div>

        <div className='grid-footer'>
          
          <div className="logo2">
<img src={require("../image/logo 1.png")}/>
</div> 
        
       <div className='link '>
           
           <ul> 
           <p className='pagecolor'>Pages</p>
            <li><a href='/Home'>Home</a></li> 
       <li><a href='/About'>About</a></li> 
          <li><a href='/ContactUs'>ContactUs</a></li> 
          <li><a href='Work'>Work</a></li>  
          {/* <li><a href='Team'>Team</a></li>  
          <li><a href='PortifolioSingle'>PortifolioSingle</a></li>   */}
           </ul> 
            
        </div >
        <div className='contactleft'><p className='pagecolor'>Contact</p>
        <p>Email:tewossolutions@gmail.com  </p>
        </div>
        <div className='social-media'>
          <p className='pagecolor'>Newsletter</p>
          <div className='footerform'>
          
             <form>
            <input type="email" id="email" name="email"className='formbox2'placeholder="enter your email" required></input>
            <input type="submit" value="Submit" className="submitfooter"></input>
            </form>
                </div>
                <div className='pad'>
                  <ul className='social'>
        <li> <a href='#'> <FaFacebook className='icon facebook'/></a></li>
        <li>  <a href='#'><FaInstagram className='icon telegram'/></a></li>
        <li><a href='#'><FaTelegram className='icon instagram'/></a> </li>
        <li> <a href='#'> <FaTwitter className='icon twitter'/> </a> </li>
           </ul>
           </div>
            
       </div>
       
</div>
<div className='hr2'>
  <hr></hr>
</div>


<p className=' campany text-center'>Copyright © 2023 | Designed and developed by <span className='bitappslink'><a href='https://bitappstech.com/'>BitApps Technology</a></span> </p>
    </div>
    </div>
  )
}
