import React from 'react'
import PropTypes from 'prop-types'
import MeliLogo from '../../assets/images/Logo_ML.png'
import searchIcon from '../../assets/images/ic_Search.png'
import './search.styles.scss'
import Button from '../../Components/Button/button'
import { Link } from 'react-router-dom'

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
    }/>
  </form>
)

const SearchBarView = ({searchCallback, onChangeCallback, searchInput}) => (
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
