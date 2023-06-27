import React from 'react'
import "../Styles/Assets.css"

const Assets = ({ heading, description, children }) => {
  return (
    <div className='maindivasset'>
      <div className='firstContainer'>
        <div></div>
        <div>{heading}</div>
        <div>
          <div>i</div>
        </div>
      </div>
      <div className='secondContainer'>
        <span>Description: </span><p>{description}</p>
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default Assets
