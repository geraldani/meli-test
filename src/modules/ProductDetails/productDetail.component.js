import React from 'react'
import { priceFormatter, decimalSplitter, formatText } from '../../utils'
import { Button, Breadcrumb, Loading, Error } from '../../Components'
import './productDetail.styles.scss'

const productCondition = {
  new: 'Nuevo',
  used: 'Usado'
}

/**
 * El componente dumb que renderiza la vista, recibe el objeto item y dos manejadores para saber si hubo error o si esta cargando
 * @param sold_quantity
 * @param condition
 * @param picture
 * @param title
 * @param price
 * @param description
 * @param categories
 * @param isLoading
 * @param isError
 * @returns {JSX.Element}
 * @constructor
 */
const ProductDetailView = ({
  sold_quantity,
  condition,
  picture,
  title,
  price = {},
  description,
  categories,
  isLoading,
  isError
}) => {

  const InfoSailsTitle = () => (
    <div className="product-detail-info_mobile">
      <p className="product-detail-info_conditionSail">{productCondition[condition]} - {sold_quantity} vendidos</p>
      <h2 className="product-detail-info_title">{title}</h2>
    </div>
  )

  const niceDescription = description ? formatText(description) : 'El vendedor no incluyó una descripción del producto'

  if (isLoading) return <Loading />

  if (isError) return <Error />

  return (
    <>
      <Breadcrumb crumbs={categories} />

      <div className="product-detail-container">
        <InfoSailsTitle />
        <img src={picture} alt={title} />
        <div className="product-detail-info">
          <InfoSailsTitle />

          <h3 className="product-detail-info_price">
            {priceFormatter(price)}
            {price.decimals > 0 && <span className="price-decimals">{decimalSplitter(price.decimals)}</span>}
          </h3>

          <Button title='Comprar' styleType="buy"></Button>
        </div>
        <div className="product-detail-description">
          <h4 className="product-detail-description_title">Descripción del producto</h4>
          <p>{niceDescription}</p>
        </div>
      </div>
    </>
  )
}

export default ProductDetailView
