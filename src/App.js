import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './Home';
import Terms from './Terms';
import Policy from './Policy';
import {english,spanish} from './Language';

class App extends React.Component {
  
  state = {
    isEnglish: true,
    text:english,
  }
  
  getText= (eng) => {
    if (!eng){
      return spanish;
    }
    return english
  }
   handleChangeLanguage = () => {
    var eng = this.state.isEnglish;
    eng = !eng;
    this.setState({isEnglish: eng, text: this.getText(eng) });
  };

 
  render() {

  return (
  
    <Router>
        <Switch>
          {/* <Route path="/terms">
            <Terms text={this.state.text}  handleChangeLanguage={this.handleChangeLanguage} />
          </Route>
          <Route path="/policy">
            <Policy text={this.state.text}  handleChangeLanguage={this.handleChangeLanguage} />
          </Route> */}
          <Route path="/">
            <Home text={this.state.text} handleChangeLanguage={this.handleChangeLanguage} />
          </Route>
        </Switch> 
    </Router>
  );
}
}

export default App;