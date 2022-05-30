import React from 'react'
import './bodyright.css'
import { BsThreeDotsVertical } from 'react-icons/bs';
import ControlledAccordionsMohit from './accordations/Accordation';
import Activity from './accordations/Activity';
export default function Bodyright(){
    return(
        <>
        
          <div className='main-body-right-container'>
             {/* space with name and-icon */}
             <div className='space-bar-with-name-and-icons'>

                <div className='space-bar-name-head'>Upcoming Meetings</div>
                <div className='space-bar-icon-head'><BsThreeDotsVertical/></div>

             </div>
             {/* line-div */}
             <div className='line-div'></div>

            <ControlledAccordionsMohit/>

             {/* space with name and-icon */}
             <div className='space-bar-with-name-and-icons'>

                <div className='space-bar-name-head'>Recent Activities</div>
                <div className='space-bar-icon-head'><BsThreeDotsVertical/></div>

             </div>
             <Activity/>
             <Activity/>
             <Activity/>
             <Activity/>
             <Activity/>
             <Activity/>

          </div>
        
        
        </>
    )
}