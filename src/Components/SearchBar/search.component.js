import React from 'react'
import PropTypes from 'prop-types'
import MeliLogo from '../../assets/images/Logo_ML.png'
import searchIcon from '../../assets/images/ic_Search.png'
import './styles.scss'

const SearchForm = ({ searchCallback, onChangeCallback, searchInput }) => (
  <form onSubmit={searchCallback}>
    <input type="search"
           placeholder="Nunca dejes de buscar"
           className="nav-header-input"
           onChange={onChangeCallback}
           value={searchInput}
    />

    <button type="submit" className="nav-header-button">
      <img src={searchIcon} alt="search-icon" />
    </button>

  </form>
)

const SearchBarView = ({searchCallback, onChangeCallback, searchInput}) => (
  <header className="nav-header">
    <div className="nav-header-container">
      <img
        src={MeliLogo}
        alt="meli-logo"
        className='nav-header-mainLogo'
      />
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
