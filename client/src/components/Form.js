import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import UICard from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

export default function Form() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <UICard className={classes.root}>
      <CardContent style={{flex:1, backgroundColor:'lightgrey'}}>
        <Typography variant="h5" component="h2">
          About Me
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        "By far the best investment you can make is in yourself" -Warren Buffet
        </Typography>
        <Typography>
I have been investing in courses to upskill, widen my employability & learn. One of the best things about attending courses is the access to help, resources and personalised answers.

Working with circuit boards as a child, playing with html in my adolescence and mastering the Adobe creative suite through high school. In my life Im determined to merge my passions into a successful career. Theres always a way...

I am currently producing a portfolio to display my passions, skills and expertise. It will be available in the coming weeks on the domain

        </Typography>

        
      </CardContent>
      <CardActions>
        <Button href="https://www.thekenpower.com/" size="large">Website</Button>
      </CardActions>
    </UICard>
  );
}
