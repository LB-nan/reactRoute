import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from './react-router-dom'

import Home from './components/Home'
import User from './components/User'
import Profile from './components/Profile'


let root: HTMLDivElement = document.getElementById('root') as HTMLDivElement;
ReactDOM.render(
  <Router>
    <>
      <Route path="/" component={Home}  />
      <Route path="/user" component={User}  />
      <Route path="/profile" component={Profile}  />
    </>
  </Router>,
  root
)