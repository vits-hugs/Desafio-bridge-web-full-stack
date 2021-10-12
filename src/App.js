import { useState, useEffect } from "react";
import useCalculo from "./Calcula";
import Calculator from './Calculator';
import History from './History';


function App() {

 const {data:algo} = useCalculo(234)
 const historico = {'duodigito':810,'multiplicador':5}

  return (
    <div className="App">

      <div className="content">
        <Calculator/>

        {algo && <History history={[algo]}/>}
      </div>
    </div>
  );
}

export default App;
