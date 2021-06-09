import React from 'react'
import ProductItem from './components/productItem.component'
import './styles.scss'

const SearchResultsView = ({data}) => {
  return (
    <div className="result-container">
      {data.map(item => <ProductItem {...item} />)}
    </div>
  )
}

export default SearchResultsView
