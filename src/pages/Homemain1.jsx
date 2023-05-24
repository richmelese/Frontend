import React from 'react'
 import "../stayle/homemain.css"
 import start from "../image/Star 1.png";
import Icon from "../image/Icon.png";
export const Homemain1 = () => {
  return (
    <div>
    {/* New text */}
    <div className="Home__first__text">
        <h1>
          Take it t <img src={start} alt="" /> <br></br> the Creative{" "}
          <button className="Home__first__btn">
            <h5>
              <a href="/Contactus">
                {" "}
                Call Now <img src={Icon} alt="" />
              </a>
            </h5>
          </button>{" "}
          level
        </h1>
      </div>
         <div className='heading'>
      <div><p>Tewos Solutions is a company which intends to be in front of the client’s needs, deeply 
understanding clients’ business and delivering and optimizing IT solutions.</p>
      </div>
                 </div>	 
                 {/* <div className="grid__button1">  
                 <div> <a href="" className="btn-hello">Say hello</a> </div>
                 </div> */}
                 </div>        
 
  )
}
