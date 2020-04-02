import React, {useEffect, useState} from 'react';

import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

import Header from './components/Header';
import Footer from './components/Footer';
import MainFeaturedPost from './components/MainFeaturePost';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  titles:{
    marginBottom: theme.spacing(2),
    paddingLeft:theme.spacing(10),
    paddingRight:theme.spacing(10),
    color: '#8856b3',
    display: 'flex',
    justifyContent:'left',
  },
  question:{
    marginBottom: theme.spacing(1),
    paddingLeft:theme.spacing(10),
    paddingRight:theme.spacing(10),
    color: '#633A87',
    display: 'flex',
    justifyContent:'left',
  },
}));


//export default function Policy(props) {
  const Policy = (props)  => {
  
    const [policy, setPolicy] = useState("");

    useEffect(() => {
      async function fetchData() {
        const res = await fetch("/policy.txt")
        res
          .text()
          .then(res => setPolicy(res))
          .catch(err => console.log(err));
      }
  
      fetchData();
    });

    
    const { text,  handleChangeLanguage } = props;
    const classes = useStyles();
    
    return (
       
      <React.Fragment>
        <CssBaseline />
        
         <Header header={text.headerDownload} languageBtn= {handleChangeLanguage} />
          <main>
            <MainFeaturedPost post={text.policy} />
              
            <div className='mainTerms'>
                { 
                  policy.split('\n').map(function(item) {
                    return (
                      <Typography component="h1" variant="body1" className={classes.titles} >
                      {item}
                    
                      </Typography>
                    )
                  })
                  }
               
            </div>
            
          </main>
          <Footer footer={text.footer}  />
      </React.Fragment>
    );
  }
  
  export default  Policy;