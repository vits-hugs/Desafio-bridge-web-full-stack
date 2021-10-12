import { useState, useEffect } from "react";
import useCalculo from "./Calcula";
import Calculator from './Calculator';
import History from './History';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  var previous;
  const[historico,setHistorico]=useState([]);
  
  const addHistorico = (data) => {
    
    //let namesSet = new Set(previous.map(item => item.duodigito));
    setHistorico(previous=>[...previous,data]);
  }

  return (
    <Router>
    <div className="App">

      <div className="content">

        <Switch>
            <Route exact path="/">
              <Calculator addHistorico ={addHistorico}/>
            </Route>
            <Route exact path="/history">
                {<History historico={historico}/>}
            </Route>
          </Switch>
      

      </div>
    </div>
    </Router>
  );
}

export default App;
