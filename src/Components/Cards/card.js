import React from 'react'
import './styles.scss'

/**
 * Simplemente tiene un div a modo de card, la idea era re-utizar componentes conceptualmente
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
const Card = ({children}) => {
  return (
    <div className="card">
      {children}
    </div>
  )
}

export default Card
