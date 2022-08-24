import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
// import '.Slider.css'

const Slider = () => {
  return (
   <>
    <Carousel >
      <Carousel.Item>
        <div className="heroanimation">
         
        </div>
        <img
          className="d-block w-100"
          
          src="./images/primary (1).jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <div className="heroanimation">
         
        </div>
        <img
          className="d-block w-100"
         
          src="./images/secondary.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <div className="heroanimation">
          
        </div>
        <img
          className="d-block w-100"
         
          src="./images/EY_admissions-webbanner-c.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
   
      
    </Carousel>
   </>
  )
}

export default Slider