import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import Layout from './../Layout';
import Products from '../../pages/Products';
import ProductDetail from './../../pages/ProductDetail';
import store from './../../store';

const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=DM+Sans:500,700&display=swap');
    font-family: 'DM Sans', sans-serif;
    margin: 0;
  }
`;

class App extends Component {
  render() {
    return (
      <>
      <GlobalStyle />
      <Provider store={store}>
        <Router>
            
            <Layout/>
            <Switch>
              <Route path="/" exact component={Products} />
              <Route path="/product/:id" component={ProductDetail} />
            </Switch>
        </Router>
      </Provider>
      </>
    )
  }
}

export default App;