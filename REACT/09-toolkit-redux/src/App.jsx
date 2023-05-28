import { useDispatch, useSelector } from "react-redux";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { decrement, increment, incrementBy } from "./store";

function App() {
  const { counter } = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" rel="noreferrer" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" rel="noreferrer" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>count is {counter}</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}> Increment </button>
      </div>
      <div className="card">
        <button onClick={() => dispatch(decrement())}> Decrement </button>
      </div>
      <div className="card">
        <button onClick={() => dispatch(incrementBy(2))}> IncrementBy </button>
      </div>
    </>
  );
}

export default App;
