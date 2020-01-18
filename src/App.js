import React, { Component } from 'react';

import GlobalStyle from './styles/GlobalStyle';
import TabsIndex from './components/tabs';

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <TabsIndex/>
      </>
    );
  }
}

export default App;
