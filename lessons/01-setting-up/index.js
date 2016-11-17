import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'
import Home from './modules/Home'
// import routes and pass into <Router/>
import routes from './modules/routes'

render((
  <Router routes={routes} history={browserHistory}>,
  // move this to a module component
  //   <Route path="/" component={App}>
  //     <IndexRoute component={Home}/>
  //     <Route path="/repos" component={Repos}>
  //       <Route path="/repos/:userName/:repoName" component={Repo}/>
  //     </Route>
  //     <Route path="/about" component={About}/>
  //   </Route>
  // </Router>
), document.getElementById('app'))
