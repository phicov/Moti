import React from "react";

const SignIn = () => {
  return(
      <div>
      <div class="card">
        <h2>Moti</h2>
        <input type="text"
        placeholder="email"
        />
        <input type="password"
        placeholder="password"
        />
          <button class="btn waves-effect waves-light">
          Signin
          </button>
      </div>
      </div>
  );
}

export default SignIn