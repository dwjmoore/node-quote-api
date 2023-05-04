const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.get('/api/quotes/random', (req, res) => {
	const quote = getRandomElement(quotes);
	res.send({ quote: quote });
});

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
})

/*

Your API should have a GET /api/quotes/random route. This route should send back a random quote from the quotes data. The response body should have the following shape:

{
	quote: { quote object }
}

*/