import { useState } from "react";
import { API } from "../config/api";

const Register = ({ toggle, handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const users = { email, password, fullName };
      const config = { headers: { "Content-Type": "application/json" } };
      const body = JSON.stringify(users);
      const response = await API.post("/register", body, config);
      console.log(response);
      if (response.data.status === "Success") {
        setMessage("Email successfully registered");
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container-modal1">
        <div className="modal1">
          <h2 className="title-modal1">Register</h2>
          {message && (
            <div className="alert alert-info py-1">
              <small>{message}</small>
            </div>
          )}
          <form className="form-modal1" onSubmit={handleRegister}>
            <input
              className="input-modal1"
              type="text"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="input-modal1"
              type="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className="input-modal1"
              type="text"
              required
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <button className="btn-modal1">Register</button>
          </form>
          <p className="text-modal1">
            Already have an account ? Click{" "}
            <label onClick={toggle} className="text-here">
              here
            </label>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
