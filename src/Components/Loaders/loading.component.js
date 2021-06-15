import React from 'react'
import BarSpinner from './barLoader'
import './styles.scss'

/**
 * Un componente simple que muetra la palabra cargando cuando esta cargando alguna parte de la app
 * @returns {JSX.Element}
 * @constructor
 */
const Loading = () => {
  return (
    <div className="loader-container">
      <div className="loader-content">
        <span className="loader-message">Cargando...</span>
        <BarSpinner />
      </div>
    </div>
  )
}

export default Loading
