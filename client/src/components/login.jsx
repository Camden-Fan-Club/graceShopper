import { useState } from "react";
import useUsers from "../hooks/useUser";

export default function Login() {
  const { loginUser } = useUsers();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginUser({ username, email, password });
    // fetchCart -> Put in in easy peasy cart state
    setUsername("");
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <h4>Login</h4>
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
          onChange={(e) => setPassword(+e.target.value)}
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
