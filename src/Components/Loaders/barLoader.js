import React from 'react'
import './basSpinner.styles.scss';

/**
 * Un Spinner que da la sensacion de estar cargando algo
 * @returns {JSX.Element}
 * @constructor
 */
const BarSpinner = () => (
  <div  className="horizontalCircles">
    {
      [...Array(8)].map((e, i) => <div key={i} />)
    }
  </div>
)

export default BarSpinner
