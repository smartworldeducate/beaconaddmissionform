import React from 'react'
import './Header.css'
import Navbar from '../Navbar/Navbar'
import Slider from '../Slider/Slider'

const Header = () => {
  return (
    <>
    <Navbar/>
   <div className="container p-3">
   <Slider/>
   </div>
   <div className='container py-3 content text-center'>
    <div className='content'>
    <h1>Online Enquiry Form</h1>
   <p>Beaconhouse has always strived for excellence and we are strongly committed to providing ease and comfort to the community. For your safety and convenience, you can apply for an admission online on our website by filling out the form below and our representative shall get in touch with you. You may also like to visit the nearest campus to be able to make a more informed decision with regards to the choice of campus.</p>
  
    </div>
  </div>
   
    </>
  )
}

export default Header