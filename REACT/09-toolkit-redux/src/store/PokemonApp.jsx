import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./slices";

export const PokemonApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  const {
    isLoading,
    pokemons = [],
    page,
  } = useSelector((state) => state.pokemons);

  return (
    <>
      <h1>Pkemon App</h1>
      <hr />
      <span>Loading: {isLoading ? "true" : "false"} </span>

      <ul>
        {pokemons.map(({ name }) => (
          <li key={name}> {name} </li>
        ))}
      </ul>
      <button
        disabled={isLoading}
        onClick={() => dispatch(getPokemons(page))}
      > Next </button>
    </>
  );
};
