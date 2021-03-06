import React from 'react'
import Card from '../../../Components/Cards/card'
import { Link } from 'react-router-dom'
import { priceFormatter, shippingIcon } from '../../../utils'
import './productItem.styles.scss'

/**
 * Componente con la info del producto
 * @param picture
 * @param price
 * @param title
 * @param location
 * @param shipping
 * @param id
 * @returns {JSX.Element}
 * @constructor
 */
const ProductItem = ({ picture, price, title, location, free_shipping: shipping, id }) => {
  const url = `items/${id}`
  const formattedPrice = priceFormatter(price)

  return (
    <Card>
      <div className="product-item-container">
        <Link to={url}>
          <img src={picture} alt="" className="product-item-image" />
        </Link>
        <div className="product-item-info">
          <Link to={url}>
            <h2 className="product-item-info_price">
              {formattedPrice}{shipping && (
                <img src={shippingIcon}
                     alt="car-shipping"
                     className="shipping-icon" />
                 )}
            </h2>
          </Link>

          <h3 className="product-item-info_title">{title}</h3>
          <p className="product-item-location">{location}</p>

        </div>
        <p className="product-item-location">{location}</p>
      </div>
    </Card>
  )
}

export default ProductItem
