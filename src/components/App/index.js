import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import Layout from './../Layout';
import Home from './../../pages/Home';
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
      <Provider store={store}>
        <Router>
            <GlobalStyle />
<<<<<<< HEAD
            <div>
              <Layout />
=======
            <Layout>
>>>>>>> 74e6f896c26ddacd6fc42b852e610042df55602c
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/product/:id" component={ProductDetail} />
              </Switch>
<<<<<<< HEAD
            </div>            
=======
            </Layout>
>>>>>>> 74e6f896c26ddacd6fc42b852e610042df55602c
        </Router>
      </Provider>
    )
  }
}

export default App;