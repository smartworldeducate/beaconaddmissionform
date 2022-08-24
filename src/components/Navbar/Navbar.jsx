import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
   <>
   <nav className="navbar">
  {/* LOGO */}
 <div className="container">
 <div className="col-9 logo"><span><i className="fa-solid fa-phone"></i>111 277 111 </span>
 <span><a href='info@beaconhouse.net'><i class="fa-solid fa-envelope"></i>info@beaconhouse.net</a> </span></div>
  {/* NAVIGATION MENU */}
<div className='col-3'>
  <ul className='d-flex my-2'>
  <li><a href='https://www.facebook.com/BeaconhouseSchoolSystemOfficial/'><i className="fa-brands fa-facebook-f p-2"></i></a></li>
  <li><a href='https://twitter.com/BSSWorldwide/'><i className="fa-brands fa-twitter p-2"></i></a></li>
  <li><a href='https://www.instagram.com/bssworldwide//'><i className="fa-brands fa-instagram p-2"></i></a></li>
  </ul>
</div>
 </div>
</nav>

   </>
  )
}

export default Navbar