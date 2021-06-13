import React from 'react'
import './basSpinner.styles.scss';

const BarSpinner = () => (
  <div  className="horizontalCircles">
    {
      [...Array(8)].map((e, i) => <div key={i} />)
    }
  </div>
)

export default BarSpinner
