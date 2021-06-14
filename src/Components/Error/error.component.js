import React from 'react'
import { useHistory } from 'react-router-dom'
import Button from '../Button/button'
import './styles.scss'

const Error = () => {
  let history = useHistory()

  const goToInit = () => history.push('/')

  return (
    <div className="error-container">
      <p>Ocurrio un error al procesar la solicitud.</p>
      <p>Intente mas tarde</p>
      <Button callback={goToInit} title="Volver" styleType="buy" />
    </div>
  )
}

export default Error
