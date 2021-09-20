import {
  Paper,
  Card,
  CardContent,
  Typography,
  Box,
  Container,
  Grid,
  rgbToHex
} from '@material-ui/core';
import React from 'react';

import {getUniformAtInputTime, getHeatIndexAndFlag, getWeatherCondition, getAirQuality} from '../ResultsViewLogic.js';

const styles = {
  customWidth: {
    width: 200,

  },
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

const style = {
  margin: 20,
  backgroundColor: '#3448A8',
  color: 'white'
};

const style2 = {
  margin: 20,
  backgroundColor: 'Gray',
  color: 'white'
};

const style3easy = {
  display: 'inline',
  backgroundColor: rgbToSex(57,255,70),
    padding: 16,
    margin:12,
    fontWeight: 400,
    fontSize: 14,
    color: 'black',
    borderRadius:12
};

const style3medium = {
  display: 'inline',
  backgroundColor:rgbToSex(255,255,89),
    padding: 16,
    margin:12,
    fontWeight: 400,
    fontSize: 14,
    color: 'black',
    borderRadius:12
};

const style3hard = {
  display: 'inline',
  backgroundColor:rgbToSex(255,38,90),
    padding: 16,
    margin:12,
    fontWeight: 400,
    fontSize: 14,
    color:'black',
    borderRadius:12
};

function ResultsView({ oneCallAPIData, airQualAPIData, searchObject }) {
  let uniformArray = getUniformAtInputTime(oneCallAPIData.hourly, searchObject);
  let heatIndexArray = getHeatIndexAndFlag(oneCallAPIData.hourly, searchObject);
  let weatherCondition = getWeatherCondition(oneCallAPIData.hourly, searchObject)
  let airQuality = getAirQuality(airQualAPIData, searchObject);
  return (
    <Paper variant="outlined" elevation={0} style={styles}><center>
      <Card variant="outlined" style={style}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Uniform Requirements
          </Typography>
          <br />
          <Typography variant="body2" component="p">
            {uniformArray.map((article) => {//replace with getUniformAtInputTime function
              return <div>{`=> ${article} <=`}<br /></div>
            })}
          </Typography>
        </CardContent>
      </Card>
      <Card variant="outlined" style={style2}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Flag Condition : {`${heatIndexArray[1]}`} <br />
          </Typography>
          Heat Index : {`${heatIndexArray[0]}`} <br />
          <Grid container justifyContent="center">
            <Grid style={style3easy}>
              {heatIndexArray[2][0]} <br/>
              {heatIndexArray[2][1]} 
            </Grid>
            <Grid style={style3medium}>
              {heatIndexArray[2][2]} <br/>
              {heatIndexArray[2][3]}
            </Grid>
            <Grid style={style3hard}>
              {heatIndexArray[2][4]} <br/>
              {heatIndexArray[2][5]}
            </Grid>
         </Grid>
          {/* {heatIndexArray[2].map((flagInstruction) => {
            return <div>{flagInstruction}</div>
          })} */}
        </CardContent>
      </Card>
      <Card variant="outlined" style={style2}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Weather Alerts
          </Typography>
          <br />
          <Typography variant="body2" component="p">
            <img src={`https://openweathermap.org/img/wn/${weatherCondition.icon}@2x.png`} alt="Weather icon" />
            <center>{weatherCondition.description}</center>
          </Typography>
        </CardContent>
      </Card>
      <Card variant="outlined" style={style2}>
        <CardContent>
        <Typography variant="h5" component="h2">
            Air Quality
        </Typography>
          {airQuality}
        </CardContent>
      </Card>
    </center></Paper>
  )
}

function componentToHex(c) {
  let hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
function rgbToSex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export default ResultsView;