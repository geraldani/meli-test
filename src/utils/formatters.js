function priceFormatter({ currency, amount, decimals }, decimalCount = 0, decSep = ",", thouSep = ".") {
  amount = amount.toString()
  let j = (amount.length > 3) ? amount.length % 3 : 0;
  const pirceFormatted = (j ? amount.substr(0, j) + thouSep : '') + amount.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thouSep)
  const decFormated = decimals > 0 ? `${decSep}${decimals}` : ''

  return (`$ ${pirceFormatted}${decFormated}`)
}

export {
  priceFormatter
}
