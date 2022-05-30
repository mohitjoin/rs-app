import React from 'react';
 import './projectcard.css'
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import DemoImage from "../../../assets/userimg1.jpg"
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { BiCalendarExclamation } from 'react-icons/bi';

import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import CircularProgress, {circularProgressClasses,} from '@mui/material/CircularProgress';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

 
  
export default function Projectcard(){
    return(<>
             <div >
             <Card sx={{ minWidth: 275,maxHeight:250,marginRight:2 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 18,textAlign:'left' }} color="black" gutterBottom>
                    Construction Project
                    </Typography>
                    <Typography sx={{ fontSize: 12,textAlign:'left' }}  component="div">
                     Property Name
                    </Typography>
                     <div className='price-and-date-div' style={{display:'flex',fontSize: 12,marginTop:'10px',flexDirection:'row',textAlign:'left'}}>
                         <div>$ 100-800</div>
                         <div style={{margin:'auto',marginRight:'0px'}}><BiCalendarExclamation/> Deadline-25 May</div>

                     </div>
                     <div style={{marginTop:'10px'}}><BorderLinearProgress variant="determinate" value={75} /></div>
                     <div style={{display:'flex',fontSize: 12,marginTop:'10px',flexDirection:'row',textAlign:'left'}}>
                         <div>Progress Bar</div>
                         <div style={{margin:'auto',marginRight:'0px'}} >75%</div>
                     </div>

                     <div style={{display:'flex',fontSize: 12,marginTop:'10px',flexDirection:'row',textAlign:'left'}}>
                         <div> <Avatar
                                alt="Mohit kumar"
                                src={DemoImage}
                                sx={{ width: 40, height: 40 }}
                            />
                             </div>
                         <div style={{padding:'13px'}} >Vendor Name</div>
                         <Button  variant="contained" sx={{margin:'auto',marginRight:'0px'}}>View</Button>
                         
                    </div>
                     
                </CardContent>
                {/* <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions> */}
                </Card>
             </div>
    
    </>)
}