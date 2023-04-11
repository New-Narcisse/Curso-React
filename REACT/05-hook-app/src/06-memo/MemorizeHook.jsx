import { useMemo, useState } from "react";
import { useCounter } from "../hook/useCounter";

const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("Ahi vamos....");
  }
  return `${iterationNumber} iteraciones realizadas`;
};

export const MemorizeHook = () => {
  const { counter, increment, decrement, reset } = useCounter(10);
  const [show, setShow] = useState(true);
  const memoValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h1>
        Counter: <small> {counter} </small>
      </h1>
      <h1> {memoValue}</h1>
      <hr />

      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>
      <button className="btn btn-primary" onClick={() => reset()}>
        Reset
      </button>
      <button className="btn btn-outline-primary" onClick={() => decrement()}>
        -1
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
