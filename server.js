const express = require('express');
const PORT = process.env.PORT || 3000;
const LOCALHOST = process.env.LOCALHOST || '0.0.0.0';
const path = require('path');

const app = express();



app.use(express.static(__dirname + '/public'));
// app.use('/images', express.static(__dirname + '/public/images'));


// pages
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/public/firstpage.html'));
});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/public/404.html'))
});


app.listen(PORT, LOCALHOST, () => {
	console.log(`Server running at ${PORT}`);
});
