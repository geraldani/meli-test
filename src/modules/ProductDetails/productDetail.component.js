import React from 'react'
import './productDetail.styles.scss'
import { priceFormatter } from '../../utils'
import Button from '../../Components/Button/button'

const item = {
  id: 'MLA918171241',
  title: 'Apple Ipod Touch 5g 16gb Negro Igual a Nuevo Completo Unico!',
  price: {
    currency: 'ARS',
    amount: 1980,
    decimals: 0,
  },
  picture: 'https://www.ventasrosario.com.ar/wp-content/uploads/2019/10/iphone11-select-2019-family.jpg',
  condition: 'new',
  free_shipping: true,
  sold_quantity: 56,
  description: 'HP provee las impresoras más seguras del mundo. Con ellas, conseguirás proteger tu información, obtener lo máximo en tecnología y un rendimiento impresionante que se adaptará a cualquier reto que tengas. Sin dudas, esta máquina es ideal para cumplir, de forma eficiente, la meta que te propongas.'
}

const productCondition = {
  new: 'Nuevo',
  used: 'Usado'
}

const ProductDetailView = () => {
  const { sold_quantity, condition, picture, title, price, description } = item
  return (
    <div className="product-detail-container">
      <img src={picture} alt=""/>
      <div className="product-detail-info">
        <p className="product-detail-info_conditionSail">{productCondition[condition]} - {sold_quantity} vendidos</p>
        <h2 className="product-detail-info_title">{title}</h2>
        <h3 className="product-detail-info_price">{priceFormatter(price)}</h3>
        <Button title='Comprar' styleType="buy"></Button>
      </div>
      <div className="product-detail-description">
        <h4 className="product-detail-description_title">Descripcion del producto</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ProductDetailView
