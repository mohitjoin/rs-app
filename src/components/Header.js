import React from 'react'
import './header.css'
import { FaLongArrowAltRight } from 'react-icons/fa';
import UserImage from '../assets/userImg.png'
 export default function Header(){
     return(
         <>
         
           <div className='header-container'>
               <div className='logo'>LOGO</div>
               <div className='search-bar-container'>
                   <div className='main-input-container' >
                      <input  className='main-input-top' placeholder='🔍   Search For Projects'></input>
                   </div>

               </div>
               <div className='user-info-container'>
                    <div className='image-container' >
                        <img src={UserImage} className='main-image-of-user' alt='User'/>
                    </div>
                    <div className='name-and-destination'>
                        <div className='full-name'>Oliver Smith</div>
                        <div className='destination-user'>vendor</div>
                    </div>
                    <div className='arrow-to-profile' > <FaLongArrowAltRight/> </div>
                    
               </div>

           </div>
            
         
         </>
     )
 }