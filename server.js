const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.send("Hi there!");
})

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
})