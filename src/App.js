import { useState, useEffect } from "react";
import Calculator from './Calculator';
import History from './History';


function App() {
  const [num, setNum] = useState(0);
 useEffect( () => {
   fetch("https://duodigitobackend.herokuapp.com/duodigito=42449")
  .then(promise => promise.json())
  .then(data => setNum(data["duodigito"]));
  
 },[])
 const historico = {'numero':810,'multiplicador':5}
    

  return (
    <div className="App">

      <div className="content">
        <Calculator/>

        <History history={[historico]}/>
      </div>
    </div>
  );
}

export default App;
