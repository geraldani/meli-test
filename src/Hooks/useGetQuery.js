import { useLocation } from 'react-router-dom'

/**
 * Hook para obtener un query param de la url
 * @param query: el string con el query para hacer la busqueda
 * @returns {string} el valor de la query
 */
const useGetQuery = (query = 'search') => {
  const useQuery = () => new URLSearchParams(useLocation().search);
  return useQuery().get(query);
}

export {
  useGetQuery
}
