const axios = require('axios');

const urlSearch = 'https://api.mercadolibre.com/sites/MLA/search';
const urlItem = 'https://api.mercadolibre.com/items';

const authorInfo = {
  name: 'Geraldyn',
  lastname: 'Chirinos'
}

const getInteger = amount => Math.trunc(amount)
const getDecimal = amount => Number((amount - Math.trunc(amount)).toPrecision(2))

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
    items: results.slice(0, 4).map(parseResponseList)
  })
}

const parseResponseDetails = res => ({
  id: res.id,
  title: res.title,
  price: {
    currency: res.currency_id,
    amount: res.price,
    decimals: 0,
  },
  picture: res.pictures[0].secure_url || res.secure_thumbnail,
  condition: res.condition,
  free_shipping: res.shipping.free_shipping,
  sold_quantity: res.sold_quantity,
  description: res.description
})

const getItemDetails = async param => {
  const responseListedItem = await axios.get(`${urlItem}/${param}`);
  const responseDescriptionItem = await axios.get(`${urlItem}/${param}/description`);
  return ({
    author: authorInfo,
    item: parseResponseDetails({ ...responseListedItem.data, description: responseDescriptionItem.data.plain_text })
  })
}

module.exports = {
  getItemsList,
  getItemDetails
}
