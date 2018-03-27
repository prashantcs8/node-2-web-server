const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;

var app = express();
hbs.registerPartials(__dirname + '/views/partials')

hbs.registerHelper('getCurrentYear', () =>{
	return new Date().getFullYear();
});

hbs.registerHelper('screamIT', (text) =>{
	return text.toUpperCase();
});

app.set('view engine', 'hbs');  //key value pair


app.use((req, res, next) => {
	var now = new Date().toString();
	var log = `${now}: ${req.method} ${req.url}`;
	console.log(log);
	fs.appendFile('server.log', log +'\n', (err) =>{
		if(err){
			console.log('Unable to append server.log');
		}
	});
	next();
});

/*remove comments if site under maintenance*/

/*app.use((req, res, next) => {
	res.render('maintenance.hbs');
});*/

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) =>{
	res.render('home.hbs', {
		pageTitle: 'Home Page',
		welcomeMessage: 'Some Welcome Message',
		currentYear: new Date().getFullYear()
	})
	// res.send('<h1>Hello express</h1>');
	/*res.send({
		name: 'prashant',
		likes: [
		'biking',
		'cities'
		]
	});*/
});

app.get('/about', (req, res) =>{
	// res.send('<h1>Hello express</h1>');
	// res.send('About Page');
	res.render('about.hbs', {
		pageTitle: 'About Us',
		currentYear: new Date().getFullYear()
	});
});

// bad - send back json with errorMessage

app.get('/bad', (req, res) =>{
	res.send({
		errorMessage: 'Unable to handle request'
	});
});


app.listen(port, () => {
	console.log(`Server is up on port ${port}`);
});