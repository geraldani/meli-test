import React from 'react'
import Card from '../../../Components/Cards/card'
import shippingIcon from '../../../assets/images/ic_shipping2x.png'
import './productItem.styles.scss'

const ProductItem = ({ image, price, title, location, shipping }) => (
  <Card>
    <div className="product-item-container">
      <img src={image} alt="" className="product-item-image" />
      <div className="product-item-info">
        <h2 className="product-item-info_price">
          {price}
          {shipping && <img src={shippingIcon} alt="" className="shipping-icon" />}
        </h2>
        <h3 className="product-item-info_title">{title}</h3>
      </div>
      <p className="product-item-location">{location}</p>
    </div>
  </Card>
)

export default ProductItem
