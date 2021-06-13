import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { SearchBar, SearchResults, SearchMessage, ProductDetail } from './modules'
import './commonStyles/global.scss'

const App = () => (
  <>
    <Router>
      <SearchBar />
      <main className="main-container">
        <Switch>
          <Route exact path="/" component={SearchMessage}></Route>
          <Route exact path="/items" component={SearchResults}></Route>
          <Route exact path="/items/:id" component={ProductDetail}></Route>
        </Switch>
      </main>
    </Router>
  </>
)

export default App
