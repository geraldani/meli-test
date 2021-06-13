import React from 'react'
import PropTypes from 'prop-types'
import './breadcrumb.styles.scss'

const Breadcrumb = ({ crumbs }) => (
  <div className="breadcrumb-container">
    <ul className="breadcrumb-list">
      {
        crumbs.map(crumb => <li>{crumb}</li>)
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
