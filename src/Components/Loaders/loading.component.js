import React from 'react'
import BarSpinner from './barLoader'
import './styles.scss';

const Loading = () => {
  return (
    <div className="loader-container">
      <span className="loader-message">Cargando...</span>
      <BarSpinner />
    </div>
  )
}

export default Loading;
