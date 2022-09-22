const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c83e700ad2mshd38d20e920cb7e1p16b782jsn32c909a6ef5d',
		'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
	}
};

fetch('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=69.47&lon=71.43&lang=es', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));