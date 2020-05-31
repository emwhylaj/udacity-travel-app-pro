# Travel App Project

## Overview

This project is a simple web app that includes a form where you enter the location you are traveling to and the date you are leaving. If the trip is within a week, you will get the current weather forecast.

## Run the application

1. **Pre-requisite** :
   Install [node.js](https://nodejs.org/)

2. unzip the projects folder.

3. install the dependencies

```
npm install
```

4. Run build for the project using the cmd as follow:

```
npm run build-prod
```

5. Run the server.

```
npm start
```

6. View the URL **http://localhost:4000/** in browser.
7. Run the testing.

```
npm run test.
```

## API USED

1. weatherbit [https://www.weatherbit.io/api]: This is used to get weather details using the longitude and latitude gotten from Geonames API.

2. Geonames [https://www.geonames.org/]: This was used to get the longitude, latitude, country code and country name.

 3.pixabay [https://pixabay.com/] : This is used to get an image of the destination city. And in a case where the city is an obscure      place, an image of the country is gotten instead.
 
 4. [REST Countries](https://restcountries.eu/) - This is used to get information about the country.
 
 
   
   ## PERFORMANCE
- This app has a form that takes the desired trip location, departure date and return date of a user.

- This app then displays the weather and an image of the location using the information obtained from external APIs.

- The app also calculates the length of the user's trip and days till departure.

- The app also pulls some extra information about the user's destination's country e.g population, currency and primary language.
