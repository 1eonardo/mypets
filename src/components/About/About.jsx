import React from 'react'
import './about.css';
import imgdog from '../../Assets/dogimg3.png';

const About = () => {
  return (
    <div className='section_About'>
        <div className="about_section">                   

            <div className="about_text">
                <h1 className='about_title'>About Us</h1>
                <p className='about_subtitle'>For Over three Decades, here We Have been Developing.</p>
                <p className='about_desc1'>Pet care that take your places.</p>
                <p className='about_desc2'>Every day we provide care services to many spoiled <br/> puppies who need regulation of their diet, grooming <br/>or learning techniques to share a pleasant time <br/>with their household companion.</p>
                <a className='btnabout' href="/therapists">
                    EXPLORE MORE 
                </a>
            </div>
        
            <div className="imgdog_about">
                <img src={imgdog} alt="img" className="backimg_about" />
            </div>
        </div>
    </div>
  )
}

export default About