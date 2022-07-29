import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return(
    <div className="mycard">
      <div className="card auth-card z-depth-3 input-field">
        <h2>Moti</h2>
        <input type="text"
        placeholder="email"
        />
        <input type="password"
        placeholder="password"
        />
          <button className="btn waves-effect waves-light #448aff blue accent-2 hoverable">
          Sign in
          </button>
          <p>
          <Link to="/signup" className="hoverable">Don't have an account?</Link>
          </p>
          
      </div>
    </div>
  );
}

export default SignIn