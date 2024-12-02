import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import './IVFCalculator.css'
import { RxSlash } from "react-icons/rx";
import { BiSolidMessageAlt } from "react-icons/bi";
import { FaArrowLeft } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
function IVFCalculator() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const bubblePoints = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]; // 10 points
const bubbleLabels = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9', '10','10']; // Corresponding labels

  const handleSliderChange = (e) => {
    setValue(Number(e.target.value));
  };
  const getSliderBackground = () => {
    return `linear-gradient(to right, #F48265 ${value}%, #ddd ${value}%)`;
  };



  const handleCalculate = () => {
    navigate('/result');
  };


  return (
    <div className='ivf-container'>
    <h1 className='span-home'> <a href="#home">Home </a>   <span> <RxSlash />  </span> <span className='span-ivf'>IVF Success Rate Calculator </span></h1>
    <div className="mobile-arrow-text-left"  onClick={handleCalculate}>
    <FaArrowLeft className="arrow-left-mobile" />
    <span>IVF Success Rate Calculator</span>
  </div>
    <div className="calculator-main-container">
    <div className="age-group-container">
  <div className="age-group">Which age range applies to you?</div>
  <div className="age-group-row">
    <label className="radio-label">
      <input type="radio" name="age-group" value="18-25" />
      <span className="custom-radio-button"></span>
      <span className="radio-label-text">Under 30</span>
    </label>
    <label className="radio-label">
      <input type="radio" name="age-group" value="26-35" />
      <span className="custom-radio-button"></span>
      <span className="radio-label-text">Between 30 - 34</span>
    </label>
    <label className="radio-label">
      <input type="radio" name="age-group" value="36-45" />
      <span className="custom-radio-button"></span>
      <span className="radio-label-text">Between 35 - 37</span>
    </label>
  </div>
  <div id='age-id' className="age-group-row">
    <label className="radio-label">
      <input type="radio" name="age-group" value="46-55" />
      <span className="custom-radio-button"></span>
      <span className="radio-label-text">Between 38 - 40</span>
    </label>
    <label className="radio-label">
      <input type="radio" name="age-group" value="56-65" />
      <span className="custom-radio-button"></span>
      <span className="radio-label-text">Between 41 - 43</span>
    </label>
    <label className="radio-label">
      <input type="radio" name="age-group" value="66+" />
      <span className="custom-radio-button"></span>
      <span className="radio-label-text">Above 43</span>
    </label>
  </div>
</div>

    <div className='ivf-cycles-number'>
    <div className="ivf-numbers-heading">Number of IVF Cycles?</div>
    <div className="slider-container">
    <div className="bubble-container">
      {bubblePoints.map((point, index) => (
        <div key={index} className="bubble"  style={{ zIndex: value>= point ? -1 : 100 }}>
         
          {value === point && (
            <div className="heart-popup">
            <BiSolidMessageAlt  className="heart" />  <div className='heart-number'>{bubbleLabels[index] }</div> 
            </div>
          )}
        </div>
      ))}
    </div>
    <input
      type="range"
      min="0"
      max="100"
      step="10"
      value={value}
      className="slider"
      style={{ background: getSliderBackground()  }}
      onChange={handleSliderChange}
    />
  </div>
    </div>
    <div className='yes-no'>
    <div className="question3">Have you undergone these procedures before?</div>
    <div className="question-3-input">


    <div className='icsi'>
    <div className="question-label">ICSI Procedure :</div>
    <div className="radio-group">
      <label className="custom-radio">
        <input type="radio" name="icsi" value="yes" />
        <span className="custom-radio-button"></span>
        <span className="radio-label-text">Yes</span>
      </label>
      <label className="custom-radio">
        <input type="radio" name="icsi" value="no" />
        <span className="custom-radio-button"></span>
        <span className="radio-label-text">No</span>
      </label>
    </div>
  </div>
  

<div className='pgt'>
    <div className="question-label">PGT Testing :</div>
    <div className="radio-group">
      <label id='ra' className="custom-radio">
        <input type="radio" name="icsi" value="yes" />
        <span  className="custom-radio-button"></span>
        <span className="radio-label-text">Yes</span>
      </label>
      <label  className="custom-radio">
        <input type="radio" name="icsi" value="no" />
        <span className="custom-radio-button"></span>
        <span className="radio-label-text">No</span>
      </label>
    </div>
</div>


    <div >
    
    </div>
    <div>
    </div>
    </div>
    </div>


    <div className='medical-condition'>
    
    <div className="question4">Have you undergone these procedures before?</div>
    <div className="question4">
    <div className="checkbox-group">
      <label className="custom-checkbox">
        <input type="checkbox" value="option1" />
        <span className="custom-checkbox-box">
          <span className="checkbox-tick"><FaCheck /></span>
        </span>
        <span className="checkbox-label">PCOS </span>
      </label>
      <label className="custom-checkbox">
        <input type="checkbox" value="option2" />
        <span className="custom-checkbox-box">
          <span className="checkbox-tick"><FaCheck /></span>
        </span>
        <span className="checkbox-label">Endometriosis</span>
      </label>
      <label className="custom-checkbox">
        <input type="checkbox" value="option3" />
        <span className="custom-checkbox-box">
          <span className="checkbox-tick"><FaCheck /></span>
        </span>
        <span className="checkbox-label">Low Ovarian Reserve</span>
      </label>
      <label className="custom-checkbox">
        <input type="checkbox" value="option4" />
        <span className="custom-checkbox-box">
          <span className="checkbox-tick"><FaCheck /></span>
        </span>
        <span className="checkbox-label">Male Factor Infertility</span>
      </label>
    </div>
  </div>

    </div>


    <div> <button  onClick={handleCalculate} className='calculate-button' > Calculate</button></div>
    </div>
    </div>
  )
}

export default IVFCalculator