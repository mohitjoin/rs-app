import React from 'react'
import './activity.css'
import Avatar from '@mui/material/Avatar';
import DemoImage from "../../../assets/userimg1.jpg"
// import Stack from '@mui/material/Stack';
export default function Activity(){
    return (
        <>
        <div className='Activity-main-container'>
            <div className='blue-dot' >•</div>
            <div className='message-name-date'>
                <div>You received a message from Mohit </div>
                <div className='messanger-name'>Mohit Kumar</div>
                <div className='messanger-date'>Jun 14, 2021 at 5:31 PM</div>
            </div>
            <div className='avatar-div'>
                <Avatar
                    alt="Mohit kumar"
                    src={DemoImage}
                    sx={{ width: 56, height: 56 }}
                />

            </div>

            
        </div>
        </>
    )
}