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
        <br/>
        Clothes not recommended.
      </Card>
      <Card variant="outlined" style={style}>
        Heat Index? <br/>
        Flag Condition? <br/>
        Death Valley, America
      </Card>
      <Card variant="outlined" style={style}>
        Bad weather?
        <br/>
        Horrendus
      </Card>
      <Card variant="outlined" style={style}>
        Air Quality?
        <br/>
        Literally Beijing
      </Card>
      </center></Paper>
    )
}


export default ResultsView;