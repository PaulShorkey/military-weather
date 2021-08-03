import './App.css';
import HomePage from './HomePage';
import NavBar from './NavBar';
import callAPI from './API.js'
import { useState, useEffect} from 'react';


function App() {
  const [oneAPIData, setOneAPIData] = useState({});
  useEffect(() => {
    callAPI(setOneAPIData);
    console.log(oneAPIData);
  }, setOneAPIData)



  return (
    <div className="App">
        <header>
          <NavBar/>
        </header>
        <body>
          <HomePage/>
        </body>
        <footer>
          Brought to you by the family breakout room
        </footer>
        
    </div>
  );
}

export default App;
