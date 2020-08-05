import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import UICard from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { green, purple } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Card() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    
    <UICard className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Ken Power
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Web Dev
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Passionate about Technology & Machines that operate with electrons.
        </Typography>
<Typography>3+ Years of Diverse Experience in Sales & CRM</Typography>
<Typography>-Sales (Face to Face, Call Center, Inbound, Outbound, Fixed Acquisition)</Typography>
<Typography>-Customer Relations Management (B2B, B2C)</Typography>
        <Typography variant="body2" component="p">
          
        </Typography>
        <Button href="https://www.linkedin.com/in/kenneth-power-a52405175/" variant="contained" color="#ffff00" className={classes.margin}>
        LinkedIn
        </Button>
      </CardContent>
      <CardActions>
      </CardActions>
    </UICard>
  );
}
