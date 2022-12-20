import PropTypes from 'prop-types';


import { useState } from 'react' //para usar los HOOKS se debe importar algun 'use....',
                                 //esto es una funcion y cuando se usa significa que estamos en hooks
export const CounterApp = ({value}) => {

    const [counter, setCounter] = useState (value);
    //este value puede ser seteado por el renderizador dentro del tag de esta app
    
    const handleAdd = () =>  {
        //console.log(event) =====> con esto se puede ver las propiedades del evento
        //setCounter(counter + 1)
        setCounter((c) => c + 1) 
        // la eleccion de cualquiera de los 2 ultimos codigos depende de las circunstancias 
    } 

    const handleSubstrac = () => setCounter( counter -1 )
    const handleReset = () => setCounter ( value)
    

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>
      
      <button  onClick={ handleAdd } >  
        +1
      </button>
      <button onClick={ handleSubstrac }>
        -1
      </button>
      <button aria-label='btn-reset' onClick={handleReset}>
        Reset
      </button>

    </>
  );
};
//<button  onClick={ function () {console.log('+1')} } >  esto se puede mejorar 
//colocando la funcion fuera del return pero dentro de la funcion 

//-------------onClick----------------
/* El button onClick recibe como argumento una funcion como argumento 
tambien peude recibir varios argumentos per si solo recibe un argumento, 
se puede colocar la variable que contiene esa funcion */


CounterApp.propTyprs = {
    value: PropTypes.number
}

/* !!!!!!!!!!!!!!--------------IMPORTANTE--------------!!!!!!!!!!!!!!
CADA VEZ QUE GENEREMOS UN CAMBIO EN EL ESTADO DEL COUNTER SE VUELVE
 A CARGAR TODO EL CODIGO CON EL NUEVO VALOR POR ESO ES IMPORTANTE SER 
 ORDENADO CON EL CODIGO*/


