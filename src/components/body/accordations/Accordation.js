import React from 'react'
 
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Meetings from './Meetings';

export default function ControlledAccordionsMohit() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>

      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '75%', flexShrink: 0 ,fontWeight:'600',textAlign:'left'}}>
            Today's Meetings
          </Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          {/* <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
             
          </Typography> */}
          <Meetings/>
          <Meetings/>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '75%', flexShrink: 0,fontWeight:'600',textAlign:'left' }}>Schedule Meetings</Typography>
           
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           No Meetings Scheduled.
             
          </Typography>
        </AccordionDetails>
      </Accordion>

       
    </div>
  );
}