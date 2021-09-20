import React, { useState } from 'react';
import {
  Paper,
  InputLabel,
  MenuItem,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Switch,
  Select,
  Card,
  Button,
  Box
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchObject from '../APIcall/SearchObject.js';
import DatePicker from './DatePicker.js';
import { GifSharp } from '@material-ui/icons';

const baseChoices = [
  'Bragg',
  'Charleston',
  'Drum',
  'Pearl Harbor-Hickam',
  'North Pole',
  'Death Valley',
  'Salt Lake City',
  'Beijing',
  'Dubai'
];

const baseCoords = {
  'Bragg': { "lat": 35.14, "lon": -79.00, "timeZone": "America/New_York" },
  'Charleston': { "lat": 32.89, "lon": -80.07, "timeZone": "America/New_York" },
  'Drum': { "lat": 44.05, "lon": -75.74, "timeZone": "America/New_York" },
  'Pearl Harbor-Hickam': { "lat": 21.33, "lon": -157.97, "timeZone": "Pacific/Honolulu" },
  'North Pole': { "lat": 90.00, "lon": -135.00, "timeZone": "America/Anchorage" },
  'Death Valley': { "lat": 36.53, "lon": -116.93, "timeZone": "America/Los_Angeles" },
  'Salt Lake City': { "lat": 40.76, "lon": -111.89, "timeZone": "America/Chicago" },
  'Beijing' :{ "lat": 39.9, "lon": 116.40, "timeZone": "Asia/Shanghai" },
  'Dubai' :{ "lat": 25.20, "lon": 55.27, "timeZone": "Asia/Dubai" }
}

const uniformChoices = [
  'Army PT',
  'Army OCP'
  ];

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginBottom: 10,
    marginTop: 10

  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

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


function SearchField({ searchObject, setSearchObject }) {
  const [flag, setFlag] = useState(false)

  const [uniform, setUniform] = useState('Select Uniform')
  const [base, setBase] = useState('Select Base')
  const [time, setTime] = useState('Select Time')
  const [isFahrenheit, setIsFahrenheit] = useState(true);
  const [day, setDay] = useState('Select Day')

  const submitClick = (event) => {
    let nextSearchObj = new SearchObject();
    nextSearchObj.lat = baseCoords[base].lat;
    nextSearchObj.lon = baseCoords[base].lon;
    nextSearchObj.timeZone = baseCoords[base].timeZone;
    nextSearchObj.uniform = uniform;
    nextSearchObj.base = baseCoords[base].base;
    nextSearchObj.time = time;
    nextSearchObj.day = day;
    nextSearchObj.units = isFahrenheit ? 'imperial' : 'metric';
    setSearchObject(nextSearchObj);
  };

  const classes = useStyles();

  const handleToggle = (event) => {
    setIsFahrenheit(!isFahrenheit);
  };

  const handleUniformChange = (event) => {
    setUniform(event.target.value);
  };

  const handleBaseChange = (event) => {
    setBase(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleDayChange = (event) => {
    setDay(event.target.value);
  };

  function showUniformTimeDate() {
    return (
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="select">Select Uniform</InputLabel>
          <Select
            labelId="select-uniform"
            id="select"
            value={uniform}
            onChange={handleUniformChange}
          >
            {
              uniformChoices.map((uniform) => {
                return (<MenuItem value={`${uniform}`} >{uniform}</MenuItem>)
              })
            }


          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="select">Select Time</InputLabel>
          <Select
            labelId="select-time"
            id="select"
            value={time}
            onChange={handleTimeChange}
          >
            {
              timeChoices.map((time) => {
                return (<MenuItem value={`${time}`} >{time}</MenuItem>)
              })
            }

          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="select">Select Day</InputLabel>
          <Select
            labelId="select-day"
            id="select"
            value={day}
            onChange={handleDayChange}
          >
            <MenuItem value='Today'>Today</MenuItem>
            <MenuItem value='Tomorrow'>Tomorrow</MenuItem>

          </Select>
        </FormControl>


      </div>
    );
  }// end of showUniformTimeDate()

  function showSubmitButton() {
    return (
      <FormControl className={classes.formControl}>
        <Button variant="contained" color="primary" onClick={submitClick}>
          Submit
        </Button>
      </FormControl>
    )
  };

  return (
    <Paper variant="outlined" elevation={0} style={styles}><center>
     
    
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="select">Select Base</InputLabel>
          <Select
            labelId="select-base"
            id="select"
            value={base}
            onChange={handleBaseChange}
          >
            {
              baseChoices.map((base) => {
                return (<MenuItem value={base} >{base}</MenuItem>)
              })
            }

          </Select>
        </FormControl>
      
        {/* <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">C° / F°</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Switch checked={isFahrenheit} onChange={handleToggle} name="isFahrenheit" />}
              label=""
            />
          </FormGroup>
        </FormControl> */}
      

      {(base === 'Select Base') ? null : showUniformTimeDate()}

      {((uniform !== 'Select Uniform') &&
        (time !== 'Select Time')) ? showSubmitButton() : null}

    </center></Paper>


  )


}


const timeChoices = [
  '0000',
  '0030',
  '0100',
  '0130',
  '0200',
  '0230',
  '0300',
  '0330',
  '0400',
  '0430',
  '0500',
  '0530',
  '0600',
  '0630',
  '0700',
  '0730',
  '0800',
  '0830',
  '0900',
  '0930',
  '1000',
  '1030',
  '1100',
  '1130',
  '1200',
  '1230',
  '1300',
  '1330',
  '1400',
  '1430',
  '1500',
  '1530',
  '1600',
  '1630',
  '1700',
  '1730',
  '1800',
  '1830',
  '1900',
  '1930',
  '2000',
  '2030',
  '2100',
  '2130',
  '2200',
  '2230',
  '2300',
  '2330'
];


export default SearchField;