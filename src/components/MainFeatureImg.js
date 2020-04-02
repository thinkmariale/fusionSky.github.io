import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import '../App.css';
import InteractionColors from './../AppTheme';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.white,
    paddingTop: theme.spacing(12),
    //marginBottom: theme.spacing(5),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  mainFeaturedPostImg: {
    position: 'relative',
    display: 'flex',
    justifyContent:'center',
    marginLeft: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
  mainFeaturedPostContent: {
    position: 'relative',
    display: 'flex',
    justifyContent:'center',
    flexDirection: 'column',
    paddingTop: theme.spacing(5),
    marginBottom: theme.spacing(10),
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
  titles:{
      marginBottom: theme.spacing(2),
      padding:theme.spacing(1),
      color: InteractionColors.white,
      display: 'flex',
      justifyContent:'left',
      fontSize:45,
      
    },
    descriptions:{
      color: InteractionColors.white,
      display: 'flex',
      justifyContent:'left',
      fontSize:25,
    
      paddingRight:theme.spacing(20),
    },
}));

export default function MainFeaturedImg(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Paper elevation={0} className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${post.backImage})` }}>
      <div className='overlay' /> 
        <div className={classes.mainFeaturedPostImg}>
          <img src={post.logo} alt="Logo" className='logo' />
        </div>
        <div className={classes.mainFeaturedPostContent}>
          <Typography variant="h4" className={classes.titles}>
              {post.title}
          </Typography>
          <Typography variant="h4" className={classes.descriptions}>
              {post.description}
          </Typography>
  
        </div>
    </Paper>
  ); 
}
