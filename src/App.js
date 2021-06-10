import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SearchBar from './modules/SearchBar/search.container'
import './commonStyles/global.scss'
import SearchResults from './modules/SearchResults/results.container'
import ProductDetail from './modules/ProductDetails/productDetail.container'

const App = () => (
  <>
    <SearchBar />
    <main className="main-container">
      <Router>
        <Switch>
          <Route exact path="/" component={SearchResults}></Route>
          <Route exact path="/items/:id" component={ProductDetail}></Route>
        </Switch>
      </Router>
    </main>
  </>
)

export default App
