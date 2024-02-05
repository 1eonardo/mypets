import React from 'react';
import "./homeStyle.css";
import img1 from '../../Assets/dogimg.png';

const Home = () => {
  return (
    <div className="background">
        <div className="home_text">
            <h1 className='home_title'>Give your smart puppy the care he deserves!</h1>
            <p className='home_description'>Exploring the Heartfelt Connection Between Humans and Canine Companions.</p>
            <a className='btnhome' href="/therapists">
                EXPLORE MORE 
            </a>
        </div>

        
        <div className="imgdog">
         <img src={img1} alt="img" className="backimg" />
        </div>
        
    </div>
  )
}

export default Home