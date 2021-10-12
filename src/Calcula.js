import { useState, useEffect } from "react";


const useCalculo = (numero) =>
{
    const [data,setData] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error,setError] = useState(null);
    useEffect( () => {
        const abortCont = new AbortController();
        fetch('https://duodigitobackend.herokuapp.com/duodigito='+numero,{signal: abortCont.signal}).then(res => {
            return res.json();
        })
        .then(data =>{
            setData(data);
            setIsPending(false);
            setError(null)
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
    },[numero])

    return {data,isPending,error}

}

export default useCalculo;