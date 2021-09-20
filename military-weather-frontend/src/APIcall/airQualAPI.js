//http://api.openweathermap.org/data/2.5/air_pollution?lat={lat}&lon={lon}&appid={API key}

function airQualAPI(searchObject, setAirQualAPIData) {

    //searchObject = {lat: , long: , units: }
    let lat = searchObject.lat
    let lon = searchObject.lon
    //let exclustions
    let APIkey = 'ca53804ef39c60edb29c150ec2515574'
    //exclude - exclude parts of the call, time wise.
    //exclude options: current, minutely, hourly, daily, alerts
  
    fetch(`https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${APIkey}`)
      .then(response => response.json())
      .then(data => setAirQualAPIData(data));
  }
  
  export default airQualAPI;