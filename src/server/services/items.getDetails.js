const axios = require('axios');
const { getInteger, getDecimal, authorInfo, ML_URL } = require('./utils')

const ITEMS_URL = `${ML_URL}/items`;
const CATEGORIES_URL = `${ML_URL}/categories`

const parseResponseDetails = res => ({
  id: res.id,
  title: res.title,
  price: {
    currency: res.currency_id,
    amount: getInteger(res.price),
    decimals: getDecimal(res.price)
  },
  categories: res.categories.map(c => c.name),
  picture: res.pictures[0].secure_url || res.secure_thumbnail,
  condition: res.condition,
  free_shipping: res.shipping.free_shipping,
  sold_quantity: res.sold_quantity,
  description: res.description
})

const getItemDetails = async param => {
  const listedItemPromise = axios.get(`${ITEMS_URL}/${param}`);
  const descriptionItemPromise = axios.get(`${ITEMS_URL}/${param}/description`);

  const [responseListedItem, responseDescriptionItem] = await Promise.all([listedItemPromise, descriptionItemPromise])

  const categories = await axios.get(`${CATEGORIES_URL}/${responseListedItem.data.category_id}`);

  return ({
    author: authorInfo,
    item: parseResponseDetails({
      ...responseListedItem.data,
      description: responseDescriptionItem.data.plain_text,
      categories: categories.data.path_from_root
    })
  })
}

module.exports = { getItemDetails }
