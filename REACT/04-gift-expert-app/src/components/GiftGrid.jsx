
import { useEffect, useState } from "react";
import { getGifts } from "../Helpers/GetGifts";

export const GiftGrid = ({ category }) => {

  const [counter, setCounter] = useState(0)
  useEffect( () =>{       //RECUERDA QUE EL PREFIJO 'use' SIGNIFICA QUE ES UN HOOK!!!
    getGifts(category);

  }, [ ]) // el segundo argumento es una dependencia. Si se deja vacio significa solo cargara el hook una sola vez 
  // es decir que la funcion 'getGifts' solo se ejecutara una ves al ejecutar el hook 
  //esto es para evitar que se ejecute el getGifts por cada alteracion de la app
  
  return (
    <>
      <h3> {category} </h3>
      <h5> { counter} </h5>
      <button onClick={() => setCounter( counter + 1 )}>+1</button>

    </>
  );
};
