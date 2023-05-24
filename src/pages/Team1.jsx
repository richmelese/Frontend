import React from 'react'
import "../stayle/team.css"
export const Team1 = () => {
  return (
    <div>
     <div className="grid-darktemplet">
                 <div> <p className="team-1">Never Miss a Single <span className='color'>News</span></p></div> 
                  <div><p className="team-2"> Subscribe for Creative Software and get to know more about latest informations</p></div>
                 <div  className='email text-center'> 
                <form>
                {/* <label for="email">Enter your email:</label> */}
            <input type="email" id="email" name="email"className='formbox'placeholder="enter your email"></input>
            {/* <input type="submit" value="Subscribe" className="submit"className="subscribe__team"></input> */}
            <button class="subscribe__team"><span>Subscribe<img src={require("../image/Icon.png")} /></span></button>
                </form>
           </div>
                </div>
    </div>
  )
}
