import {Link} from 'react-router-dom';
import { useState } from "react";
import useCalculo from "./Calcula";
const salva=[];
const Calculator = props =>
{
    const [number,setNumber] = useState(0)
    const [data,setData] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error,setError] = useState(null);
    
    
    const handleSubmit = (e) => {
        setIsPending(true);
        e.preventDefault();
        const abortCont = new AbortController();
        fetch('https://duodigitobackend.herokuapp.com/duodigito='+number,{signal: abortCont.signal}).then(res => {
            return res.json();
        })
        .then(data =>{
            setData(data);
            setIsPending(false);
            setError(null);
            props.addHistorico(data);
    
        })
        .catch((error) => {
            if(error.name === 'AbortError')
            { console.log('fetch aborted')}
            else{
                setIsPending(false)
                setError(error.message)

            }
            
            return () => abortCont.abort();
    })

}

    return (
        <div className="calculator">
            <h1>calcula</h1>
            <form onSubmit={handleSubmit}>
            <input type="number" value={number} onChange={(e)=> setNumber(e.target.value)}/>
            
            <button type="submit" >Calcula </button>
            </form>
        
            {isPending && <h1>Calculando...</h1>}
            {!isPending && <h1>{data.duodigito}</h1>}

            <Link to={{
                        pathname: "/history",
                        state: data// your data array of objects
            }} >Historico</Link>
        </div>
    );
}

export default Calculator;