import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  const isAuthenticated = localStorage.getItem("isAuthenticated");

  const handleEmailChange = (event) => {
    setemail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setpassword(event.target.value);
  };

  const handleAuthenticate = () => {
    if (email === "maitrayi@gmail.com" && password === "Maitrayi@123") {
      navigate("/");
      localStorage.setItem("isAuthenticated", 1);

      alert("Login Successful");
    }
  };

  const handleLogOut = () => {
    navigate("/");
    localStorage.setItem("isAuthenticated", 0);
    alert("Logout Successful");
  };
  return (
    <div>
      {isAuthenticated && isAuthenticated === "1" ? (
        <>
          <button
            type="submit"
            onClick={handleLogOut}
            className="btn btn-primary"
          >
            Log out
          </button>
        </>
      ) : (
        <>
          {" "}
          <h1>Login</h1>
          <form>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <button
              type="submit"
              onClick={handleAuthenticate}
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Login;
