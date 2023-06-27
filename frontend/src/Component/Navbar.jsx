import React from 'react';
import "../Styles/Navbar.css";
import home from "../Icons/home.png"
import notifiction from "../Icons/notification.png"
import tools from "../Icons/tools.png"
import profile from "../Icons/profile.png"
import { BsThreeDotsVertical } from "react-icons/bs"

const Navbar = () => {
  return (
    <div className='mainNavbar'>
      <div className='mainNavbarUnder'>
        <div>
          <img src="https://deepthought.education/assets/images/logo/logo.svg" alt="logo" />
        </div>
        <div className='logoNavbar'>
          <div className='logo'>
            <img src={home} />
          </div>
          <div className='logo'>
            <img src={tools} />
          </div>
          <div>
            <img src={notifiction} className='notification' />
          </div>
          <div>
            <img src={profile} className='notification' />
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
