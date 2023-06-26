import React from 'react'
import "./Styles/Heading.css"

const Heading = ({headingtitle,secondheading,paragraph}) => {
    return (
        <div className='maindiv'>
            <div>
                <div className='heading'>{headingtitle}</div>
                <div className='buttonDiv'>
                    <div>Submit task</div>
                </div>
            </div>
            <div className='secondMaindiv'>
                <div>{secondheading}</div>
                <p>{paragraph}</p>
            </div>
        </div>
    )
}

export default Heading
