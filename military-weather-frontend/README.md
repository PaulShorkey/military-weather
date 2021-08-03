FORT BRAGG LAT LONG
35.1415° N, 79.0080° W

//////////////////////////////////////////////////////////////////////
Level 1, 49 degrees F and above,  short sleeved shirt and shorts
Level 2, 40-48 degrees F,         additionally long sleeve shirt
Level 3, 33-39 degrees F,         additionally jacket, hat, and gloves
Level 4, 32 degrees F and below,  additionally pants
//////////////////////////////////////////////////////////////////////

WORKING WITH THE API
https://openweathermap.org/api/one-call-api
The One Call API provides the following weather data for any geographical coordinates:

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


/////////////
old index file
/////////////
var fs = require('fs');
var fetch = require('node-fetch');

const _latitude = 35.14;
const _longitude = -79.00;

const apiKey = fs.readFileSync("apiKey.txt");

var uniformPT = function (url) {
    
    return fetch(url)
      //Grab the Data from the API
      .then(response => response.json())
      //find what the temperature will be tomorrow at 0630 local time
      .then(weatherData => {
        const currentHour = new Date().getHours();
        let tempAt0600 = 0;
        let tempAt0700 = 0;
        let message = '';

        if(currentHour < 7){
          tempAt0600 = weatherData.hourly[6 - currentHour].temp;
          tempAt0700 = weatherData.hourly[7 - currentHour].temp;
          // console.log((`tempAt0600: ${tempAt0600}`)) 
          // console.log((`tempAt0700: ${tempAt0700}`)) 
          message = 'Uniform for PT today is:';

        } else {
          tempAt0600 = weatherData.hourly[24 - currentHour + 6].temp;
          tempAt0700 = weatherData.hourly[24 - currentHour + 7].temp;
          // console.log((`tempAt0600: ${tempAt0600}`)) 
          // console.log((`tempAt0700: ${tempAt0700}`)) 
          message = 'Uniform for PT tomomrrow is:';
        }
        // for (hour of weatherData.hourly){
        //   let time = new Date(hour.dt * 1000);
        //   console.log(`Hours: ${time.getHours()}, TEMP: ${hour.temp}`); 
        // }       
        return [message, (tempAt0600 + tempAt0700) / 2];

    })
    //determine the pt uniform
    .then(data => {
      if (data[1] > 48) {
        console.log(`${data[0]} short sleeved shirt and shorts`)
        return `${data[0]} short sleeved shirt and shorts`;

      } else if (data[1] > 39 && data[1] < 49) {
        console.log(`${data[0]} long sleeved shirt (short sleeve underneath) and shorts`)
        return `${data[0]} long sleeved shirt (short sleeve underneath) and shorts`;

      } else if (data[1] > 32 && data[1] < 40) {
        console.log(`${data[0]} long sleeved shirt (short sleeve underneath) and shorts with jacket, hat, and gloves`)
        return `${data[0]} long sleeved shirt (short sleeve underneath) and shorts with jacket, hat, and gloves`;

      } else {
        console.log(`${data[0]} long sleeved shirt (short sleeve underneath) and pants (shorts underneath) with jacket, hat, and gloves`)
        return `${data[0]} long sleeved shirt (short sleeve underneath) and pants (shorts underneath) with jacket, hat, and gloves`;
      }
    }); 
}
//unix time: number of seconds since jan 1 1970 at midnight utc
//Working with unix time:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date


uniformPT(`https://api.openweathermap.org/data/2.5/onecall?lat=${_latitude}&lon=${_longitude}&units=imperial&exclude=current,minutely,daily,alerts&appid=${apiKey}`);





///////////
old dependencies
///////////
{
  "name": "uniformpt",
  "version": "1.0.0",
  "description": "Tells you what the pt uniform will be tomorrow",
  "main": "index.js",
  "scripts": {
    "test": "node index.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/PaulShorkey/uniformPT.git"
  },
  "author": "Paul Shorkey-Chacon and Michael Pingleton",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/PaulShorkey/uniformPT/issues"
  },
  "homepage": "https://github.com/PaulShorkey/uniformPT#readme",
  "dependencies": {
    "fetch": "^1.1.0",
    "fs": "0.0.1-security",
    "jest": "^27.0.6",
    "node-fetch": "^2.6.1"
  }
}