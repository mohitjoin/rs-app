import React from 'react'

import Avatar from '@mui/material/Avatar';
import DemoImage from "../../../assets/userimg1.jpg"
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function PendingInvoice(){
    return(<>
     

    <div >
    <Card sx={{ minWidth: 280 ,margin:'20px',width:'30%' }}>
      <CardContent>
        <Typography sx={{ fontSize: 24,fontWeight:800,color:'black',textAlign:'left' }} color="text.secondary" gutterBottom>
          $180
        </Typography>

        <div style={{display:'flex',flexDirection:'row'}}>

            <div style={{ margin:'auto',marginLeft:'0px'}}>Amount</div>
            <div style={{ margin:'auto',marginRight:'0px'}}> <Button  variant="contained" sx={{background:'green'}}>Approved</Button></div>
        </div>

        <div style={{display:'flex',flexDirection:'row',textAlign:'left',padding:'10px'}}>
            <div style={{width:'50px'}}>
               <Avatar
                    alt="Mohit kumar"
                    src={DemoImage}
                    sx={{ width: 40, height: 40 }}
                />

            </div>

            <div sx={{marginLeft:'20px'}}>
              <div sx={{fontSize:'1.2rem',fontWeight:'600'}}>
              Erin Gonzales
              </div>
              <div>
              #5331 <strong>	Date : 25 May</strong>
              </div>


            </div>




        </div>
         
         
      </CardContent>
       
    </Card>
    </div>
    
    </>)
}