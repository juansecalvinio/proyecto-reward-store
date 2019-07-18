import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import Layout from '../Layout';

const GlobalStyle = createGlobalStyle`
  body {
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%);
    font-family: sans-serif;
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