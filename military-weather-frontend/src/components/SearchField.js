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
  Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchObject from '../APIcall/SearchObject.js';
import DatePickers from './DatePicker.js';

const baseChoices = [
  'Bragg',
  'Charleston',
  'Drum',
  'Pearl Harbor-Hickam'];

const baseCoords = {
  'Bragg': { "lat": 35.14, "lon": -79.00, "timeZone":"America/New_York" },
  'Charleston': { "lat": 0, "lon": 0,"timeZone":"America/New_York"  },
  'Drum': { "lat": 0, "lon": 0,"timeZone":"America/New_York"  },
  'Pearl Harbor-Hickam': { "lat": 21.33, "lon": -157.97, "timeZone":"Pacific/Honolulu" }
}

const uniformChoices = [
  'Air Force OCP',
  'Army OCP',
  'Air Force PT',
  'Army PT'];

    



const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginBottom: 25,
    marginTop: 25

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
  const [uniform, setUniform] = useState('Select Uniform')
  const [base, setBase] = useState('Select Base')
  const [time, setTime] = useState('Select Time')
  const [date, setDate] = useState('Select Date')
  const [isFahrenheit, setIsFahrenheit] = useState(true);

  const submitClick = (event) => {
    let nextSearchObj = new SearchObject();
    nextSearchObj.lat = baseCoords[base].lat;
    nextSearchObj.lon = baseCoords[base].lon;
    nextSearchObj.timeZone = baseCoords[base].timeZone;
    nextSearchObj.uniform = uniform;
    nextSearchObj.base = baseCoords[base].base;
    nextSearchObj.time = time;
    nextSearchObj.date = date;
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

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  return (
    <Paper variant="outlined" elevation={0} style={styles}><center>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="select">Select Base</InputLabel>
        <Select
          labelId="select-time"
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
      
      <FormControl component="fieldset">
      <FormLabel component="legend">Sell See Us/Fair In Height</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={isFahrenheit} onChange={handleToggle} name="isFahrenheit" />}
          label=""
        />
      </FormGroup>
    </FormControl>
      
      <br/>

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

      {/*<FormControl className={classes.formControl}>

        <InputLabel htmlFor="select">Select Day</InputLabel>
        <Select
          labelId="select-time"
          id="select"
          value={date}
          onChange={handleDateChange}
        >
          <MenuItem value='Today' >Today</MenuItem>
          <MenuItem value='Tomorrow' >Tomorrow</MenuItem>

        </Select>

        </FormControl>*/}

      <FormControl className={classes.formControl}>
        <DatePickers />
      </FormControl>

    <FormControl>
      <Button variant="contained" color="primary" onClick={submitClick}>
        Submit
      </Button>
    </FormControl>



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