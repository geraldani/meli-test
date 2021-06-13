import React from 'react'
import ProductItem from './components/productItem.component'
import Loading from '../../Components/Loaders/loading.component'
import './styles.scss'

const SearchResultsView = ({ data = [], isLoading }) => {
  return (
    <div className="result-container">
      {
        isLoading && <Loading />
      }
      {data.map(item => <ProductItem key={item.id} {...item} />)}
    </div>
  )
}

export default SearchResultsView
