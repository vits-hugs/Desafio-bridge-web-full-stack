import { useState} from "react";
import Calculator from './Calculator';
import History from './History';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  const[historico,setHistorico]=useState([]);
  
  const addHistorico = (data) => {
    
    setHistorico(historico.filter((v,i,a)=>a.findIndex(t=>(t.duodigito === v.duodigito))===i))
    setHistorico(previous=>[...previous,data]);
    console.log(historico);
    
    

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
