import React from 'react';
import img1 from './images/games-advertisment-.png'
import xboximage from './images/xbox.jpg';
import switchimage from './images/switch.png'
import psimage from './images/playstation.jpg'
import {Link} from 'react-router-dom'



const MainHome = () => {
    return (
    <div className='container-1'>
         <div className='intro'>
            <h1 className='title1'>BUY AND SELL</h1>
            <h3 className='title2'>YOUR NEXT GAME!</h3>
            <img className = "img1" src={img1} alt= ''/>
         </div>
            <h2 className='choose'>Choose Your Platform</h2>

            <div className = "platforms">

                  <div>
                   <Link to='/XboxHome'>
                   <img className='xbox-image' src={xboximage} alt='' /></Link>
                   </div>

                   <div>
                   <Link to='/SwitchHome'>
                   <img className='switch-image' src={switchimage} alt='' /></Link>
                  </div>

                  <div>
                  <Link to='/PlaystationHome'>
                    <img className='ps-image' src={psimage} alt='' /></Link>
                  </div>
            </div>
                

            
     </div>
    );
}

export default MainHome;
