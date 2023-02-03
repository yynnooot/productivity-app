import { useState, useEffect } from 'react'

const useFetch = (url, options) => {
	const [data, setData] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				console.log(`calling ${url}`)
				const response = await fetch(url, options)
				const data = await response.json()
				console.log(`data: ${JSON.stringify(data)}`)
				setData(data)
			} catch (error) {
				setError(error)
			}
			setIsLoading(false)
		}

		fetchData()
	}, [])

	return { data, isLoading, error }
}

export default useFetch;