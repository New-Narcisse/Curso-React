export const getImagen = async () => {
  try {
    const apiKey = "1X8lFrQKC3OaMOLbKmWm3yjbZbEXLviv";
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();

    const { url } = data.images.original;

    return url;
  } catch (error) {
    // manejo del error
    console.log(error);
    return "No se encontró la imagen";
  }
};

getImagen();
