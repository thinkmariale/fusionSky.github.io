import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';

import InteractionColors from './../AppTheme';


const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: InteractionColors.white,
    color: InteractionColors.lightPurple,
    paddingBottom: 10,
  },
  terms:{
    color: InteractionColors.lightPurple,
      "&:hover": {
        color: InteractionColors.darkRed
      },
      display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  info:{
    color: InteractionColors.darkRed,
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const { footer } = props;

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
      <Divider />
  
       {/* <div className={classes.terms}>
            <Link href={footer.terms}  color="inherit" style={{marginRight:'15px'}}  target="_blank" >
              Terms of Service  
            </Link> 
            <Link href={footer.policy} color="inherit"  target="_blank" >
              Privacy Policy
            </Link>
           
        </div> */}
        <Typography variant="subtitle1" align="center" component="p" color="inherit" className={classes.info}>
          {footer.description}
        </Typography>
        <Typography variant="subtitle1" align="center" component="p" color="inherit" className={classes.info}>
          {footer.contact.contact}
        </Typography>
          <Typography variant="body2" color="inherit" align="center" >
            {'Copyright © '}
            <Link color="inherit" href="https://fusion-sky.com/">
            
            </Link>{' '}
            {new Date().getFullYear()}
            {'  FusionSky, LLC. -  All Rights Reserved -'}
          </Typography>
      </Container>
    </footer>
  );
}

