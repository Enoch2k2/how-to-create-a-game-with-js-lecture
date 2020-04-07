// express library
const express = require("express");

// app controller
const app = express();

// set what location our project will be at
app.use(express.static(__dirname + "/public/"));

// using our app controller to setup root route to send client the index.html document
app.get('/', (req, resp) => resp.sendFile('index.html'));

// serve application on port 3000 while loging which port we are running on
app.listen(3000, () => console.log('running on port: 3000'))