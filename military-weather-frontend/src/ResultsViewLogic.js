import UseClock from 'use-clock';

function getUniformAtInputTime(hourly48HourForcast, searchObject) {
  let {time, day, base, uniform} = searchObject
  let temperature = tempAtTime(hourly48HourForcast, time, day, base)
  if (uniform === 'Army PT') {
    return getPtUniform(temperature, base)
  } else if (uniform === 'Army OCP') {
    return getOcpUniform(temperature, base)
  }
}

/**
 * Will return a temperature at a given time
 * @param {*} hourlyFo48Hourrcast
 * @param {*} inputTime
 * @param {*} day
 * @param {*} base
 */
function tempAtTime(hourly48HourForcast, inputTime, day, base) {
  let intTime = parseInt(inputTime);
  let time1 = intTime;
  let time2 = intTime;

  if (inputTime.substring(2) === '30') {
    time1 -= 30;
    time2 += 70;
  }

  time1 /= 100;
  time2 /= 100;

  const {
    onTimezone
  } = UseClock("HH");
  const baseTime = onTimezone("America/New_York")

  let tempAtTime1;
  let tempAtTime2;
  if (day === 'today') {
    tempAtTime1 = hourly48HourForcast[time1 - baseTime].temp;
    tempAtTime2 = hourly48HourForcast[time2 - baseTime].temp;
  } else {
    tempAtTime1 = hourly48HourForcast[24 - baseTime + time1].temp;
    tempAtTime2 = hourly48HourForcast[24 - baseTime + time2].temp;
  }

  return (tempAtTime1 + tempAtTime2) / 2

}

function getPtUniform(temperature, base) {
  if (temperature > 48) {
    return ['short sleeved shirt', 'shorts'];

  } else if (temperature > 39) {
    return ['long sleeved shirt', 'short sleeve underneath', 'shorts'];

  } else if (temperature > 32) {
    return ['long sleeved shirt', 'short sleeve underneath', 'shorts', 'jacket', 'hat', 'gloves'];

  } else {
    return ['long sleeved shirt', 'short sleeve underneath', 'pants', 'shorts underneath', 'jacket', 'hat', 'gloves'];
  }
}

function getOcpUniform(temperature, base) {
  
  if (temperature > 60){
     return['OCPs']
  } else if (temperature > 45) {
    return ['Mid-Weight Cold Weather Shirt', 'OCP Pant', 'Soft Shell Trousers'];

  } else if (temperature > 30) {
    return ['Mid-Weight Cold Weather Shirt', 'Soft Shell Jacket', 'Extreme Cold Weather Parka'];

  } else if (temperature > 0) {
    return ['Mid-Weight Cold Weather Drawers', 'Soft Shell Jacket', 'Extreme Cold Weather Parka', 'Extreme Cold Weather Trousers'];

  } else {
    return ['Mid Weight Cold Weather Shirt', 'Mid-Weight Cold Weather Drawers', 'Soft Shell Jacket', 'Extreme Cold Weather Parka', 'Extreme Cold Weather Trousers'];
  }
}

function getHeatIndexAndFlag(hourly48HourForcast, searchObject) {
  let {time, day, base, uniform, units} = searchObject
  let tempAndFlag = [];
  let heatIndex = feelsLikeTempAtTime(hourly48HourForcast, time, day, base)
  let currentFlag = getFlagCondition(heatIndex, units);
  
  tempAndFlag.push(heatIndex);

  if (currentFlag === 'black'){
    tempAndFlag.push('Heat Catagory 5/ Black Flag')
    tempAndFlag.push(['Easy Work/Rest(min): 50/10',
                      'Water Intake(qt/hr): 1',
                      'Moderate Work/Rest(min): 20/40',
                      'Water Intake(qt/hr): 1',
                      'Hard Work/Rest(min): 10/50',
                      'Water Intake(qt/hr): 1'
                    ])
  } else if (currentFlag === 'red'){
    tempAndFlag.push('Heat Catagory 4/ Red Flag')
    tempAndFlag.push(['Easy Work/Rest(min): No Limit',
                      'Water Intake(qt/hr): 3/4',
                      'Moderate Work/Rest(min): 30/30',
                      'Water Intake(qt/hr): 3/4',
                      'Hard Work/Rest(min): 20/40',
                      'Water Intake(qt/hr): 1'
                    ])
  } else if (currentFlag === 'yellow'){
    tempAndFlag.push('Heat Catagory 3/ Yellow Flag')
    tempAndFlag.push(['Easy Work/Rest(min): No Limit',
                      'Water Intake(qt/hr): 3/4',
                      'Moderate Work/Rest(min): 30/30',
                      'Water Intake(qt/hr): 3/4',
                      'Hard Work/Rest(min): 20/40',
                      'Water Intake(qt/hr): 1'
                    ])
  } else if (currentFlag === 'green'){
    tempAndFlag.push('Heat Catagory 2/ Green Flag')
    tempAndFlag.push(['Easy Work/Rest(min): No Limit',
                      'Water Intake(qt/hr): 1/2',
                      'Moderate Work/Rest(min): 50/10',
                      'Water Intake(qt/hr): 3/4',
                      'Hard Work/Rest(min): 30/30',
                      'Water Intake(qt/hr): 1'
                    ])
  } else if (currentFlag === 'white'){
    tempAndFlag.push('Heat Catagory 1/ White Flag')
    tempAndFlag.push(['Easy Work/Rest(min): No Limit',
                      'Water Intake(qt/hr): 1/2',
                      'Moderate Work/Rest(min): No Limit',
                      'Water Intake(qt/hr): 3/4',
                      'Hard Work/Rest(min): 40/20',
                      'Water Intake(qt/hr): 3/4'
                    ])
  }
  

  
  return tempAndFlag;
}

function getFlagCondition(heatIndex, units){
  let newIndex = heatIndex;
  if(units === 'metric'){
    newIndex = (heatIndex * (9/5)) + 32;
  }

  if (newIndex >= 90){
    return 'black';
  }
  else if(newIndex >= 88){
    return 'red';
  }
  else if(newIndex >= 85){
    return 'yellow';
  }
  else if(newIndex >= 82){
    return 'green';
  }

  return 'white';
}

/**
 * Will return a 'feel like' temperature at a given time
 * @param {*} hourlyFo48Hourrcast
 * @param {*} inputTime
 * @param {*} day
 * @param {*} base
 */
 function feelsLikeTempAtTime(hourly48HourForcast, inputTime, day, base) {
  let intTime = parseInt(inputTime);
  let time1 = intTime;
  let time2 = intTime;

  if (inputTime.substring(2) === '30') {
    time1 -= 30;
    time2 += 70;
  }

  time1 /= 100;
  time2 /= 100;

  const {
    onTimezone
  } = UseClock("HH");
  const baseTime = onTimezone("America/New_York")

  let tempAtTime1;
  let tempAtTime2;
  if (day === 'today') {
    tempAtTime1 = hourly48HourForcast[time1 - baseTime].feels_like;
    tempAtTime2 = hourly48HourForcast[time2 - baseTime].feels_like;
  } else {
    tempAtTime1 = hourly48HourForcast[24 - baseTime + time1].feels_like;
    tempAtTime2 = hourly48HourForcast[24 - baseTime + time2].feels_like;
  }

  return (tempAtTime1 + tempAtTime2) / 2

}

function getWeatherCondition(hourly48HourForcast, searchObject) {
  let {time, day, base, uniform} = searchObject
  let temperature = tempAtTime(hourly48HourForcast, time, day, base)
  let weather = weatherAtTime(hourly48HourForcast, time, day, base)

  return weather;
}

/**
 * Will return a 'feel like' temperature at a given time
 * @param {*} hourlyFo48Hourrcast
 * @param {*} inputTime
 * @param {*} day
 * @param {*} base
 */
 function weatherAtTime(hourly48HourForcast, inputTime, day, base) {
  let intTime = parseInt(inputTime);
  let time1 = intTime;

  if (inputTime.substring(2) === '30') {
    time1 -= 30;
  }

  time1 /= 100;

  const {
    onTimezone
  } = UseClock("HH");
  const baseTime = onTimezone("America/New_York")

  let weatherAtTime1;
  if (day === 'today') {
    weatherAtTime1 = hourly48HourForcast[time1 - baseTime].weather;
  } else {
    weatherAtTime1 = hourly48HourForcast[24 - baseTime + time1].weather;
  }
  return weatherAtTime1[0];
}

function getAirQuality(airQualAPIData, searchObject){
  let aqi = airQualAPIData.list[0].main.aqi;
//Air Quality Index. Possible values: 1, 2, 3, 4, 5. Where 1 = Good, 2 = Fair, 3 = Moderate, 4 = Poor, 5 = Very Poor.
  if (aqi === 1){
       return('Good')
  } else if (aqi === 2){
       return('Fair')
  } else if (aqi === 3){
       return('Moderate, Minimize Time Outside')
  } else if (aqi === 4){
       return('Poor, Work Indoors')
  } else if (aqi === 5){
       return('Very Poor, Work Indoors')
  } 
} //YEAAAAAA BOIIIIIIIIIIIIIIIIIIIII
//YEAAAAAA BOIIIIIIIIIIIIIIIIIIIII
//YEAAAAAA BOIIIIIIIIIIIIIIIIIIIII
//YEAAAAAA BOIIIIIIIIIIIIIIIIIIIII
//YEAAAAAA BOIIIIIIIIIIIIIIIIIIIII
//YEAAAAAA BOIIIIIIIIIIIIIIIIIIIII
//YEAAAAAA BOIIIIIIIIIIIIIIIIIIIII
//YEAAAAAA BOIIIIIIIIIIIIIIIIIIIII
//YEAAAAAA BOIIIIIIIIIIIIIIIIIIIII

export {getUniformAtInputTime, getHeatIndexAndFlag, getWeatherCondition, getAirQuality}; 

// //////////////////////////////////////////////////////////////////////
// Level 1, 49 degrees F and above,  short sleeved shirt and shorts
// Level 2, 40-48 degrees F,         additionally long sleeve shirt
// Level 3, 33-39 degrees F,         additionally jacket, hat, and gloves
// Level 4, 32 degrees F and below,  additionally pants
// //////////////////////////////////////////////////////////////////////