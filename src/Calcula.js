import { useState, useEffect } from "react";


const useCalculo = (numero) =>
{
    const [data, setData] = useState(null);
    useEffect( () => {
      fetch("https://duodigitobackend.herokuapp.com/duodigito="+ numero)
     .then(promise => promise.json())
     .then(data => setData(data));
     
    },[])

    return {data}

}

export default useCalculo;