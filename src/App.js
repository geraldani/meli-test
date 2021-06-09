import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SearchBar from './modules/SearchBar/search.container'
import './commonStyles/global.scss'
import SearchResults from './modules/SearchResults/results.container'

const App = () => (
  <main>
    <SearchBar />
    <Router>
      <Switch>
        <Route exact path="/" component={SearchResults}></Route>
      </Switch>
    </Router>
  </main>
)

export default App
