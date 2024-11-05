// Requiring express to make the code "runnable"
const express = require('express');
const app = express();

// Requiring body-parser to be able to parse incoming requests and data in bodies
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// The smile that the teacher asked for lmao
app.get('/', function(req, res) {
    res.send('Hello world :-)');
  });

// Determining the port
const port = 3005;

// A console log to tell us if the app has started
app.listen(port, () => {
    console.log('Server started')
    console.log(`This is the link to access this app = \nhttp://localhost:${port}/`);
});

// A basic sum function
function sum(a, b) {
    return a + b;
}

// A basic sub function
function sub(a, b) {
    return a - b;
}

// A basic multiply function
function mult(a, b) {
    return a * b;
}

// A basic division function
function divs(a, b) {
    return a / b;
}

// A post function to acquire the results from the index page and send them to the app
app.post('/sum', function (req, res) {
    const body = req.body;
    const result = sum(Number(body.a), Number(body.b)); 
    res.send(`The result of the sum between ${body.a} and ${body.b} is ${result}`);
});

app.post('/sub', function (req, res) {
    const body = req.body;
    const result = sub(Number(body.a), Number(body.b)); 
    res.send(`The result of the subtraction between ${body.a} and ${body.b} is ${result}`);
});

app.post('/mult', function (req, res) {
    const body = req.body;
    const result = mult(Number(body.a), Number(body.b)); 
    res.send(`The result of the multiplication between ${body.a} and ${body.b} is ${result}`);
});

app.post('/divs', function (req, res) {
    const body = req.body;
    const result = divs(Number(body.a), Number(body.b)); 
    res.send(`The result of the division between ${body.a} and ${body.b} is ${result}`);
});

