import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    <div className='footer-section'>
        <div className='footer-content'>
            <h1 className='title_footer'>Join Us With Affiliate program.</h1>
            <p className='footer_desc'>Lorem ipsum dolor sit amet consectetur, adipisici
                ng elit. Quas vero excepturi eos cupiditate ab!</p>
            <ul className="socials">
                <li><a href="/"><i className='uil uil-facebook'></i></a></li>
                <li><a href="/"><i className='uil uil-twitter'></i></a></li>
                <li><a href="/"><i className='uil uil-instagram-alt'></i></a></li>
            </ul>
        </div>
        <div className='footer_bottom'>
            <p>copyright &copy;2024 Dev Leonardo.</p>
        </div>
    </div>
  )
}

export default Footer