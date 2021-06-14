import React from 'react'
import SearchResultsView from './results.component'
import { useGetQuery, useGetData } from '../../Hooks'
import { baseUrl } from '../../utils/URL'

const SearchResults = () => {
  const querySearch = useGetQuery()
  const { data, isLoading, isError } = useGetData(`${baseUrl}/api/items?q=${querySearch}`, querySearch)

  return (
    <SearchResultsView
      data={data?.items}
      isLoading={isLoading}
      categories={data?.categories}
      isError={isError}
    />
  )
}

export default SearchResults
