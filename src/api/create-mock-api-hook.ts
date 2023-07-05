import { useState, useEffect } from 'react'

type ReturnType<T> = {
  isLoading: boolean
  data: T[] | null
  error: string | null
}

export function createMockApiHook<T extends any>(
  staticData: T[],
  failureChance = 0.2
) {
  return (): ReturnType<T> => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState<T[] | null>(null)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
      const delay = setTimeout(() => {
        const shouldFail = Math.random() < failureChance
        if (shouldFail) {
          setIsLoading(false)
          setError('Failed to fetch data. Please try again later.')
        } else {
          setIsLoading(false)
          setData(staticData)
          setError(null)
        }
      }, Math.random() * 2000 + 300)

      return () => clearTimeout(delay)
    }, [])

    return { isLoading, data, error }
  }
}
