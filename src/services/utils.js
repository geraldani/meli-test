//Constantes
const authorInfo = {
  name: 'Geraldyn',
  lastname: 'Chirinos'
}

//Funciones
const getInteger = amount => Math.trunc(amount)
const getDecimal = amount => Number((amount - Math.trunc(amount)).toPrecision(2))

module.exports = {
  authorInfo,
  getDecimal,
  getInteger
}
