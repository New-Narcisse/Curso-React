import { useEffect, useState } from "react";
import { getGifts } from "../Helpers/GetGifts";
import { GiftItem } from "./GiftItem";

export const GiftGrid = ({ category }) => {
  const [images, setImages] = useState([]); // los [] es para inicializar nuestro hook con arreglo vacio, se puede hacer tambien con
  const getImages = async () => {
    const newImages = await getGifts({ category });
    setImages(newImages);
  };
  useEffect(() => {
    //RECUERDA QUE EL PREFIJO 'use' SIGNIFICA QUE ES UN HOOK!!!
    getImages();
  }, []); // el segundo argumento es una dependencia. Si se deja vacio significa solo cargara el hook una sola vez
  // es decir que la funcion 'getGifts' solo se ejecutara una ves al ejecutar el hook
  //esto es para evitar que se ejecute el getGifts por cada alteracion de la app

  return (
    <>
      <h3> {category} </h3>
      <div className="card-grid">
        {images.map(
          (
            image //esto es para mostrar lo que yo quiera. por eso creamos el hook useState
          ) => (
            <GiftItem
              key={image.id}
              {...image}
            /> /* este componente reemplaza el codigo {images.map......} por cuestiones de buna practica */
            /* el img del .map puede ser cualquier otro nombre o abreviacion que se quiera.
                { images.map( ( img ) => (
            <li key={ img.id } >{ img.title }</li> tooooodo este codigo se puede mejorar 
            desestructurando las variables que necesito justo despues del .map y queda asi: { images.map( ({ id, title }) => (
            <li key={ id } >{ title }</li> */
          )
        )}
      </div>
    </>
  );
};
