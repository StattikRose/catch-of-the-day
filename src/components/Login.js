import React from "react";
import PropTypes from "prop-types"
import Header from "./Header";

const Login = (props) => (
  <nav className="login">
    <h2>Inventory Login</h2>
    <p>Sign in to manage you store's inventory.</p>
    <button className="github" onClick={() => props.authenticate('Github')}>Log In with Github</button>
  </nav>
);

Login.propTypes = {
  authenticate: PropTypes.func.isRequired
}

export default Login;
