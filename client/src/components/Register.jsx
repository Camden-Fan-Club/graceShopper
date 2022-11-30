import { useState } from "react";
import useUsers from "../hooks/useUser";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { createUser } = useUsers();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createUser({ username, password, email });
    setUsername("");
    setEmail("");
    setPassword("");
    navigate("/");
  };

  return (
    <div>
      <h4>Register User</h4>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          placeholder="name"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="password"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          placeholder="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
