import { useEffect, useState } from "react";
import { GetGifts } from "../Helpers/GetGifts";


export const useFetchGifts = ( category ) => {
 
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() => {
        const newImages = await GetGifts( category );
        setImages(newImages);
        setIsLoading(false);
    }
    
    useEffect( () => {
        getImages();
    }, []);



    return {
        images,
        isLoading
    }

}
//RECUERDA QUE EL PREFIJO 'use' SIGNIFICA QUE ES UN HOOK!!!
// el segundo argumento es una dependencia. Si se deja vacio significa solo cargara el hook una sola vez
// es decir que la funcion 'getGifts' solo se ejecutara una ves al ejecutar el hook
//esto es para evitar que se ejecute el getGifts por cada alteracion de la app