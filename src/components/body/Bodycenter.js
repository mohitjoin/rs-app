import React from 'react'
import './bodycenter.css'
import Button from '@mui/material/Button';
import { CgMediaLive } from 'react-icons/cg';
import { GrCompliance } from 'react-icons/gr';
import {GrInProgress} from 'react-icons/gr';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { AiOutlineArrowLeft} from 'react-icons/ai';
import { AiOutlineArrowRight} from 'react-icons/ai';
import { GrFilter } from 'react-icons/gr';
import Projectcard from './accordations/Projectcard';
import PendingInvoice from './accordations/PendingInvoice';
export default function Bodycenter(){
  const okanhzai = React.createRef(null);

  const scroll = (scrollOffset) => {
    okanhzai.current.scrollLeft += scrollOffset;
    // console.log(">>")
  };


    return(
        <>
        
          <div className='main-body-center-container'>
             <div className='welcome-div-message'>Welcome back, Andrew!</div>
             <div className='a-small-message'>Have a look at the Quick Progress Bar.</div>
             <div className='three-coloured-divs'>
                   <div className='center-col-div-1'>
                     
                        <div className='top-buttons-div-1'>
                            <Button  className='buttons-relate-project' variant="text">
                                <CgMediaLive/>   <span className='small-space'></span>
                                Live projects</Button>
                                <div className='span-space'></div>
                            <Button className='buttons-relate-project' variant="text">View all</Button>
                        </div>

                        <div className='number-dashboard'>56</div>
                        <div className='small-info-about-number'>Currently, the projects is in progress.</div>
                     
                    </div> 
                   <div className='center-col-div-2'> 
                       <div className='top-buttons-div-1'>
                            <Button  className='buttons-relate-project' variant="text">
                                <GrInProgress/>  <span className='small-space'></span>
                                Live projects</Button>
                                
                        </div>
                        <div className='number-dashboard'>124</div>
                        <div className='small-info-about-number'>Projects in progress.</div>
                     
                    </div> 
                   <div className='center-col-div-3'>
                     
                            <div className='top-buttons-div-1'>
                                <Button  className='buttons-relate-project' variant="text">
                                    <GrCompliance/>  <span className='small-space'></span>
                                    Live projects</Button>
                                    
                            </div>
                            <div className='number-dashboard'>24</div>
                           <div className='small-info-about-number'>Completed projects.</div>
                     
                     
                      </div> 



             </div>

 
               <div className='current-project-heading-and-filters'>
                    <div  className='current-project-heading'>
                    Current Projects 
                    </div>
                    <div className='filters-div'>
                    <Button  sx={{width:'150px' , fontSize:'1rem',border:'1px solid black' ,marginRight:'10px',color:'black'}}>Filter <span className='small-space'></span> <GrFilter/> </Button>
                      
                    <Button  sx={{width:'10px' , fontSize:'1.7rem' ,border:'1px solid black' ,color:'black'}}><BsThreeDotsVertical/> </Button>
                    </div>
               </div>

               <div className='small-info-about-filters'>Projects that are currently in progress</div>

                  <div className='current-projects-going-on-container'>
                      <div className='small-left-arrow'> <AiOutlineArrowLeft className='arrow-buttons-to-change-projects' sx={{ boxShadow: '0px 10px 60px rgba(0, 0, 0, 0.15'}} onClick={() => scroll(-100)} /></div>
                        <div className='middle-container-current-projects' ref={okanhzai}>
                         <Projectcard/>
                         <Projectcard/>
                         <Projectcard/>
                          

                        </div>

                      <div className='small-right-arrow'><AiOutlineArrowRight className='arrow-buttons-to-change-projects' sx={{ boxShadow: '0px 10px 60px rgba(0, 0, 0, 0.15'}}  onClick={() => scroll(100)}  /></div>

                 </div>



                 {/* --------------------------------- */}
                 <div className='current-project-heading-and-filters'>
                    <div  className='current-project-heading'>
                    Pending invoice 
                    </div>
                    <div className='filters-div'>
                    {/* <Button  sx={{width:'150px' , fontSize:'1rem',border:'1px solid black' ,marginRight:'10px',color:'black'}}>Filter <span className='small-space'></span> <GrFilter/> </Button> */}
                      
                    <Button  sx={{width:'10px' , fontSize:'1.7rem' ,border:'1px solid black' ,color:'black'}}><BsThreeDotsVertical/> </Button>
                    </div>
               </div>
               <div className='small-info-about-filters'>Invoices that are currently pending</div>

                <div style={{width:'90%' ,marginTop:'10px',margin:'auto',  display:'flex',flexWrap:'wrap'}}>


                        <div   ><PendingInvoice/></div>
                        <div   ><PendingInvoice/></div>
                        <div   ><PendingInvoice/></div>
                        <div   ><PendingInvoice/></div>

                </div>



          </div>
        
        
        </>
    )
}