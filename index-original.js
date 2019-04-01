const express = require('express'); //Using common JS modules
const app = express(); // generates a new application

// app : Express App to register this route handler with
// get : Watch for incoming requests with this method
// '/' : Watch for requests trying to access '/' [localhost:5000/]
// req : Object representing the incoming request
// res : Object representing the outgoing response
// res.send({ hi: 'there'}) : 
//      Immediately send some JSON back to who ever made this request
//
// whole block creates a new route handler
// arrow function is called each time the URL is hit from a request
app.get('/', (req, res) => {
    res.send({ bye: 'buddy' });
});

// Instructs Express to tell NODE to listen to on port 5000
//app.listen(5000);

// If there is an environment variable defined by Heroku use that, 
// else if not, use 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);