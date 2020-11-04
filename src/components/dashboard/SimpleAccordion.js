import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import PeopleIcon from '@material-ui/icons/People';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import DashboardIcon from '@material-ui/icons/Dashboard';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  accordion:{
    '.MuiAccordion-root:before':{
          backgroundColor: 'red'
    }
  }
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <DashboardIcon />
          <Typography className={classes.heading}>Dashboard</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <WorkOutlineIcon />
          <Typography className={classes.heading}>Reservation</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>Reservations</li>
            <li>Planning des prestations</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <PeopleIcon />
          <Typography className={classes.heading}>Contact</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>Reservations</li>
            <li>Planning des prestations</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <LocationSearchingIcon />
          <Typography className={classes.heading}>Recrutement</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>Reservations</li>
            <li>Planning des prestations</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <MoveToInboxIcon />
          <Typography className={classes.heading}>Mailbox</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>Reservations</li>
            <li>Planning des prestations</li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
