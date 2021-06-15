import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Button } from '../../Components'
import { searchIcon, MeliLogo } from '../../utils'
import './search.styles.scss'

// Esta parte es solo el formulario del header
const SearchForm = ({ searchCallback, onChangeCallback, searchInput }) => (
  <form onSubmit={searchCallback}>
    <input type="search"
           placeholder="Nunca dejes de buscar"
           className="nav-header-input"
           onChange={onChangeCallback}
           value={searchInput}
    />

    <Button type="submit" styleType="search" title={
      <img src={searchIcon} alt="search-icon" />
    } />
  </form>
)

/**
 * Renderiza la barra de busqueda
 * @param searchCallback: el callback que se llama al precionar enter o el boton de buscar
 * @param onChangeCallback: el callback cuando se modifica el input de busqueda
 * @param searchInput: el valor del input
 * @returns {JSX.Element}
 * @constructor
 */
const SearchBarView = ({ searchCallback, onChangeCallback, searchInput }) => (
  <header className="nav-header">
    <div className="nav-header-container">
      <Link to="/">
        <img
          src={MeliLogo}
          alt="meli-logo"
          className='nav-header-mainLogo'
        />
      </Link>
      <SearchForm
        searchCallback={searchCallback}
        onChangeCallback={onChangeCallback}
        searchInput={searchInput}
      />
    </div>
  </header>
)

SearchBarView.propTypes = {
  searchCallback: PropTypes.func,
  onChangeCallback: PropTypes.func,
  searchInput: PropTypes.string,
}

SearchBarView.defaultProps = {
  searchCallback: () => false,
  onChangeCallback: () => false,
  searchInput: '',

}

export default SearchBarView
