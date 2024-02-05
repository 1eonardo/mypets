import React from 'react'
import './costumers.css';
import img1 from '../../Assets/costumers/costumers1.png';
import img2 from '../../Assets/costumers/costumers2.png';
import img3 from '../../Assets/costumers/costumers3.png';

const Costumers = () => {
  return (
    <div className='section_costumers'>
        <h1 className='title_costumers'>HAPPY COSTUMERS</h1>

        <div className="btncostumers">
            <li>
                <img className='imgcostumers' src={img1} alt="" />
                <p className='desc_costumers'>Elain & Ray</p>
                <p className='desc_costumers2'>Amazing product and deliver on time.</p>
            </li>
            <li>
                <img className='imgcostumers' src={img2} alt="" />
                <p className='desc_costumers'>Anna & Tobby</p>
                <p className='desc_costumers2'>Amazing product and deliver on time.</p>
            </li>
            <li>
                <img className='imgcostumers' src={img3} alt="" />
                <p className='desc_costumers'>Daniela & Pluto</p>
                <p className='desc_costumers2'>Amazing product and deliver on time.</p>
            </li>
                    
        </div>


    </div>
  )
}

export default Costumers