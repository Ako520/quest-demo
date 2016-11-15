import { Router, Route,IndexRoute, browserHistory ,DefaultRoute} from 'react-router'
import App from './App.js'
import React, { PropTypes } from 'react'
import itemList from './itemList.js'
import oneItem from './oneItem.js'
import {Provider} from 'react-redux'
import configureStore  from './store/configureStore.js'

const store = configureStore();

class Routes extends React.Component {
  render () {
    return(
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path='/' component={App}>
            <Route path="/items" component={itemList}>
              <Route path=":id" component={oneItem} />
            </Route>
          </Route>
        </Router>
      </Provider>
    )
  }
}

export default Routes;
