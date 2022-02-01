import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PageRender from './PageRender'
import {Header,Footer} from './components'
import home from './pages/home'

function App() {
  return (
    <div className="container">

      <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/:page" component={PageRender} />
          <Route exact path="/:page/:slug" component={PageRender} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
