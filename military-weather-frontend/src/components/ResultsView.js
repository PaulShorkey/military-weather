import {
  Paper,
  Card,
  CardContent,
  Typography
} from '@material-ui/core';
import React from 'react';

import getUniformAtInputTime from '../ResultsViewLogic.js';



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
    backgroundColor: 'green',
    color: 'white'
  };

  const style2 = {
    margin: 20,
    backgroundColor: 'gray',
    color: 'white'
  };

function ResultsView({oneCallAPIData, airQualAPIData, searchObject}){
  
  return(
    <Paper variant="outlined" elevation={0} style={styles}><center>
      <Card variant="outlined" style={style}>
      <CardContent>
      <Typography variant="h5" component="h2">
          Uniform Requirements
        </Typography>
        <br/>
        <Typography variant="body2" component="p">
         {getUniformRequirements.map((article) => {//replace with getUniformAtInputTime function
          return <div>{`=> ${article} <=`}<br/></div>
        })}
        </Typography>
        </CardContent>
      </Card>
      <Card variant="outlined" style={style2}>
      <CardContent> 
        Heat Index : {`${getHeatIndex()}`} <br/>
        Flag Condition : {`${getFlagCondition()}`} <br/>
        </CardContent>
      </Card>
      <Card variant="outlined" style={style2}>
      <CardContent>
      <Typography variant="h5" component="h2">
          Weather Alerts
        </Typography>
        <br/>
        <Typography variant="body2" component="p">
         {getWeatherAlerts.map((alert) => {
          return <div>{`ALERT: ${alert}`}<br/></div>
        })}
        </Typography>        
        </CardContent>
      </Card>
      <Card variant="outlined" style={style2}>
      <CardContent>
        Air Quality : {`${getAirQuality()}`}
        </CardContent>
      </Card>
      </center></Paper>
    )
}

const getHeatIndex = () => {
  return '95ºF';
}

const getFlagCondition = () => {
  return 'Black Flag';
}

const getAirQuality = () => {
  return 'Moderate';
}

const getWeatherAlerts = ['Flash flooding expected this afternoon',
          'Thunderstorm warning'];

const getUniformRequirements = ['Short Sleeve Shirt',
          'Shorts',
          'Apex Jacket',
          'Apex Pants'
        ];

export default ResultsView;