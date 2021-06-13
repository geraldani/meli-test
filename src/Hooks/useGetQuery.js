import { useLocation } from 'react-router-dom'

const useGetQuery = (query = 'search') => {
  const useQuery = () => new URLSearchParams(useLocation().search);
  return useQuery().get(query);
}

export {
  useGetQuery
}
