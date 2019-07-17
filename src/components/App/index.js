import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components'
import Background from './../../img/bg4.jpg';

import Layout from '../Layout';

const GlobalStyle = createGlobalStyle`
  body {
    background: url(${Background}) no-repeat fixed center;
    margin: 0;
  }
`;


class App extends Component {
  render() {
    return (
      // <Provider>
        <Router>
          <GlobalStyle />
          <Layout></Layout>
        </Router>
      /* </Provider> */
    )
  }  
}

export default App;