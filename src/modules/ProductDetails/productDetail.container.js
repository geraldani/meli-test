import React from 'react'
import ProductDetailView from './productDetail.component'
import { useGetData } from '../../Hooks';
import { useParams } from 'react-router-dom';
import {baseUrl} from '../../utils/URL'

const ProductDetail = () => {
  let { id } = useParams()
  const {data, isLoading, isError} = useGetData(`${baseUrl}/api/items/${id}`)

  return (
    <ProductDetailView
      {...data?.item}
      isLoading={isLoading}
      isError={isError}
    />
  )
}

export default ProductDetail
