import React from 'react'
import "../Styles/Structure.css";
import png from "../Icons/forward.png"
import backward from "../Icons/backward.png"
import square from "../Icons/square.png"
import { BsThreeDots } from "react-icons/bs"


const Structure = () => {
  return (
    <div className='structuremain'>
      <div className='structureFirst'>
        <label htmlFor="">Title</label><br />
        <input type="text" />
      </div>
      <div className='structureSecond'>
        <label htmlFor="">Content</label>
        <div>
          <div>
            <div>File</div>
            <div>Edit</div>
            <div>View</div>
            <div>Insert</div>
            <div>Format</div>
            <div>Tools</div>
            <div>Table</div>
            <div>Help</div>
          </div>
          <div>
            <img src={png} alt="" />
            <img src={backward} alt="" />
            <img src={square} alt="" />
            <div id='Structurepara'>paragraph</div>
            <div><BsThreeDots /></div>
          </div>
        </div>
        <input type="text" />
      </div>
    </div>
  )
}

export default Structure
