import { useCounter, useFetch } from "../hook";

import { LoadingCharacter, Character } from "./";

export const MultipleCustumHooks = () => {
  const { counter, increment, decrement } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://rickandmortyapi.com/api/character/1${counter}`
  );

  return (
    <>
      <h1>Rick and Morty App</h1>
      <hr />

      {isLoading ? LoadingCharacter : Character(data)};
      
      <div className="d-grid gap-2 col-6 mx-auto">
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => increment()}
          disabled={isLoading}
        >
          Next Character
        </button>
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => decrement()}
          disabled={isLoading}
        >
          Preview
        </button>
      </div>
    </>
  );
};
