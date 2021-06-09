import React, { useState } from 'react'
import SearchBarView from './search.component'

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('')

  const searchCallback = (ev) => {
    console.log('tengo que buscar ', searchInput)
    ev.preventDefault()
  }
  const onChangeCallback = text => setSearchInput(text.target.value)

  return (
    <SearchBarView
      onChangeCallback={onChangeCallback}
      searchCallback={searchCallback}
      searchInput={searchInput}
    />
  )
}

export default SearchBar
