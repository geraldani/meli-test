const axios = require('axios');

const urlSearch = 'https://api.mercadolibre.com/sites/MLA/search';


const { getInteger, getDecimal, authorInfo } = require('./utils')


//todo falta ver lo de agregar categories
const parseResponseList = res => ({
  id: res.id,
  title: res.title,
  price: {
    currency: res.currency_id,
    amount: getInteger(res.price),
    decimals: getDecimal(res.price)
  },
  picture: res.thumbnail,
  condition: res.condition,
  location: res.address.state_name,
  free_shipping: res.shipping.free_shipping
})

const getItemsList = async (query) => {
  const response = await axios.get(`${urlSearch}?q=${query}`)
  let results = response.data.results
  return ({
    author: authorInfo,
    categories: ['Memoria','Flores','Disfraces','Halloween'],
    items: results.slice(0, 4).map(parseResponseList)
  })
}

module.exports = { getItemsList }
