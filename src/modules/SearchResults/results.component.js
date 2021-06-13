import React from 'react'
import ProductItem from './components/productItem.component'
import Loading from '../../Components/Loaders/loading.component'
import './styles.scss'
import Breadcrumb from '../../Components/Breadcrumb/breadcrumb.component'

const SearchResultsView = ({ data = [], isLoading, categories }) => {
  return (
    <div className="result-container">
      {
        isLoading && <Loading />
      }
      <Breadcrumb crumbs={categories} />
      {data.map(item => <ProductItem key={item.id} {...item} />)}
    </div>
  )
}

export default SearchResultsView
