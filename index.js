const express = require('express'); //Using common JS modules
// Make sure to execute the passport.js code, which doesn't return anything
require('./services/passport');

const app = express(); // generates a new application

// return function and immediately invoke
require('./routes/authRoutes')(app);

// new GoogleStrategy() : creates new instance
// passport.use() : generic register, use this strategy

// Fixing redirect URI wildcard issue
// Since the main goal of using http://localhost:5000/* was to show the 
// redirect error a few lectures later, we can do one of two things:
// 1) leave the authorized URI redirect blank, since we'll fix later
// 2) Enter http://localhost:5000/auth/google/callback now


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


// Instructs Express to tell NODE to listen to on port 5000
//app.listen(5000);

// If there is an environment variable defined by Heroku use that, 
// else if not, use 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);