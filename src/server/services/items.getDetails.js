const axios = require('axios');
const { getInteger, getDecimal, authorInfo, ML_URL } = require('./utils')

const ITEMS_URL = `${ML_URL}/items`;
const CATEGORIES_URL = `${ML_URL}/categories`

// Aqui parseo la respuesta de la api de meli a la estructura de datos requerida
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

// Obtiene el detalle de un item dado un id
const getItemDetails = async param => {
  const listedItemPromise = axios.get(`${ITEMS_URL}/${param}`); // se obtiene la peticion del detalle
  const descriptionItemPromise = axios.get(`${ITEMS_URL}/${param}/description`); // y luego la peticion de la descripcion

  const [responseListedItem, responseDescriptionItem] = await Promise.all([listedItemPromise, descriptionItemPromise]) // hago esto para no esperar por la primera peticion para que se ejecute la segunda

  const categories = await axios.get(`${CATEGORIES_URL}/${responseListedItem.data.category_id}`); // aqui si dependo de datos del primer get, asi que esta la hago aparte

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
