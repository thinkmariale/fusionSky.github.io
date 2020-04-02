import React from 'react';

import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './components/Header';
import Main from './components/Main';
import MainFeaturedImg from './components/MainFeatureImg';
import Footer from './components/Footer';


const mainFeaturedImg = {
  title: 'FusionSky',
  logo: '/images/logo_sss.png',
  image: '/images/back_1.jpg',
  title: 'something something',
  description1:'bla bla'
}

export default function Home(props) {
   const { text, handleChangeLanguage } = props;
;

  return (
    <React.Fragment>
      <CssBaseline />
        <Header header={text.headerHome} languageBtn= {handleChangeLanguage} />
        <main >
          <MainFeaturedImg post={text.intro} />
          <Main text={text}/>
        </main>
      <Footer footer={text.footer}  />
    </React.Fragment>
  );
}
