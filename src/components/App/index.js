import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import Layout from './../Layout';
import Products from '../../pages/Products';
import ProductDetail from './../../pages/ProductDetail';
import store from './../../store';
import { GlobalStyle } from './styled';

class App extends Component {
  render() {
    return (    
      <Provider store={store}>
        <Router>
            <GlobalStyle />
            <Layout/>
            <Switch>
              <Route path="/" exact component={Products} />
              <Route path="/product/:id" component={ProductDetail} />
            </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App;