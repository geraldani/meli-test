import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { SearchBar, SearchResults, SearchMessage, ProductDetail } from './modules'
import { Error } from './Components'
import './commonStyles/global.scss'

// La base de la aplicacion
const App = () => (
  <>
    <Router>
      <SearchBar />
      <main className="main-container">
        <Switch>
          <Route exact path="/" component={SearchMessage}></Route>
          <Route exact path="/items" component={SearchResults}></Route>
          <Route exact path="/items/:id" component={ProductDetail}></Route>
          <Route>
            <Error type="wrongPath" />
          </Route>
        </Switch>
      </main>
    </Router>
  </>
)

export default App
