function oneCallAPI(searchObject, setOneCallAPIData) {

  //searchObject = {lat: , long: , units: }
  let lat = searchObject.lat
  let lon = searchObject.lon
  //let exclustions
  let APIkey = 'ca53804ef39c60edb29c150ec2515574'
  //exclude - exclude parts of the call, time wise.
  //exclude options: current, minutely, hourly, daily, alerts
  let units = searchObject.units

  fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${APIkey}&units=${units}`)
    .then(response => response.json())
    .then(data => setOneCallAPIData(data));
}

export default oneCallAPI