import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function App() {
  const [user, setuser] = useState("");
  const [pass, setpass] = useState("");
  const navigate = useNavigate();

  function handleUser(e) {
    setuser(e.target.value);
  }
  function handlePass(e) {
    setpass(e.target.value);
  }

  function check() {
    const logindetails = axios.post(`http://localhost:5001/login`, {
      username: user,
      password: pass,
    });
    logindetails.then(function (data) {
      if (data.data === true) {
        navigate("/success");
      } else {
        navigate("/fail");
      }
    });
  }

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#282c34", // Dark background color for the whole page
    fontFamily: "Arial, sans-serif",
  };

  const formContainerStyle = {
    backgroundColor: "#ffffff", // Solid contrast color (white) for the login box
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)", // Shadow for a subtle 3D effect
    animation: "slideIn 0.7s ease-in-out",
    width: "300px",
    textAlign: "center",
  };

  const inputStyle = {
    padding: "10px",
    margin: "15px 0",
    width: "100%",
    borderRadius: "5px",
    border: "1px solid #ccc",
    transition: "all 0.3s ease",
    fontSize: "16px",
  };

  const buttonStyle = {
    padding: "10px 25px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
    transition: "background-color 0.3s ease",
    fontSize: "16px",
  };

  const labelStyle = {
    fontSize: "18px",
    marginBottom: "2px",
    color: "#333",
    textAlign: "left",
    display: "block",
  };

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <h2>Login</h2>
        <label style={labelStyle} htmlFor="username">
          Username:
        </label>
        <input
          type="text"
          placeholder="Username"
          onChange={handleUser}
          name="username"
          style={inputStyle}
        />
        <label style={labelStyle} htmlFor="password">
          Password:
        </label>
        <input
          type="password"
          placeholder="Password"
          onChange={handlePass}
          name="password"
          style={inputStyle}
        />
        <button
          onClick={check}
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
