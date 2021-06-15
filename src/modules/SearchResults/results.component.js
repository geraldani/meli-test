import React from 'react'
import ProductItem from './components/productItem.component'
import Loading from '../../Components/Loaders/loading.component'
import './styles.scss'
import Breadcrumb from '../../Components/Breadcrumb/breadcrumb.component'
import Error from '../../Components/Error/error.component'

// Renderiza la lista de productos
const SearchResultsView = ({ data = [], isLoading, categories, isError }) => {

  if (isError) return <Error />

  return (
    <div className="result-container">
      {
        isLoading && <Loading />
      }

      <Breadcrumb crumbs={categories} />

      { data.map(item => <ProductItem key={item.id} {...item} />) }
    </div>
  )
}

export default SearchResultsView
