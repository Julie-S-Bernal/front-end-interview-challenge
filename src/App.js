import React, { Component } from 'react';
import welcomeIcon from './assets/welcome.jpg';
import TabsIndex from './components/tabs';

class App extends Component {
  render() {
    return (
      <div>
      <img src={welcomeIcon} alt="Welcome!"/>
      <TabsIndex/>
      </div>
    );
  }
}

export default App;
