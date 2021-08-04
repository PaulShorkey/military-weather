import React, { useState} from 'react';
import {
    Paper,
    InputLabel,
    MenuItem,
    FormHelperText,
    FormControl,
    Select,
    Grid
  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DateTimePicker from './DateTimePicker.js';

const baseChoices = [
  'Bragg',
  'Charleston',
  'Drum',
  'Pearl Harbor-Hickam'];

const uniformChoices = [
  'Air Force OCP',
  'Army OCP', 
  'Air Force PT', 
  'Army PT'];

const timeChoices = [
  'Morning',
  'Afternoon',
  'Evening',
  'Night'
];



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

function SearchField(){
    const [uniform, setUniform] = useState('Select Uniform')
    const [base, setBase] = useState('Select Base')
    const [time, setTime] = useState('Select Time')
    const [date, setDate] = useState('Select Date')

    const classes = useStyles();
    
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
                <InputLabel htmlFor="select">Select Uniform</InputLabel>
                <Select 
                    labelId="select-uniform" 
                    id="select" 
                    value={uniform}
                    onChange={handleUniformChange}
                >
                  {
                    uniformChoices.map((uniform) => {
                      {
                        return (<MenuItem value={`${uniform}`} >{uniform}</MenuItem>)
                      }
                    })   
                  }
                    
                    
                </Select>
            </FormControl>
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
                      {
                        return (<MenuItem value={`${base}`} >{base}</MenuItem>)
                      }
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
                      {
                        return (<MenuItem value={`${time}`} >{time}</MenuItem>)
                      }
                    }) 
                  }
                    
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
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
            </FormControl>
        </center></Paper>
      )
    
    
}


export default SearchField;

/*
return(
        <div className="home-page">
            
        </div>



import React, {useState} from 'react';
import TabsExample from './TabsExample';

import {
    Paper,
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    CardContent,
    CardActionArea,
    MenuItem,
    Menu,
    Button,
    Tabs, 
    Tab,
    Slider
  } from '@material-ui/core';



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

const NewPaper = () => {
  const [value, setValue] = useState(1)
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event, index, value) => {
    setValue(value);
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const menuArea = () => {
    return (
      <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
    )
  }

  return (
    <div>      
        <Paper variant="outlined" elevation={0} style={style}>
          {menuArea()}
          <TabsExample />
            <Card style={style}>
              <CardHeader title="Card Title">Card Title</CardHeader>
              <CardContent>Other Content</CardContent>
            </Card>
        </Paper>
        <Paper elevation={12} style={style}>This is a Material UI Paper component
        
        </Paper>
        <Paper variant="outlined" square elevation={24} style={style}>
            This is a Material UI Paper component
        </Paper>
    </div>
  )
};

export default NewPaper;*/