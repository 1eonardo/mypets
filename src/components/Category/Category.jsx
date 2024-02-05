import React from 'react'
import './category.css';
import img1 from '../../Assets/categorys/Grooming.png';
import img2 from '../../Assets/categorys/Healthcare.png';
import img3 from '../../Assets/categorys/Daycare.png';
import img4 from '../../Assets/categorys/Training.png';
import img5 from '../../Assets/categorys/Higienic.png';
import imgdog from '../../Assets/dogimg2.png';

const Category = () => {
  return (
    <div className='section_category'>
        <h1 className='title_category'>Service Category</h1>

        <div className="btncategorys">
            <li>
                <img className='imgcategory' src={img1} alt="" />
                <p className='desc_Category'>Grooming</p>
            </li>
            <li>
                <img className='imgcategory' src={img2} alt="" />
                <p className='desc_Category'>Healthcare</p>
            </li>
            <li>
                <img className='imgcategory' src={img3} alt="" />
                <p className='desc_Category'>Daycare</p>
            </li>
            <li>
                <img className='imgcategory' src={img4} alt="" />
                <p className='desc_Category'>Training</p>
            </li>
            <li>
                <img className='imgcategory' src={img5} alt="" />
                <p className='desc_Category'>Higienic Care</p>
            </li>
        </div>

        <div className="desc_section">
                        
            <div className="imgdog_desc">
            <img src={imgdog} alt="img" className="backimg_desc" />
            </div>

            <div className="desc_text">
                <h1 className='desc_title'>We help you listen to what your puppies want to tell you.</h1>
                <p className='desc_description'>Explore our content and the services we offer for your little pups.</p>
                <a className='btndesc' href="/therapists">
                    EXPLORE MORE 
                </a>
            </div>
        
        </div>
    </div>
  )
}

export default Category