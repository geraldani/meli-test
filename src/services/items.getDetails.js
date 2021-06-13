const axios = require('axios');
const { getInteger, getDecimal, authorInfo } = require('./utils')

const urlItem = 'https://api.mercadolibre.com/items';

const parseResponseDetails = res => ({
  id: res.id,
  title: res.title,
  price: {
    currency: res.currency_id,
    amount: getInteger(res.price),
    decimals: getDecimal(res.price)
  },
  categories: ['Memoria','Flores','Disfraces','Halloween'],
  picture: res.pictures[0].secure_url || res.secure_thumbnail,
  condition: res.condition,
  free_shipping: res.shipping.free_shipping,
  sold_quantity: res.sold_quantity,
  description: res.description
})

const getItemDetails = async param => {
  const responseListedItemPromise = axios.get(`${urlItem}/${param}`);
  const responseDescriptionItemPromise = axios.get(`${urlItem}/${param}/description`);
  const [responseListedItem, responseDescriptionItem] = await Promise.all([responseListedItemPromise, responseDescriptionItemPromise])

  return ({
    author: authorInfo,
    item: parseResponseDetails({ ...responseListedItem.data, description: responseDescriptionItem.data.plain_text })
  })
}

module.exports = { getItemDetails }
