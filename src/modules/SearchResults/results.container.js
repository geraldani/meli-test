import React from 'react'
import SearchResultsView from './results.component'
import { useGetQuery, useGetData } from '../../Hooks'

const SearchResults = () => {
  const querySearch = useGetQuery()
  const { data, isLoading } = useGetData(`http://localhost:3001/api/items?q=${querySearch}`, 'items', querySearch)

  return (
    <SearchResultsView
      data={data}
      isLoading={isLoading}
    />
  )
}

export default SearchResults
