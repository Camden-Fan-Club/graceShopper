import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";
import { Link } from "react-router-dom";

export default function Login() {
  const { loginUser } = useAuth();
  const { fetchCart } = useCart();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-1">
      <h4 class="flex justify-center m-8">Login to get started</h4>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            await loginUser({ username, email, password });
          } catch (error) {
            setError("Invalid Credentials");
            setUsername("");
            setPassword("");
          }

          await fetchCart();
          setUsername("");
          setPassword("");
          navigate("/");
        }}
      >
        {error ? (
          <>
            <h3>{error}</h3>
          </>
        ) : null}
        <div class="flex flex-wrap -mx-3 mb-6 ">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              class="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              for="grid-first-name"
              placeholder="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <input
              class="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              for="grid-last-name"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center mt-3 justify-center">
          <button
            class="bg-gray-600 hover:bg-bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
        </div>
        <a class="flex justify-center m-8">
          Don't have an account? <Link to="/register">Sign up</Link>{" "}
        </a>
      </form>
    </div>
  );
}
