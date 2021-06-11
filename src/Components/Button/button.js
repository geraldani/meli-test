import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

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
