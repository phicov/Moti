import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return(
    <div className="mycard">
      <div className="card auth-card z-depth-3 input-field">
        <h2>Moti</h2>
        <input type="text"
        placeholder="name"
        />
        <input type="text"
        placeholder="email"
        />
        <input type="password"
        placeholder="password"
        />
          <button className="btn waves-effect waves-light #448aff blue accent-2 hoverable">
          Sign Up
          </button>
          <p>
          <Link to="/signin" className="hoverable">Have an account?</Link>
          </p>
      </div>
    </div>
  );
}

export default SignUp