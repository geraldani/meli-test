import React from 'react'
import SearchResultsView from './results.component'

const mockPorducts = {
  author: {
    name: 'Geraldyn',
    lastname: 'Chirinos'
  },
  categories: ['tecnologia', 'dispositivos', 'celulares'],
  items: [
    {
      id: 'MLA918171241',
      title: 'Apple Ipod Touch 5g 16gb Negro Igual a Nuevo Completo Unico!',
      price: {
        currency: 'ars',
        amount: 154999,
        decimals: 0,
      },
      location: 'Mendoza',
      picture: 'https://www.ventasrosario.com.ar/wp-content/uploads/2019/10/iphone11-select-2019-family.jpg',
      condition: 'new',
      free_shipping: true
    },
    {
      id: 'apple',
      title: 'Apple Ipod Touch 5g 16gb Negro Igual a Nuevo Completo Unico!',
      price: {
        currency: 'ars',
        amount: 1500,
        decimals: 0,
      },
      location: 'Capital Federal',
      picture: 'https://www.cashregisterwarehouse.com.au/images/shop/SQUARE_HARDWARE_BUNDLE_15.jpg',
      condition: 'new',
      free_shipping: false
    },
    {
      id: 'MLA918171240',
      title: 'Apple Ipod Touch 5g 16gb Negro Igual a Nuevo Completo Unico!',
      price: {
        currency: 'ars',
        amount: 5400,
        decimals: 0
      },
      location: 'Capital Federal',
      picture: 'https://www.appdegestion.com/app/276_punto-de-venta-square---pos/logo/276_punto-de-venta-square---pos.jpg',
      condition: 'new',
      free_shipping: true
    },
    {
      id: 'MLA918171232',
      title: 'Apple Ipod Touch 5g 16gb Negro Igual a Nuevo Completo Unico!',
      location: 'Salta',
      price: {
        currency: 'ars',
        amount: 85044,
        decimals: 10
      },
      picture: 'https://i.pinimg.com/736x/c0/48/d0/c048d0f04c95dc7c2d4523a1b76eae29.jpg',
      condition: 'new',
      free_shipping: false
    },
  ]
}

const SearchResults = () => {

  return (
    <SearchResultsView data={mockPorducts.items} />
  )
}

export default SearchResults
