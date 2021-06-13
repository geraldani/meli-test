import React from 'react'
import './productDetail.styles.scss'
import Button from '../../Components/Button/button'
import Loading from '../../Components/Loaders/loading.component'
import Error from '../../Components/Error/error.component'
import { priceFormatter, decimalSplitter, formatText } from '../../utils'

const productCondition = {
  new: 'Nuevo',
  used: 'Usado'
}

const ProductDetailView = ({
 sold_quantity,
 condition,
 picture,
 title,
 price = {},
 description,
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
  )
}

export default ProductDetailView
