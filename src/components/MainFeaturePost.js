import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import '../App.css';
import InteractionColors from './../AppTheme';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor:  theme.palette.common.white,
    color: InteractionColors.darkRed,
    paddingTop: theme.spacing(0),
  
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  font:{
    // fontFamily: "GothamRounded-Light"
  },
  font1:{
    // fontFamily: "GothamRounded-Bold"
  },
  mainFeaturedPostContent: {
    position: 'relative',
   
    minHeight:350,
    padding: theme.spacing(5),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(8),
      paddingRight: 40,
    },
  },
}));

export default function MainFeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Paper  className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${post.image})` }}>
  
      {/* <div className='overlay' />  */}
        <div className={classes.mainFeaturedPostContent}>
        <Typography component="h2" variant="h2" gutterBottom  className={classes.font}>
            {post.title}
        </Typography>
        <Typography variant="body1" paragraph>
            {post.description1}
        </Typography>
        <br/>
        <Typography variant="h5" paragraph  className={classes.font1}>
            {post.description2}
        </Typography>
        <br/>
        <Typography variant="overline" >
            {post.description3}
        </Typography>
       
        </div>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};