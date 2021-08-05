import UseClock from 'use-clock';

function ptUniformLogic(oneCallAPIData, inputTime, day, base) {
  let intTime = parseInt(inputTime);
  let time1 = intTime;
  let time2 = intTime;

  if (inputTime.substring(2) === '30') {
    time1 -= 30;
    time2 += 70;
  }

  time1 /= 100;
  time2 /= 100;

  const { time, onTimezone, raw } = UseClock("HH:MM");
  const bragTime = onTimezone("America/Denver")

  console.log(bragTime);




}

// function ocpUniformLogic(){

// }

// function heatIndexLogic(){

// }

// function badWeatherLogic(){

// }

// function airQualityLogic(){

// }

export default ptUniformLogic;

// //////////////////////////////////////////////////////////////////////
// Level 1, 49 degrees F and above,  short sleeved shirt and shorts
// Level 2, 40-48 degrees F,         additionally long sleeve shirt
// Level 3, 33-39 degrees F,         additionally jacket, hat, and gloves
// Level 4, 32 degrees F and below,  additionally pants
// //////////////////////////////////////////////////////////////////////