web server and web applications

make web server
how to integrate version control into node application
deploey node apps 

npm library express
to create web server or http API



-----static web server ---
const express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
app.listen(3000, () => {
	console.log('Server is up on port 3000');
});

---rendering templates with data---
3 - solution is templating engine
rendering html but do it in an dynamic way by injecting values inside of the template

templating engine

handlebar view engine for express
like ejs or pug

http://handlebarsjs.com/

http://npmjs.com/package/hbs


create file file with extension .hbs

app.get('/about', (req, res) =>{
	// res.send('<h1>Hello express</h1>');
	// res.send('About Page');
	res.render('about.hbs', {     //hbs file
		pageTitle: 'About Us',     //objec of key pageTitle
		currentYear: new Date().getFullYear()
	});
});

{{pageTitle}}   dynamic pageTitle use with {{}} 





---- advance handlebars----
partial
create folder partials in public/views
create file like footer.hbs
copy footer html and paste in footer.hbs 

add - hbs.registerPartials(__dirname + '/views/partials');
in home.hbs replace footer HTML with {{> footer}}

in command line
nodemon server.js -e js,hbs

---handlebars helper

function without argument
hbs.registerHelper('getCurrentYear', () =>{
	return new Date().getFullYear();
});
// calling - Copyright {{getCurrentYear}}

function with argument
hbs.registerHelper('screamIT', (text) =>{
	return text.toUpperCase();
});
//calling - {{screamIT welcomeMessage}}


------express middleware -----
app.use(); //register middeware takes function with 3 arguments request ,response, next - 
app.use((req, res, next) => {
	next();
});






------express middleware without next function stop everthing after it executing -----
app.use((req, res, next) => {
	res.render('maintenance.hbs');
});



-------generating ssh key (git bash)----
check private and pubic ssh file exist
ls -al ~/.ssh

generate ssh key private and pubic 
ssh-keygen -t rsa -b 4096 -C 'prashant.cs05@gmail.com'

/home/prashant/.ssh/id_rsa
/home/prashant/.ssh/id_rsa.pub

check again for  private and pubic ssh file exist
ls -al ~/.ssh

start process of ssh agent and print agent process id
eval "$(ssh-agent -s)"
Agent pid 6407

now tell ssh agent where ssh files
ssh-add ~/.ssh/id_rsa

Go to https://github.com/settings/keys
copy public key paste here


connect github.com (test)
ssh -T git@github.com


















