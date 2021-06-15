const axios = require('axios');
const { getInteger, getDecimal, authorInfo, ML_URL } = require('./utils')

const SEARCH_URL = `${ML_URL}/sites/MLA/search`;
const CATEGORIES_URL = `${ML_URL}/categories`;

// Aqui parseo la respuesta de la api de meli a la estructura de datos requerida
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

/**
  Busca la categoria con mas incidencias y hace una peticion a la apli de categories para buscar el path
 */
const getCategories = async categoriesArr => {
  //Primero obtengo un objeto, donde la key es el id de la categoria y el valor, el numero de incidencias de esa categoria
  const categoriesIdCount = categoriesArr.reduce((objCount, categoryId) => ({...objCount, [categoryId] : (objCount[categoryId] || 0) + 1}), {})

  //Ahora, dado el objeto formado como {idCategory: count..}, encuentro el numnero mas alto (el value) y obtengo la categoria (la key)
  const findHighestValReducer = ([maxKey, maxValue], [key, value]) => value > maxValue ? [key, value] : [maxKey, maxValue] // se destructura en forma de array porque es lo que retorna Object.entries
  const [ highestCategoryId ] = Object.entries(categoriesIdCount).reduce(findHighestValReducer, ['', 0]) // obtengo el id de la categoria que mas se repite

  //Ahora se obtiene la info de la api
  const categories = await axios.get(`${CATEGORIES_URL}/${highestCategoryId}`);

  return categories.data.path_from_root.map(c => c.name)
}

// Obtener la lista basado en la busqueda
const getItemsList = async (query) => {
  const response = await axios.get(`${SEARCH_URL}?q=${query}`); // peticion a la api de search

  const results = response.data.results.slice(0,4); // trunco el array con los primeros 4 resultados

  const categories = await getCategories(results.map(e => e.category_id)); // obtengo la info de las categorias

  return ({
    author: authorInfo,
    categories,
    items: results.map(parseResponseList)
  })
}

module.exports = { getItemsList }
