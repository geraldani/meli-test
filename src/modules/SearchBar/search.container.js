import React, { useState } from 'react'
import SearchBarView from './search.component'
import { useHistory } from "react-router-dom";


const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('')
  let history = useHistory();


  const onChangeCallback = text => setSearchInput(text.target.value);

  const searchCallback = async (ev) => {
    ev.preventDefault();
    history.push(`/items`)
    // history.push(`/items?search=${searchInput}`)
    /*const responde = await axios.get(`http://localhost:3001/api/items?q=${searchInput}`)
    console.log('la respuesta ', responde.data)
    console.log('tengo que buscar ', searchInput)*/
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
