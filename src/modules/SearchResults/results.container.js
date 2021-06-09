import React from 'react'
import SearchResultsView from './results.component'



const mockPorducts = [
  {
    image: 'https://i.pinimg.com/736x/c0/48/d0/c048d0f04c95dc7c2d4523a1b76eae29.jpg',
    price: '$ 1.980',
    title: 'Apple Ipod Touch 5g 16gb Negro Igual a Nuevo Completo Unico!',
    location: 'Capital Federal',
    shipping: true
  },
  {
    image: 'https://www.cashregisterwarehouse.com.au/images/shop/SQUARE_HARDWARE_BUNDLE_15.jpg',
    price: '$ 1.980',
    title: 'Apple touch 5g en Negro',
    location: 'Mendoza',
    shipping: false
  },
  {
    image: 'https://www.appdegestion.com/app/276_punto-de-venta-square---pos/logo/276_punto-de-venta-square---pos.jpg',
    price: '$ 1.980',
    title: 'Apple touch 5g en Negro',
    location: 'Capital Federal',
    shipping: true
  }
]
const SearchResults = () => {

  return (
   <SearchResultsView data={mockPorducts} />
  )
}

export default SearchResults
