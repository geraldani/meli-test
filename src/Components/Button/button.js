import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

/**
 * Componente re-utilizable de un boton comun
 * @param callback: func -> la funcion a ser llamada en el evento onClick del boton
 * @param styleType: string -> el nombre con el estilo a ser aplicado al boton
 * @param title: una cadena o un elemento -> lo que mostrara el boton en si
 * @param rest: obj -> el resto de los atributos nativos del boton
 * @returns {JSX.Element}
 * @constructor
 */
const Button = ({callback, styleType, title, ...rest}) => (
  <button
    onClick={callback}
    className={`button ${styleType}`}
    {...rest}
  >
    {title}
  </button>

)


Button.propTypes = {
  callback: PropTypes.func,
  disabled: PropTypes.bool,
  styleType: PropTypes.oneOf(['buy', 'search', '']),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
}

Button.defaultProps = {
  callback: () => false,
  disabled: false,
  styleType: ''
}


export default Button
