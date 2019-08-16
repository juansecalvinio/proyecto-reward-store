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
      <React.Fragment>
        <GlobalStyle>
          <Provider store={store}>
            <Router>            
                <Layout/>
                <Switch>
                  <Route path="/" exact component={Products} />
                  <Route path="/product/:id" component={ProductDetail} />
                </Switch>
            </Router>
          </Provider>
        </GlobalStyle>
      </React.Fragment>
    )
  }
}

export default App;