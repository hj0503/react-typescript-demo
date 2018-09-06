import React, { Component } from 'react'
import { Router, HashRouter, Route, Link, Switch } from 'react-router-dom'

import Home from '../container/Home'
import City from '../container/City'
import User from '../container/User'
import Search from '../container/Search'
import Detail from '../container/Detail'

export default class RouteMap extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/city" component={ City } />
          <Route exact path="/user" component={ User } />
          <Route exact path="/search" component={ Search } />
          <Route exact path="/detail" component={ Detail } />
        </Switch>
      </HashRouter>
    )
  }
}
