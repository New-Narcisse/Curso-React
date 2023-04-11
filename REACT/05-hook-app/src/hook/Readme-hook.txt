RECORDEMOS QUE UN HOOK ES UNA FUNCION, NI MAS NI MENOS


import { useState } from "react";

export const useCounter = (initialValue = 10) => {

  const [counter, setCounter] = useState(initialValue);....---=> los custom hooks siempre estaran enlazados a un hook de react

  return {
    counter,      ......------=====>si no hay return en este hook, se debe detructurar el valor inicial en el componente renderizador
  };
};

ACHIVOS DE BARRIL
-se crea un archivo en la carpeta contenedora de las funciones, callbacs o hooks que necesitamos exportar
-el archivo tiene q ser .js
-esta es la sintaxis que debe llevar el archivo de barril
    export * from './nombre del archivo'
    export * from './nombre del archivo'
    export * from './nombre del archivo'
    export * from './nombre del archivo'
    export * from './nombre del archivo'
    de esta manera solo se tiene que importar por medio de la destructuring todo lo que necesitemos en una sola linea

SEARCHBAR
-
