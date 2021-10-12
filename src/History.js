const History = (props) =>
{   
 
    const handleDelete = props.handleDelete;
    const history = props.historico.filter((v,i,a)=>a.findIndex(t=>(t.duodigito === v.duodigito))===i) ;
    

   return history.map((coisa)=> (

    <div className="history-preview" key={history.indexOf(coisa)}>
        <h2>Duodigito:{coisa.duodigito}</h2>
        <h2>Tempo de cálculo:{coisa.tempo.toFixed(3)}</h2>
        <button onClick={()=> handleDelete(coisa.duodigito)}>delete history</button>
    </div>

    
))
}

export default History;