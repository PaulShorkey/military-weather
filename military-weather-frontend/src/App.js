import './App.css';
import HomePage from './HomePage';
import NavBar from './NavBar';
import oneCallAPI from './APIcall/oneCallAPI.js'
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
        <HomePage />
      </body>
      <footer>
        Brought to you by the family breakout room
      </footer>

    </div>
  );
}

export default App;
