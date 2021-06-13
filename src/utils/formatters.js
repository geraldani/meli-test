const decimalSplitter = (dec, pres = 2) => dec.toFixed(pres).split('.')[1]

const priceFormatter = (
  { currency, amount, decimals },
  showDecimals = false,
  decSep = ",",
  thouSep = "."
) => {

  amount = amount.toString()
  const j = (amount.length > 3) ? amount.length % 3 : 0;
  const pirceFormatted = (j ? amount.substr(0, j) + thouSep : '') + amount.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thouSep)
  const decFormated = showDecimals && decimals > 0 ? `${decSep}${decimalSplitter(decimals)}` : ''

  return (`$ ${pirceFormatted}${decFormated}`)
}

export {
  priceFormatter,
  decimalSplitter
}
