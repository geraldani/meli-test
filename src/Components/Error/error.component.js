import React from 'react'
import { useHistory } from 'react-router-dom'
import './styles.scss'
import Button from '../Button/button'

const Error = () => {
  let history = useHistory()

  return (
    <div className="error-container">
      <p>Ocurrio un error al procesar la solicitud.</p>
      <p>Intente mas tarde</p>
      <Button callback={history.goBack} title="Volver" styleType="buy" />
    </div>
  )
}

export default Error
