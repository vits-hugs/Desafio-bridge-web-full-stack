import { useState} from "react";
import Calculator from './Calculator';
import History from './History';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  const[historico,setHistorico]=useState([]);
  
  const addHistorico = (data) => {
    
    setHistorico(historico.filter((v,i,a)=>a.findIndex(t=>(t.duodigito === v.duodigito))===i))
    setHistorico(previous=>[...previous,data]);
    console.log(historico);

  }
  const handleDelete= (valor) => {
    setHistorico(historico.filter((v,i,a)=>(v.duodigito !== valor)))

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
            <Link to={{pathname: "/",}} 
            className="Calcular-mais">Voltar</Link>
                {<History historico={historico} handleDelete={handleDelete}/>}
            </Route>
          </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
