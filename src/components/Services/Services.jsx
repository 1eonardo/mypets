import React from 'react'
import './services.css';
import img1 from '../../Assets/services/fooddog1.png';
import img2 from '../../Assets/services/fooddog2.png';
import img3 from '../../Assets/services/fooddog3.png';

const Services = () => {
  return (
    <div className='section_services'>
        <h1 className='title_services'>Dog Nutrients & Food.</h1>

        <div className="btnservices">
            <li>
                <img className='imgservices' src={img1} alt="" />
                <p className='desc_services'>Nutri Source / 3KG</p>
                <p className='desc_services2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit, Blanditiis perferendis repeliendus voluptatibus!</p>
                <a className='btnbuy' href="/therapists">
                    BUY NOW
                </a>
            </li>
            <li>
                <img className='imgservices' src={img2} alt="" />
                <p className='desc_services'>Canine Creek / 4KG</p>
                <p className='desc_services2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit, Blanditiis perferendis repeliendus voluptatibus!</p>
                <a className='btnbuy' href="/therapists">
                    BUY NOW
                </a>
            </li>
            <li>
                <img className='imgservices' src={img3} alt="" />
                <p className='desc_services'>Pedigree / 500G</p>
                <p className='desc_services2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit, Blanditiis perferendis repeliendus voluptatibus!</p>
                <a className='btnbuy' href="/therapists">
                    BUY NOW
                </a>
            </li>
        </div>

    </div>
  )
}

export default Services