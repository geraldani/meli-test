import React, { useState } from 'react'
import SearchBarView from './search.component'
import { useHistory } from 'react-router-dom'
import { useGetQuery } from '../../Hooks/useGetQuery'

const SearchBar = () => {
  const querySearch = useGetQuery()
  const [searchInput, setSearchInput] = useState(querySearch || '')
  let history = useHistory()

  const onChangeCallback = text => setSearchInput(text.target.value)

  const searchCallback = async (ev) => {
    ev.preventDefault()
    history.push(`/items?search=${searchInput}`)
  }

  return (
    <SearchBarView
      onChangeCallback={onChangeCallback}
      searchCallback={searchCallback}
      searchInput={searchInput}
    />
  )
}

export default SearchBar
