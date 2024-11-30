import React from 'react'
import './ResultPage.css'
import shadow from '../../assets/green-ellipse.png'
import parents from '../../assets/black-white-portrait-woman-expecting-baby.png'
import { RxSlash } from "react-icons/rx";
import { FaArrowLeft } from "react-icons/fa6";
import { GoArrowRight } from 'react-icons/go';
function ResultPage() {

const percentage=64;
    const radius = 50; // radius of the circle
    const circumference = 2 * Math.PI * radius; // Circumference of the circle
    const strokeDashoffset = circumference - (percentage / 100) * circumference;
  return (
    <div className='result-page-container'>
    
    <h1 className='span-result'> <a href="#home" className='home-result-text'>Home </a>   <span> <RxSlash />  </span> <span >IVF Success Rate Calculator </span>  <span> <RxSlash />  </span>  <span className='span-ivf-result'> Result </span></h1>
    <div className="mobile-arrow-text-lefts">
    <FaArrowLeft className="arrow-left-mobiles" />
    <span>IVF Success Rate Calculator</span>
  </div>
    <div className='sub-container'>
    
    <div className="line-with-circle">
  <div className="line"></div>
  <div className="circle"></div>
 
</div>
<div className='result-text'>Your estimated IVF Success Rate is</div>

<div className="circle-container">
  {/* SVG Circle - Progress Circle */}
  <svg className="circles" width="392" height="392" viewBox="0 0 160 160">
    <circle cx="80" cy="80" r="40" className="background" />
    <circle cx="80" cy="80" r="40" className="foreground"
      strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} />
  </svg>

  {/* Inner Red Circle with Percentage Text */}
  <div className="percentage-text">
    <div className="inner-red-circle">
      <span className="percentage-number">{percentage}%</span>
    </div>
   
  </div>
  <h1 className="text-ivf">With 1 IVF Cycle</h1>
</div>

    <div className="photo">
    
    <img src={parents} alt="" />
    <img src={shadow} alt="" className='shadow' />
   
    <div className="blur-overlay"></div>
    <div className="button-container">
    <button className="retry-button" onClick={() => window.location.reload()}>
   Start private consultation <GoArrowRight className="arrow-navbars" />
    </button>
  </div>
    
    </div>
 
    </div>
   
    </div>
  )
}

export default ResultPage