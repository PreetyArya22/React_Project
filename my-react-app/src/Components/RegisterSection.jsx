import React from 'react'
import img_main from "../assets/Imges/HeroSection_Img/Untitled design (12) 1 (1).png";
import { IoCodeSlash } from 'react-icons/io5';
import { FaHandPointUp } from 'react-icons/fa';
import img from "../assets/Imges/HeroSection_Img/image 8.png"

export default function RegisterSection() {
  return (
    <div className='row mx-0 justify-content-center Register'>
      <div className='col-lg-10 col-12 px-lg-0 px-2'>
        <div className='row mx-0 RegisterSection align-items-center'>
          <div className='col-lg-7 col-12 px-0'>
            <div className='d-flex flex-start align-items-center text-start'>
              <img src={img_main}  alt="img_main" className='Register_img_section p-0 m-0 d-block w-auto'/>
            </div>
          </div>
          <div className='col-lg-5 px-0 col-12 justify-content-start align-items-center'>
            <h1>How to Register for 
            30 Days of Code<span> <IoCodeSlash /></span> ?</h1>
            <p className='py-2'>Embark on a transformative coding journey with 30 Days of Code! Register now and explore our diverse bootcamps. From registration to acceptance, we guide you every step of the way towards coding mastery. Your pathway to success starts here.</p>
          </div>
        </div>
        <div className='row mx-0 p-0 justify-content-center'>
          <div className='col-12 px-0'>
            <div className='d-flex justify-content-center align-items-center'>
              <img src={img} alt="" className='process-img'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
