import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import HomeView from '../views/HomeView';
import LoginView from '../views/LoginView';
import configureStore from '../redux/store';
const store = configureStore()

 class Routes extends Component {
  render() {
    return (
      <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route path="/" component={ HomeView } exact />
              <Route path="/login" component={ LoginView } />
            </Switch>
        </BrowserRouter>
       </Provider>

     );
  }
}

 export default Routes;