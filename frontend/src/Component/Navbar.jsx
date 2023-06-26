import React from 'react';
import "../Styles/Navbar.css";
import { BsThreeDotsVertical } from "react-icons/bs"

const Navbar = () => {
  return (
    <div className='mainNavbar'>
      <div className='mainNavbarUnder'>
        <div>
          <img src="https://deepthought.education/assets/images/logo/logo.svg" alt="" />
        </div>
        <div className='logoNavbar'>
          <div className='logo'>
            <img src='./Images/home.png' />
          </div>
          <div className='logo'>
            <img src='./Images/tools.png' />
          </div>
          <div>
            <img src='./Images/notification.png' className='notification' />
          </div>
          <div>
            <img src='./Images/profile.png' className='notification' />
          </div>
          <div>
            <BsThreeDotsVertical />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
