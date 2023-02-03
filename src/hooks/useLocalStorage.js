import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
	const [data, setData] = useState(() => {
		const storedData = localStorage.getItem(key)
		return storedData ? JSON.parse(storedData) : initialValue
	})

	useEffect(() => {
		console.log(`USELOCALSTORAGE ${data}`)
		localStorage.setItem(key, JSON.stringify(data))
	}, [data])

	return [data, setData]
}
export default useLocalStorage;