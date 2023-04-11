import { useState, useEffect } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formeState, setFormeState] = useState({
    username: "sony",
    email: "sony@hermo.com",
  });

  const { username, email } = formeState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormeState({
      ...formeState,
      [name]: value,
    });
  };
  useEffect(() => {
    // console.log("useEffect called");
  }, []);

  useEffect(() => {
    // console.log("format changed");
  }, [formeState]);

  useEffect(() => {
    // console.log("email changed");
  }, [email]);

  return (
    <>
      <h1>Simple Form</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="originalsony@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      { (username === 'joaquin') && <Message/>}
    </>
  );
};
