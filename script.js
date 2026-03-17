const url = 'https://api.weatherstack.com/current?access_key={PASTE_YOUR_API_KEY_HERE}&query=New Delhi';
const options = {
	method: 'GET'
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

