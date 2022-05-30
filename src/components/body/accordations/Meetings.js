import React from 'react'
import './meetings.css'
import { BsThreeDotsVertical } from 'react-icons/bs';
import DemoImage from "../../../assets/userimg1.jpg"
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Button from '@mui/material/Button';

export default function Meetings(){
    return (<>
      <div className='meetings-main-container'>
          <div className='about-meeting-time-div'>
              <div className='about-time-30-min'>30 minute call with clients </div>
             <div className='dots-3-div'> <BsThreeDotsVertical/></div>
          </div>
          <div className='project-discovery-call-div'>Project Discovery call</div>
          <div className='due-on-time-div'>Due soon <strong>09:20</strong></div>
          <div></div>
          <div className='avatar-groups-of-attendes'>

          <AvatarGroup max={4} mx={0}>
            <Avatar alt="Remy Sharp" src={DemoImage} />
            <Avatar alt="Travis Howard" src={DemoImage} />
            <Avatar alt="Cindy Baker" src={DemoImage} />
            <Avatar alt="Agnes Walker" src={DemoImage} />
            <Avatar alt="Trevor Henderson" src={DemoImage} />
            <Avatar alt="Cindy Baker" src={DemoImage} />
            <Avatar alt="Agnes Walker" src={DemoImage} />
            <Avatar alt="Trevor Henderson" src={DemoImage} />
            </AvatarGroup>

            <Button  className='invite-button' sx={{fontSize:'0.6rem'}} variant="contained"> + {"  "} invite</Button>

            
          </div>
    
       </div>
    </>)
}