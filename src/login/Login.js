import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../login/UserAuthContext.js";
import "./login.style.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [signIn, toggle] = useState(true);

  //.........................................sign login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn, signUp } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };
  //signin
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/Shopee");
    } catch (error) {
      console.log(error.message);
    }
  };
  //signup

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div onSubmit={handleSignupSubmit} className="col-md-6 mb-5">
          <div className="card shadow p-5 animated zoomIn slow">
            <h3 className="text-center font-weight-bold text-uppercase mb-3">
              SIGN UP
            </h3>

            <form>
              <div className="form-group">
                <label>Enter Email</label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Enter Password</label>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                />
              </div>

              <button
                type="submit"
                className="btn btn-outline-dark btn-block rounded-pill"
              >
                Register
              </button>
            </form>
          </div>
        </div>

        <div onSubmit={handleSubmit} className="col-md-6 mb-5">
          <div className="card shadow animated zoomIn slow p-5">
            <h3 className="text-center font-weight-bold text-uppercase mb-3">
              Login Here
            </h3>

            <form>
              <div className="form-group">
                <label>Enter Email</label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Enter Password</label>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                />
              </div>

              <button
                type="submit"
                className="btn btn-outline-dark btn-block rounded-pill"
              >
                Login
              </button>
            </form>

            <p className="text-center mt-3"> or Login with</p>
            <button onClick={handleGoogleSignIn} className="text-center mt-3">
              {" "}
              google login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
