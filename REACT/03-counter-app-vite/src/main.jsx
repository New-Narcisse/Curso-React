import React from "react";
import ReactDOM from "react-dom/client";
//import { FirstApp } from './FirstApp';
import { CounterApp } from "./CounterApp";

//import {HolaMundoApp} from './HolaMundoApp'
//import { ImprimirVarApp } from './ImprimirVarApp';

import "./styles.css";

//import {FirstApp1} from './Properties'

//-------FUNCTIONAL COMPONENT == COPMPONENTES BASADOS EN FUNCIONES---------//

//function App(){
//    //El codigo de abajo es el reemplazo de este codigo: document.creatElement.......
//    return (<h1>Hola Mundo</h1>);
//}
// Todo el codigo de arriba es la aplicación, ahora hay que renderizarla.
// Por ese motivo importamos reactDOM
// No me quedó claro el origen del "reactDOM"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/*  <FirstApp /> */}
    <CounterApp value={20} />
  </React.StrictMode>
);

/*Lo que es el title y lo que sea que pongamos despues del FirstApp 
  son props que le estamos agregando del componente padre que es el 
  renderizador al componente hijo que es la app*/

// No es de costumbre colocar la app en el mismo archivo que el rederizador
// por eso creamos el archivo HolaMundo.jsx colocamos nuestra app alli y luego exportamos
// de el archivo HolaMundo.jsx e importamos en el archivo del renderizador.

// ----- Lo ideal es hacer las exportaciones de manera independiente ya que en el mismo
// archivo de App.jsx podemos tener varias apps
