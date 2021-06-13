import axios from 'axios'
import { useEffect, useState } from 'react'

const useGetData = (url, attribute, paramChange) => {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true)
        const res = await axios.get(url)
        setData(res.data[attribute])
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
