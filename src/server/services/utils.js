//Constantes
const authorInfo = {
  name: 'Geraldyn',
  lastname: 'Chirinos'
}

//Funciones
const getInteger = amount => Math.trunc(amount) // formatea enteros: 450.84 => 450
const getDecimal = amount => Number((amount - Math.trunc(amount)).toPrecision(2)) //formatea decimales: 450.84 => 0.84

//Endpoints
const ML_URL = 'https://api.mercadolibre.com';


module.exports = {
  authorInfo,
  getDecimal,
  getInteger,
  ML_URL
}
