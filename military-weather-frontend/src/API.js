function callAPI(setOneAPIData){

  let lat = '157.8'
  let lon = '21.10'
  //let exclustions
  let APIkey = 'ca53804ef39c60edb29c150ec2515574'
  //exclude - exclude parts of the call, time wise.
  //exclude options: current, minutely, hourly, daily, alerts
  let units = 'imperial'
  
//`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${APIkey}`
  fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=${APIkey}`)
  .then(response => response.json())
  .then(data => setOneAPIData(data));
  //App.js:25 GET https://api.openweathermap.org/data/2.5/onecall?lat=157.8&lon=21.10&appid=ca53804ef39c60edb29c150ec2515574 
}

export default callAPI