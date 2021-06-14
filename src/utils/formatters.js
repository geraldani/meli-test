import React, { Fragment } from 'react'

const decimalSplitter = (dec, pres = 2) => dec.toFixed(pres).split('.')[1]

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

const formatText = text => text?.split("\n").map((line, i) => <Fragment key={line+i}>{line}<br/></Fragment>)

export {
  priceFormatter,
  decimalSplitter,
  formatText
}
