
import './App.css';
import { useState, useEffect } from "react";



function App() {


  const [num, setNum] = useState(0);
 useEffect( () => {
   fetch("https://duodigitobackend.herokuapp.com/duodigito=42449")
  .then(promise => promise.json())
  .then(data => setNum(data["duodigito"]));
  
 }

  ,[])
    

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {num}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
