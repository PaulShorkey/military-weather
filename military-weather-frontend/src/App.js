import './App.css';
import SearchField from './components/SearchField.js';
import NavBar from './components/NavBar.js';
import ResultsView from './components/ResultsView.js';
import StickyFooter from './components/Footer.js';
import oneCallAPI from './APIcall/oneCallAPI.js';
import airQualAPI from './APIcall/airQualAPI';

import { useState, useEffect } from 'react';
import tempAtTime from './ResultsViewLogic.js';
import sampleResponse from './sampleResponse.js';



function App({ initialSearchData }) {
  const [searchObject, setSearchObject] = useState(initialSearchData);
  const [oneCallAPIData, setOneCallAPIData] = useState({});
  const [airQualAPIData, setAirQualAPIData] = useState({});
  const [editBaseTemp, setBaseTemp] = useState(true);
  useEffect(() => {
    oneCallAPI(searchObject, setOneCallAPIData);
    airQualAPI(searchObject, setAirQualAPIData);
  }, [searchObject])
  console.log(airQualAPIData);
  //pages rendered based on the current state (home)
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <body>
        <SearchField searchObject={searchObject} setSearchObject={setSearchObject} />
        <ResultsView oneCallAPIData={sampleResponse()} searchObject={searchObject}/>

      </body>
      <footer>
        <StickyFooter />
      </footer>

    </div>
  );
}

export default App;


