import UseClock from 'use-clock';

function getUniformAtInputTime(hourly48HourForcast, inputTime, day, base, uniform) {
  let temperature = tempAtTime(hourly48HourForcast, inputTime, day, base)
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
  if (temperature > 45) {
    return ['Mid-Weight Cold Weather Shirt', 'OCP Pant', 'Soft Shell Trousers'];

  } else if (temperature > 30) {
    return ['Mid-Weight Cold Weather Shirt', 'Soft Shell Jacket', 'Extreme Cold Weather Parka'];

  } else if (temperature > 0) {
    return ['Mid-Weight Cold Weather Drawers', 'Soft Shell Jacket', 'Extreme Cold Weather Parka', 'Extreme Cold Weather Trousers'];

  } else {
    return ['Mid Weight Cold Weather Shirt', 'Mid-Weight Cold Weather Drawers', 'Soft Shell Jacket', 'Extreme Cold Weather Parka', 'Extreme Cold Weather Trousers'];
  }
}

// function heatIndexLogic(){

// }

// function badWeatherLogic(){

// }

// function airQualityLogic(){

// }

export default getUniformAtInputTime;

// //////////////////////////////////////////////////////////////////////
// Level 1, 49 degrees F and above,  short sleeved shirt and shorts
// Level 2, 40-48 degrees F,         additionally long sleeve shirt
// Level 3, 33-39 degrees F,         additionally jacket, hat, and gloves
// Level 4, 32 degrees F and below,  additionally pants
// //////////////////////////////////////////////////////////////////////