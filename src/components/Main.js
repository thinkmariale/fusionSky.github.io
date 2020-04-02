import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';

import MainFeaturedPost from './MainFeaturePost';
import InteractionColors from './../AppTheme';
import '../App.css';

const useStyles = makeStyles((theme) => ({

  titles:{
    marginBottom: theme.spacing(2),
    padding:theme.spacing(1),
    color: InteractionColors.logColor,
    display: 'flex',
    justifyContent:'center',
    fontSize:45,
    textAlign:'center',
  },
  descriptions:{
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(5),
    paddingLeft:theme.spacing(20),
    paddingRight:theme.spacing(20),
    color: InteractionColors.lightOrange,
    display: 'flex',
    justifyContent:'center',
    fontSize:25,
    textAlign:'center',
  },
  productsCard: {
    width: 250,
    height:300,
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down('xs')]: {
      width: 200,
      height: 300,
    },
  },
  productsMedia: {
    height: 220,
    backgroundSize:'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
   
    [theme.breakpoints.down('xs')]: {
      height: 200,
    },
  },
  productContent:{
    padding:theme.spacing(0.5),
    paddingLeft:theme.spacing(1.5),
    color: InteractionColors.lightOrange,
    borderTop: `1.5px solid ${theme.palette.divider}`,
  },
  image: {
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
    },
  },
  
}));



export default function Main(props) {
  const { text } = props;
  const classes = useStyles();
 
  return (
    <div className='mainContainer'>

      <div id="consulting" className='sections'>
        <MainFeaturedPost post = {text.consulting} />
      </div>
      <div className='sections' id="apps">     
        <Typography  variant="h1" className={classes.titles}>
            {text.products.title}
        </Typography>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={3}>
              {text.products.cards.map((obj,value) => (
              <Grid key={value} item>
                <Card className={classes.productsCard}>
                  <CardMedia
                    className={classes.productsMedia}
                    image= {obj.image}
                    title={obj.title}
                    style ={{backgroundColor:obj.color}}
                  />
                  <CardContent className={classes.productContent}>
                    <Typography gutterBottom variant="h5" component="h2" color="inherit" >
                    {obj.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" color="inherit">
                    {obj.decription}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              ))}
          </Grid>
        </Grid>
      </div>
  
     
    </div>
  );
}

