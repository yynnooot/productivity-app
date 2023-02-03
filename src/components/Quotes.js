import useFetch from '../hooks/useFetch'

const Quotes = () => {

	const quoteToken = process.env.REACT_APP_QUOTES_API_TOKEN;
	const quoteKey = process.env.REACT_APP_QUOTES_API_KEY;
	const quoteHost = process.env.REACT_APP_QUOTES_API_HOST;
	const quoteUrl = process.env.REACT_APP_QUOTES_API_URL;

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
			{data && <div>{data.text}</div>}
			{isLoading && <div>isLoading: {isLoading.toString()}</div>}
			{error && <div>error: {error}</div>}
		</div>

	)
}

export default Quotes;