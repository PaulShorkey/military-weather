import './App.css';
import SearchField from './components/SearchField.js';
import NavBar from './components/NavBar.js';
import ResultsView from './components/ResultsView.js';
import StickyFooter from './components/Footer.js';
import oneCallAPI from './APIcall/oneCallAPI.js';

import { useState, useEffect } from 'react';


function App({ initialSearchData }) {
  const [searchObject, setSearchObject] = useState(initialSearchData);
  const [oneCallAPIData, setOneCallAPIData] = useState({});
  useEffect(() => {
    oneCallAPI(searchObject, setOneCallAPIData);
  }, [searchObject, setOneCallAPIData])

  //pages rendered based on the current state (home)
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <body>
        <SearchField searchObject={searchObject} setSearchObject={setSearchObject} />
        <ResultsView />
        
      </body>
      <footer>
        <StickyFooter />
      </footer>

    </div>
  );
}

export default App;
