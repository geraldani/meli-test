import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchBar from './Components/SearchBar/search.component'
import './commonStyles/glocal.scss';

const App = () => (
  <Router>
      <Switch>
        <Route exact path="/" component={SearchBar}></Route>
      </Switch>
  </Router>
)

export default App
