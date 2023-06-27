import React, { useEffect, useState } from 'react'
import Assets from './Assets'
import Heading from './Heading'
import Navbar from './Navbar';
import axios from "axios"
import "../Styles/Mainpages.css"
import Youtube from './Youtube';
import Thredbuilder from './Thredbuilder';
import Structure from './Structure';
import FourSA from './FourSA';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi"
import { FaPlus } from "react-icons/fa";
import { ImCross } from "react-icons/im"

const Mainpages = () => {
  const [data, setData] = useState([]);
  const [sidebar, setSidebar] = useState(true)
  const [sidebartwo, setSidebartwo] = useState(true)

  const handleClickone = () => {
    setSidebar(false)
  }

  const handleClicktwo = () => {
    setSidebar(true)
  }

  const hanldeClickthree = () => {
    setSidebartwo(false)
  }

  const hanldeClickfour = () => {
    setSidebartwo(true)
  }

  useEffect(() => {
    axios.get("https://splendid-shoulder-pads-mite.cyclic.app/deepthoughtassignemnt")
      .then((res) => {
        setData(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [sidebar])
  // console.log(data.tasks[0])
  console.log(sidebar)
  return (
    <div>
      <Navbar />
      <div className='mainbodyhomepage' >
        <div>
          {
            sidebar ?
              <div className='leftsidebar'>
                <div>
                  <div onClick={handleClickone}>
                    <HiArrowNarrowRight />
                  </div>
                </div>

                <div>
                  <div>
                    <div>1</div>
                  </div>
                </div>
              </div> :
              <div className='leftsidebarJourney'>
                <div>
                  <div>Journey board</div>
                  <div onClick={handleClicktwo}>
                    <HiArrowNarrowLeft />
                  </div>
                </div>

                <div>
                  <div>
                    <div>
                      <li className='firstTitle'>{data && data.data && data.data.tasks && data.data.tasks[0].task_title}</li>
                      {
                        data && data.data && data.data.tasks && data.data.tasks[0].assets.map((el) => {
                          return (
                            <div key={el.task_id} className="titlelist">
                              <li>{el.asset_title}</li>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
              </div>
          }
        </div>


        <div onClick={handleClicktwo}>
          <Heading headingtitle={data && data.data && data.data.title} secondheading={data && data.data && data.data.tasks && data.data.tasks[0].task_title} paragraph={data && data.data && data.data.tasks && data.data.tasks[0].task_description} />
          <div className='mainBody'>
            {
              data && data.data && data.data.tasks && data.data.tasks[0].assets.map((el, index) => {
                return (
                  <div key={el.task_id}>
                    <Assets heading={el.asset_title} description={el.asset_description} children={index === 0 ? <Youtube link={el.asset_content} /> : index === 1 ? <Thredbuilder /> : index === 2 ? <Structure /> : index === 3 ? <FourSA /> : null} />
                  </div>
                )
              })
            }
          </div>
        </div>

        <div>
          {
            sidebartwo ?
              <div className='rightsidebar'>
                <div>
                  <div className='firstright' onClick={hanldeClickthree}><ImCross /></div>
                  <div>N o t i c e</div>
                  <div>B o a r d</div>
                </div>
                <div></div>
              </div> :
              <div className='rightsidebartwo'>
                <div></div>
                <div>
                  <div className='firstrighttwo' onClick={hanldeClickfour}><FaPlus /></div>
                  <div>N o t i c e</div>
                  <div>B o a r d</div>
                </div>
              </div>
          }
        </div>

      </div>

    </div >
  )
}

export default Mainpages
