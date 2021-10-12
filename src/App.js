import { useState, useEffect } from "react";
import useCalculo from "./Calcula";
import Calculator from './Calculator';
import History from './History';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

 const {data:algo} = useCalculo(234)
 const {data:algo1} = useCalculo(242)
 const {data:algo2} = useCalculo(810)

 const arr = [algo,algo1,algo2]
 const historico = {'duodigito':810,'multiplicador':5}

  return (
    <Router>
    <div className="App">

      <div className="content">

        <Switch>
            <Route exact path="/">
              <Calculator/>
            </Route>
            <Route exact path="/history">
                {algo && <History history={arr}/>}
            </Route>
          </Switch>
      

      </div>
    </div>
    </Router>
  );
}

export default App;
