import React from 'react'
import ProductItem from './components/productItem.component'
import './styles.scss'

const SearchResultsView = ({data, isLoading}) => {
  return (
    <div className="result-container">
      {
        isLoading && <div>Cargando</div>
      }
      {data.map(item => <ProductItem key={item.id} {...item} />)}
    </div>
  )
}

export default SearchResultsView
