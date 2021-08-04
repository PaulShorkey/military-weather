import './App.css';
import SearchField from './SearchField';
import NavBar from './NavBar';
import ResultsView from './ResultsView';
import StickyFooter from './Footer';
import oneCallAPI from './APIcall/oneCallAPI.js';
import { useState, useEffect } from 'react';


function App({ initialSearchData }) {
  const [searchObject, setSearchObject] = useState(initialSearchData);
  const [oneCallAPIData, setOneCallAPIData] = useState({});
  useEffect(() => {
    oneCallAPI(searchObject, setOneCallAPIData);
  }, [searchObject, setOneCallAPIData])

  console.log(oneCallAPIData)

  //pages rendered based on the current state (home)
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <body>
        <SearchField />
        <ResultsView />
      </body>
      <footer>
        <StickyFooter />
      </footer>

    </div>
  );
}

export default App;
