import React, { useState, useEffect } from 'react';
import SearchResultsView from './results.component';
import { useGetQuery } from '../../Hooks/useGetQuery';
import axios from 'axios';

const SearchResults = () => {
  const [isLoading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const querySearch = useGetQuery()

  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        const response = await axios.get(`http://localhost:3001/api/items?q=${querySearch}`)
        setList(response.data.items)
      } catch (e) {
        console.error('Ocurrio un error al traer la data ', e)
      } finally {
        setLoading(false)
      }
    })()
  }, [querySearch])

  return <SearchResultsView data={list} isLoading={isLoading} />
}

export default SearchResults
