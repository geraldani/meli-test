import React from 'react'
import './productDetail.styles.scss'
import { priceFormatter } from '../../utils'
import Button from '../../Components/Button/button'
import { decimalSplitter, formatText } from '../../utils/formatters'

const productCondition = {
  new: 'Nuevo',
  used: 'Usado'
}

const ProductDetailView = ({ sold_quantity, condition, picture, title, price = {}, description, isLoading }) => {
  const InfoSailsTitle = () => (
    <div className="product-detail-info_mobile">
      <p className="product-detail-info_conditionSail">{productCondition[condition]} - {sold_quantity} vendidos</p>
      <h2 className="product-detail-info_title">{title}</h2>
    </div>
  )

  const niceDescription = description ? formatText(description) : 'El vendedor no incluyó una descripción del producto';

  return (
    <>
      {
        isLoading
        ? <div>cargando</div>
          :<div className="product-detail-container">
            <InfoSailsTitle />
            <img src={picture} alt="" />
            <div className="product-detail-info">
              <InfoSailsTitle />

              <h3 className="product-detail-info_price">
                {priceFormatter(price)}
                {price.decimals > 0 && <span className="price-decimals">{decimalSplitter(price.decimals)}</span> }
              </h3>

              <Button title='Comprar' styleType="buy"></Button>
            </div>
            <div className="product-detail-description">
              <h4 className="product-detail-description_title">Descripcion del producto</h4>
              <p>{niceDescription}</p>
            </div>
          </div>
      }

    </>

  )
}

export default ProductDetailView
