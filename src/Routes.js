import { Router, Route,IndexRoute, browserHistory ,DefaultRoute} from 'react-router'
import App from './App.js'
import React, { PropTypes } from 'react'
import clickNav from './ClickNav.js'
import itemList from './itemList.js'
import oneItem from './oneItem.js'
import a from './a.js'
import b from './b.js'
import c from './c.js'
import d from './d.js'
import {Provider} from 'react-redux'
import configureStore  from './store/configureStore.js'

const store = configureStore();

class Routes extends React.Component {
  render () {
    return(
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path='/' component={App}>
            <IndexRoute component={clickNav} />
            <Route path="/a" component={a} />
            <Route path="/b" component={b} />
            <Route path="/c" component={c} />
            <Route path="/d" component={d} />
            <Route path='/items' component={itemList}>
              <Route path="/items/:id" component={oneItem} />
            </Route>
          </Route>
        </Router>
      </Provider>
    )
  }
}

export default Routes;
