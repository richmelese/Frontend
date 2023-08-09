import React from "react";
// import"../../styles/main.css";
import"../../styles/contact/contact.css";
import  { useState } from 'react';
import { FaFacebook,FaTelegram,FaTwitter,FaInstagram } from 'react-icons/fa';
import Fade from "react-reveal/Fade";

const Contact=()=>{
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(true);
  
    const validateEmail = (email) => {
      // Regular expression for email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
  
    const handleChange = (event) => {
      const inputValue = event.target.value;
      setEmail(inputValue);
      setIsValid(validateEmail(inputValue));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (isValid) {
        // Perform your desired action for a valid email
        console.log('Email is valid:', email);
      } else {
        // Display an error message or take appropriate action for an invalid email
        console.log('Invalid email');
      }
    };
    return(
<div>
   

<Fade bottom duration={1500}>
    <div className="Team">
<p>Contact Us</p>
</div>
<div><p className="team1">We specialise in building and managing dedicated teams of software engineers and provide project-based software development</p></div>
</Fade>


<div className="grid__contactpage"><Fade bottom duration={1500}>
    <div className="lets"><p className="contact_text">Let’s talk </p>
    <p className="contact_text2">Send us an email or start a conversation by filling the form below.</p>
    </div>
    </Fade>
    <Fade bottom duration={1500}> 
    <form className="contact-form">
    <div className="subdiv11">
    <label className="formcolor1">FullName </label><br></br>
          <input type="text" id="fname" name="firstname" placeholder="Your Name.." className="formbox1" required></input> <br></br>
         <label className="formcolor1">email</label> <br></br>
          <input type="email" id="email" name="email" placeholder="example@gmail.com.." className="formbox1" required></input>

      </div>

      <div className="subdiv2">
      <label className="formcolor1">Phone</label> <br></br>
          <input type="text" id="fname" name="firstname" placeholder="Your Phone no." className="formbox1" required></input><br></br>
          <label className="formcolor1">Subject</label> <br></br>
          <input type="text" id="fname" name="firstname" placeholder="Your Subject." className="formbox1" required></input><br></br>
         
      </div>
     <div>
     <label className="formcolortext" >Leave us a message</label><br></br>
         <textarea id="subject" name="subject" placeholder="Write something.."className="textarea" required></textarea><br></br>
        <input type="submit" value="Send Message" className="submit1"></input>
       
     </div>
 
    </form>
    {/* <div className="subdiv11">
   
       <label className="formcolor1">FullName </label><br></br>
          <input type="text" id="fname" name="firstname" placeholder="Your Name.." className="formbox1" required></input> <br></br>
         <label className="formcolor1">email</label> <br></br>
          <input type="email" id="email" name="email" placeholder="example@gmail.com.." className="formbox1" required></input>
         
          </div>
          </Fade>
          <Fade bottom duration={1500}>
          <div className="subdiv2">
           
         <label className="formcolor1">Phone</label> <br></br>
          <input type="text" id="fname" name="firstname" placeholder="Your Phone no." className="formbox1" required></input><br></br>
          <label className="formcolor1">Subject</label> <br></br>
          <input type="text" id="fname" name="firstname" placeholder="Your Subject." className="formbox1" required></input><br></br>
         
         </div>
         </Fade>
  
    <div></div>
    <Fade bottom duration={1500}>
   
        <form>
   <label className="formcolortext" >Leave us a message</label><br></br>
         <textarea id="subject" name="subject" placeholder="Write something.."className="textarea" required></textarea><br></br>
        <input type="submit" value="Send Message" className="submit1"></input>
       
        </form> */}
    </Fade>
    <div></div>
    <Fade bottom duration={1500}>
    <div className="follow">
        <hr></hr>
        <p>Follow Us</p>
        <ul className="contact-socialmedia">
        <li><a href='#'><FaFacebook className='icon facebook' style={{ color: '#0A66C2' }}/></a></li>
        <li> <a href='#'><FaInstagram className='icon telegram' style={{ color: '#E4405F' }}/></a></li>
        <li> <a href='#'><FaTelegram className='icon instagram' style={{ color: '#0A66C2' }}/></a></li>
        <li> <a href='#'><FaTwitter className='icon twitter' style={{ color: 'rgb(50, 158, 201)' }}/></a></li>
            </ul>  
    </div> 
    

 </Fade>
</div>


</div>


    );
}
export default Contact;