import React from 'react'
import PropTypes from 'prop-types'
import './breadcrumb.styles.scss'

/**
 * Componente que renderiza el breadcrumb de la pagina
 * @param crumbs: array con las palabras para armarlo
 * @returns {JSX.Element}
 * @constructor
 */
const Breadcrumb = ({ crumbs }) => (
  <div className="breadcrumb-container">
    <ul className="breadcrumb-list">
      {
        crumbs.map(crumb => <li key={crumb}>{crumb}</li>)
      }
    </ul>
  </div>
)

Breadcrumb.propTypes = {
  crumbs: PropTypes.array
}

Breadcrumb.defaultProps = {
  crumbs: []
}

export default Breadcrumb
