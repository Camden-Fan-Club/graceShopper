import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { createUser } = useAuth();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-1">
      <h4 class="flex justify-center m-8">Register User</h4>
      {error ? (
        <>
          <h3>{error}</h3>
        </>
      ) : null}
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            await createUser({ username, email, password });
          } catch (error) {
            setError("Username is taken");
            setUsername("");
            setPassword("");
          }

          await fetchCart();
          setUsername("");
          setPassword("");
          navigate("/");
        }}
      >
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
        <input
          class="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
          for="grid-password"
          placeholder="Email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="flex items-center mt-3 justify-center">
          <button
            class="bg-gray-600 hover:bg-bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
