import {Link} from 'react-router-dom';
import { useState } from "react";
const Calculator = props =>
{
    const [number,setNumber] = useState(0)
    const [shownum,setShow] = useState(0)
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
            data.num=number;
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
    console.log(error);
    return (
        <div className="calculator">
            <h1>Calculadora de duodigitos</h1>
            <h3>Digite um numero e clique em calcular</h3>
            <form onSubmit={handleSubmit}>
            <input type="number" value={number} onChange={(e)=> setNumber(e.target.value)}/>
            
            <button type="submit" onClick={()=>{setShow(number)}}>Calcular </button>
            </form>
            <div className="resultados">
            {isPending && <h1>Calculando...</h1>}
            {!isPending && <h1>O menor multiplo desse numero duodigito é:</h1>}
            {!isPending && <h1>{data.multiplicador} X {shownum} = {data.duodigito}</h1>}
            </div>
            <Link to={{
                        pathname: "/history",
                        state: data// your data array of objects
            }} className="botao-historico">Historico</Link>
            <div className="link-github">
                <a href="https://github.com/vits-hugs/Desafio-bridge-web-full-stack">Código fonte</a>
            </div>
        </div>
            
    );
}

export default Calculator;