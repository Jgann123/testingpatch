import React from 'react';
import './Home.css'
import { Button } from '../Button'
import Logo from '../Home/FinalLogo.png'
import SVG from '../SVG/SVG'


function Home() {
    return (
        <div>
        <div className="Slogo">
        <hr className="hr"></hr>
      
        <img className="Slogo-center Slogo-animate-left" id="OpacityPic2" src={Logo} alt="Logo" />
       
        
        </div>
        <div className="home-buttons-container">
         <Button className="instrumentals"> Instrumentals</Button><br></br>
         <Button className="artwork">Artwork</Button>  
         </div>
        </div>
    )
}

export default Home
