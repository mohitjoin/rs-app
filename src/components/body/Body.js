import React from 'react'
import './body.css'
import Bodyleft from './Bodyleft'
import Bodycenter from './Bodycenter'
import Bodyright from './Bodyright'
export default function Body(){
    return(
        <>
        
          <div className='main-body-container'>
               <Bodyleft/>
               <Bodycenter/>
               <Bodyright/>

          </div>
        
        
        </>
    )
}