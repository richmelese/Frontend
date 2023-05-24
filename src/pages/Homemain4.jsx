import React from 'react'
import "../stayle/homemain4.css"
export const Homemain4 = () => {
  return (
    <div>
              
            <div className="grid-main">
    {/* <div className='grid__servic '><p>Our <span className='service'>Service</span> </p></div> */}
     <div className="main-text"> <p><img src={require("../image/main.png")} />  APP DEVELOPMENT</p>
     Tewos Solutions specializes in developing custom software applications 
that meet the specific needs of its clients and drive their business 
processes. Combining in-depth technical and industry experience, Tewos 
Solutions develops innovative custom software application solutions that 
best meet clients’ most complex business needs, budget, schedule, and 
existing IT infrastructure.
<a href='/About' className='hr'> <p className="learn">Learn More <img src={require("../image/Iconred.png")} /></p></a></div>
     <div className="main-text1"><p><img src={require("../image/main1.png")} />SYSTEM INTEGRATION</p>   
     Tewos Solutions offers comprehensive third party integration services to 
help clients enhance efficiency at their organizations, while saving time and 
money.
<a href='/About' className='hr'> <p className="learn">Learn More <img src={require("../image/Iconred.png")} /></p></a></div>
     <div className="main-text2"><p><img src={require("../image/main2.png")} />IT CONSULTING SERVICES</p>   Tewos Solutions IT consulting services span from technical consulting 
including evaluation of current, legacy implementations and 
enhancements recommendations, to evaluation and needs assessment, 
selecting the appropriate technology and tools, project management 
solution, and development of the complete end-to-end custom application 
design and development.
    <a href='/About' className='hr'> <p className="learn">Learn More <img src={require("../image/Iconred.png")} /></p></a></div>
     <div className="main-text2"><p><img src={require("../image/main2.png")} />MAINTENANCE SERVICES</p>
     Tewos Solutions strongly supports its clients by offering a wide range of 
software support and maintenance services to ensure that the delivered 
software runs smoothly and in full accordance with its clients’ requirements. 
    <a href='/About' className='hr'> <p className="learn">Learn More <img src={require("../image/Iconred.png")} /></p></a></div>
    </div>
    </div>
  )
}
