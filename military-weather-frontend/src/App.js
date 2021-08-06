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

function App() {
  const [searchObject, setSearchObject] = useState(null);
  const [oneCallAPIData, setOneCallAPIData] = useState(null);
  const [airQualAPIData, setAirQualAPIData] = useState(null);
  const [editBaseTemp, setBaseTemp] = useState(true);
  useEffect(() => {
    if (searchObject !== null) {
      oneCallAPI(searchObject, setOneCallAPIData);
      airQualAPI(searchObject, setAirQualAPIData);
    }
  }, [searchObject])

  function showResultsView() {
    if (oneCallAPIData && airQualAPIData) {
      return <ResultsView oneCallAPIData={oneCallAPIData} airQualAPIData={airQualAPIData} searchObject={searchObject} />
    }
  }

  //pages rendered based on the current state (home)
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <body>
        <SearchField searchObject={searchObject} setSearchObject={setSearchObject} />
        {showResultsView()}

      </body>
      <footer>
        <StickyFooter />
      </footer>

    </div>
  );
}

export default App;


