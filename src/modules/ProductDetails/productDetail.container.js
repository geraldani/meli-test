import React from 'react'
import ProductDetailView from './productDetail.component'
import { useGetData } from '../../Hooks';
import { useParams } from 'react-router-dom';
import {baseUrl} from '../../utils/URL'

/**
 * Componente container para la vista de detalle de producto, hace la peticion y luego se renderiza el componente presentacional
 * @returns {JSX.Element}
 * @constructor
 */
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
