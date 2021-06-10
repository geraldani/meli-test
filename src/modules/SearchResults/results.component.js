import React from 'react'
import ProductItem from './components/productItem.component'
import './styles.scss'

const SearchResultsView = ({data}) => {
  return (
    <div className="result-container">
      {data.map(item => <ProductItem key={item.id} {...item} />)}
    </div>
  )
}

export default SearchResultsView
