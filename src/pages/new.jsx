import React from 'react'
import "../stayle/new.css"
export const New = () => {
  return (
    <div>
           <div className="what__container">
      <div><img src={require("../image/image1.png")} /></div>
      <div className="container-text"><p className="grid__text">What<span className='span'>we do</span> </p>
      <p>Tewos Technology Solutions is a leading, highly innovative software 
technology provider, established to provide leading edge intelligent 
technical solutions and consulting services to businesses, organizations 
and government in order to allow the efficient and effective secure 
access and communication with various information resources and 
services, anytime and anywhere</p>
      {/* <a href="/Work" className="btn-mail">See our proccess <img src={require("../image/Iconred.png")} /></a> */}
      <a href='/Work'><button class="button_new"><span> See our proccess  <img src={require("../image/Iconred.png")} /> </span></button></a>
        </div>
    </div>
    </div>
  )
}
