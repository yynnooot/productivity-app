import useFetch from '../hooks/useFetch'

const MotivationalQuotes = () => {

	const quoteKey = process.env.REACT_APP_MOTIVATION_API_KEY;
	const quoteHost = process.env.REACT_APP_MOTIVATION_API_HOST;
	const quoteUrl = process.env.REACT_APP_MOTIVATION_API_URL;

	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': quoteKey,
			'X-RapidAPI-Host': quoteHost
		}
	}

	const { data, isLoading, error } = useFetch(quoteUrl, options)

	return (
		<div>
			{data && <div>{data[0].quote}</div>}
			{isLoading && <div>isLoading: {isLoading.toString()}</div>}
			{error && <div>error: {error}</div>}
		</div>

	)
}

export default MotivationalQuotes;