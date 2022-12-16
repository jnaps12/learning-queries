import React from "react";
import { AuthContext } from "../providers/auth";


export function Login(){
  const {token, setToken} = React.useContext(AuthContext);

  console.log(token);

  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}