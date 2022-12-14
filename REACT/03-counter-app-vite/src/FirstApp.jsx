import PropTypes from "prop-types";

// Una manera de crear un contenedor sin modificar el html es:
//-------import { Fragment } from "react"---------
// Luego colocar este codigo (<h1>This is my first App</h1> <p>Mi nombre es Sony</p>)
// Dentro de la etiqueta Fragment = <Fragment></Fragment>

/* Sinembargo hay una manera mas rapida de hacerlo, simplemente 
se coloca el codigo dentro de la siguinete etiqueta: <>..</>
 */

export const FirstApp = ({ title, subTitle, name }) => {
  return (
    <>
      <h1> {title} </h1>
      <p> {subTitle} </p>
      <p> {name} </p>
    </>
    /*El codigo anterior genera un error 
      y para qu funcione se tiene que crear un contenedor */
  );
};

/* esto es debido a que en react siempre se necesita un nodo padre, 
 de esta manera se pueden agregar n cantidad de elementos */

FirstApp.propTypes = {
  subTitle: PropTypes.string,
  title: PropTypes.string.isRequired,
};
FirstApp.defaultProps = {
  name: "Sony Narcisse",
  subTitle: "No hay sub titulos",
  //title: 'No hay titulos',
};
