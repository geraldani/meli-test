import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import ProductDetailView from './productDetail.component'
import axios from 'axios'

const ProductDetail = () => {
  let { id } = useParams();
  const [item, setItem] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true)
        const res = await axios.get(`http://localhost:3001/api/items/${id}`);
          setItem(res.data.item);
      } catch (e) {
        console.log('ocurrio un error')
      }finally {
        setIsLoading(false)
      }
    })()
  }, [])

  return (
   <ProductDetailView {...item} isLoading={isLoading} />
  )
}

export default ProductDetail
