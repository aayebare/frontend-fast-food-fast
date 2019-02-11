import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import AuthView from '../views/AuthView';
import configureStore from '../redux/store';
import LoginView from '../views/LoginView';
import MenuView from '../views/MenuView';
import menu from '../views/Menu';
const store = configureStore()

 class Routes extends Component {
  render() {
    return (
      <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route path="/" component={ AuthView } exact/>
              <Route path="/login" component={ LoginView } />
              <Route path="/additem" component={ MenuView } />
              <Route path="/get" component={ menu} />
            </Switch>
        </BrowserRouter>
       </Provider>

     );
  }
}

 export default Routes;