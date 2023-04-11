import { useContext } from "react";
import { UserContext } from "./context/userContext";

export const LoginPage = () => {
  const { user, setUser} = useContext(UserContext);

  return (
    <>
      <h1>LoginPage  Logged <small> {user?.name} </small> </h1>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>
      <button
        className="btn btn-primary"
        onClick={() =>
          setUser({ id: 123, name: "Sony", mail: "sony@algo.com" })
        }
      >
        Establecer usuario
      </button>
    </>
  );
};
