import React from 'react'
import { MdSpaceDashboard } from 'react-icons/md';
import { AiOutlineFileProtect } from 'react-icons/ai';
import { BiCalendarExclamation } from 'react-icons/bi';
import { IoMdSend } from 'react-icons/io';
import { MdNotificationsActive } from 'react-icons/md';
import { MdOutlineCall } from 'react-icons/md';
import { AiFillSecurityScan } from 'react-icons/ai';
import './bodyleft.css'
export default function Bodyleft(){
    return(
        <>
        
          <div className='main-body-left-container'>
            <div className='left-menu-containers'>
                <div className='space-bar'></div>
                {/* Tab 1 */}
                    <div className='left-tab-bar'>
                      {/* left-small-box */}
                      <div className='small-blue-mark'> </div>
                      {/* icon-div */}
                      <div className='side-menu-icons'><MdSpaceDashboard/></div>
                      {/* name-div */}
                      <div className='side-menu-names' >Dashboard</div>
                    </div>
                  {/* Tab 1 */}
                  <div className='left-tab-bar'>
                      {/* left-small-box */}
                      <div className='small-blue-mark2'> </div>
                      {/* icon-div */}
                      <div className='side-menu-icons2'><AiOutlineFileProtect/></div>
                      {/* name-div */}
                      <div className='side-menu-names2' >Projects</div>
                    </div>
                    {/* Tab 1 */}
                    <div className='left-tab-bar'>
                      {/* left-small-box */}
                      <div className='small-blue-mark2'> </div>
                      {/* icon-div */}
                      <div className='side-menu-icons2'><BiCalendarExclamation/></div>
                      {/* name-div */}
                      <div className='side-menu-names2' >Calendar</div>
                    </div>
                    {/* Tab 1 */}
                    <div className='left-tab-bar'>
                      {/* left-small-box */}
                      <div className='small-blue-mark2'> </div>
                      {/* icon-div */}
                      <div className='side-menu-icons2'><IoMdSend/></div>
                      {/* name-div */}
                      <div className='side-menu-names2' >Messages</div>

                      <div className='no-of-unready'>
                        <div className='main-numb-container' >5</div>
                      </div>

                    </div>
                    {/* Tab 1 */}
                    <div className='left-tab-bar'>
                      {/* left-small-box */}
                      <div className='small-blue-mark2'> </div>
                      {/* icon-div */}
                      <div className='side-menu-icons2'><MdNotificationsActive/></div>
                      {/* name-div */}
                      <div className='side-menu-names2' >Notification</div>

                      
                      <div className='no-of-unready'>
                        <div className='main-numb-container' >5</div>
                      </div>
                      

                    </div>

                    {/* Tab 1 */}
                    <div className='left-tab-bar'>
                      {/* left-small-box */}
                      <div className='small-blue-mark2'> </div>
                      {/* icon-div */}
                      <div className='side-menu-icons2'><MdOutlineCall/></div>
                      {/* name-div */}
                      <div className='side-menu-names2' >Contacts</div>
                     </div>
                     {/* space with name */}
                     <div className='space-bar-with-name'>Promotions</div>

                    {/* Tab 1 */}
                    <div className='left-tab-bar'>
                      {/* left-small-box */}
                      <div className='small-blue-mark2'> </div>
                      {/* icon-div */}
                      <div className='side-menu-icons2'><AiFillSecurityScan/></div>
                      {/* name-div */}
                      <div className='side-menu-names2' >Promotions</div>
                    </div>
                


            </div>

          </div>
        
        
        </>
    )
}