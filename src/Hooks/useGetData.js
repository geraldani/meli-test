import axios from 'axios'
import { useEffect, useState } from 'react'

/**
 * Hook para traer data de alguna api
 * @param url: el endpoint para traer la data
 * @param paramChange: la variable que usara el hook para volverse a llamar
 * @returns {{isLoading: boolean, isError: boolean, data: array}}
 */
const useGetData = (url, paramChange) => {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true)
        const res = await axios.get(url)
        setData(res.data)
      } catch (e) {
        console.error('Ocurrio un error al procesar la solicitud ', e)
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [paramChange])

  return { data, isLoading, isError }
}

export { useGetData }
