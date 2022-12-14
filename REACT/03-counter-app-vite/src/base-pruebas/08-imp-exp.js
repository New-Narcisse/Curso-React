import {heroes} from "./heroes";

//export const getHeroById = (id) => heroes.find((heroes) => heroes.id === id);
export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );


export const getHeroesByOwner = (owner) => heroes.filter((heroes) => heroes.owner === owner);



  