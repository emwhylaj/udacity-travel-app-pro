// const dotenv = require('dotenv');
// dotenv.config();
const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const makeRequest = require('./makeRequest');


// Start up an instance of app
const app = express();

// Cors for cross origin allowance
app.use(cors());

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

// Initialize the main project folder
app.use(express.static('dist'));

app.get('/', function (req, res) {
  res.sendFile(path.resolve('dist/index.html'))
})

// Setup  the Server
app.listen(9000, () => {
  console.log('Server Running on port 9000..........');
});


app.post('/getCoordinates', makeRequest.getCoordinates);
app.post('/getWeather', makeRequest.getWeather)
app.post('/getImage', makeRequest.getImage)
app.post('/getCountryDetail', makeRequest.getCountryDetail)