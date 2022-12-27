import { useFetchGifts } from "../hooks/useFetchGifts";
import { GiftItem } from "./GiftItem";

export const GiftGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifts(category);

  return (
    <>
      <h3> {category} </h3>
      {
        isLoading && <h2>Cargando........</h2> /* si isLoaidng = true entonces ejecuta el <h2></h2> */
      }
      


      <div className="card-grid">
        {images.map((img) => (
          <GiftItem key={img.id} {...img} />
          /* este componente reemplaza el codigo {images.map......} por cuestiones de buna practica */
          //esto es para mostrar lo que yo quiera. por eso creamos el hook useState
          /* el img del .map puede ser cualquier otro nombre o abreviacion que se quiera.
                { images.map( ( img ) => (
            <li key={ img.id } >{ img.title }</li> tooooodo este codigo se puede mejorar 
            desestructurando las variables que necesito justo despues del .map y queda asi: { images.map( ({ id, title }) => (
            <li key={ id } >{ title }</li> */
        ))}
      </div>
    </>
  );
};
