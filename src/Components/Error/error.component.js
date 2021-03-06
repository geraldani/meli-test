import React from 'react'
import { useHistory } from 'react-router-dom'
import Button from '../Button/button'
import './styles.scss'

/**
 * Muestra un error generico, no se ahondo en diferenciar tipos de errores, simplemente muestra un texto generico si algo fallo en el back
 * @returns {JSX.Element}
 * @constructor
 */
const Error = ({ type }) => {
  let history = useHistory()

  const goToInit = () => history.push('/')

  return (
    <div className="error-container">
      {
        type === 'wrongPath'
          ? <p>Lo siento, pero la ruta no existe</p>
          : <p>Ocurrio un error al procesar la solicitud.</p>
      }
      <Button callback={goToInit} title="Volver" styleType="buy" />
    </div>
  )
}

export default Error
