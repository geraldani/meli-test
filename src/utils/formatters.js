import React, { Fragment } from 'react'

/**
 * Formatea un numero decimal para que se muestre como un integer
 * @param dec el numero decial, viene expresado cmo 0.5, 1.4 etc
 * @param pres la precision del decima, por defecto es 2. Ej 0.2 => 20
 * @returns {string}
 */
const decimalSplitter = (dec, pres = 2) => dec.toFixed(pres).split('.')[1]

/**
 * Formatea un precio, dado un numero, retorna una cadena con el precio formateado con puntos
 * @param currency: La modena. por defecto devolvi $ pero lo ideal es devolver el simbolo de la moneda segun esta variable
 * @param amount: el monto
 * @param decimals: los decimales
 * @param showDecimals: si muestra decimal o no (esto para la vista de detalle donde no se muestra decimales)
 * @param decSep: el separador los decimales, por defect es ,
 * @param thouSep: el separador los centenas, por defect es .
 * @returns {string}
 */
const priceFormatter = (
  { currency, amount, decimals },
  showDecimals = false,
  decSep = ",",
  thouSep = "."
) => {

  amount = amount?.toString()
  const moreThanThreee = amount?.length > 3 ? amount?.length % 3 : 0
  const priceFormatted = (moreThanThreee ? amount?.substr(0, moreThanThreee) + thouSep : '') + amount?.substr(moreThanThreee).replace(/(\d{3})(?=\d)/g, "$1" + thouSep)
  const decFormatted = showDecimals && decimals > 0 ? `${decSep}${decimalSplitter(decimals)}` : ''

  return (`$ ${priceFormatted}${decFormatted}`)
}

/**
 * Formatea el texto de la descripcion, que viene con saltos de linea
 * @param text
 * @returns {JSX.Element[]}
 */
const formatText = text => text?.split("\n").map((line, i) => <Fragment key={line+i}>{line}<br/></Fragment>)

export {
  priceFormatter,
  decimalSplitter,
  formatText
}
