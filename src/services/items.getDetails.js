const axios = require('axios');
const { getInteger, getDecimal, authorInfo, baseUrl } = require('./utils')

const urlItem = `${baseUrl}/items`;
const urlCategories = `${baseUrl}/categories`

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
  const listedItemPromise = axios.get(`${urlItem}/${param}`);
  const descriptionItemPromise = axios.get(`${urlItem}/${param}/description`);

  const [responseListedItem, responseDescriptionItem] = await Promise.all([listedItemPromise, descriptionItemPromise])

  const categories = await axios.get(`${urlCategories}/${responseListedItem.data.category_id}`);

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
