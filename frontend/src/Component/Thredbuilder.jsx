import React from 'react'
import "../Styles/Theard.css";
import bulb from "../Icons/bulb.png"
import msg from "../Icons/msg.png"
import question from "../Icons/question.png"
import diya from "../Icons/diya.png"
import { SlArrowUp } from "react-icons/sl"

const Thredbuilder = () => {
  return (
    <div>
      <div className='threadFirst'>
        <div>
          <SlArrowUp />
        </div>
        <div>
          Thread A
        </div>
      </div>
      <div className='secondboxes'>
        <div>
          <div>Sub thread 1</div>
          <input type="text" placeholder='Enter Text Here' />
        </div>
        <div>
          <div>Sub interpretation 1</div>
          <input type="text" placeholder='Enter Text Here' />
        </div>
      </div>
      <div className='thirdBoxes'>
        <div>
          <img src={bulb} />
          <img src={msg} />
          <img src={question} />
          <img src={diya} />
        </div>
        <div>
          <select name="" id="">
            <option value="">Select Category</option>
            <option value="">Capital</option>
            <option value="">Horizontal</option>
          </select>
          <select name="" id="">
            <option value="">Select Process</option>
            <option value="">Xtranct Process</option>
            <option value="">Blund Process</option>
          </select>
        </div>
      </div>
      <div className='buttonDivtwo'>
        <div>
          <div>+ Sub-thread</div>
        </div>
      </div>
      <div className='lastThreadbox'>
        <div>
          <div>Summary for Thread A</div>
          <input type="text" placeholder='Enter Text Here' />
        </div>
      </div>
    </div>
  )
}

export default Thredbuilder
