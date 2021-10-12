const History = (props) =>
{   
    
    const handleDelete = props.handleDelete;
    const history = props.history;
   return history.map((coisa)=> (
    <div className="history-preview" key={history.indexOf(coisa)}>
        <h2>{coisa.duodigito}</h2>
        <h2>{coisa.multiplicador}</h2>
        <h2>{coisa.tempo}</h2>
        <button onClick={()=> handleDelete(coisa.id)}>delete history</button>
    </div>
    
))
}

export default History;