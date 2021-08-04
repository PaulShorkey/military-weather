import React, { useState} from 'react';
import {
    Paper,
    Card
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

  const style = {
    margin: 20,
    backgroundColor: 'gray',
    color: 'white'
    
    
  };

function ResultsView(){
    return(
    <Paper variant="outlined" elevation={0} style={styles}><center>
      <Card variant="outlined" style={style}>
        What should I wear?
      </Card>
      <Card variant="outlined" style={style}>
        Heat Index? Flag Condition?
      </Card>
      <Card variant="outlined" style={style}>
        Bad weather?
      </Card>
      <Card variant="outlined" style={style}>
        Air Quality?
      </Card>
      </center></Paper>
    )
}


export default ResultsView;