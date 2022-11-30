import { useNavigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import CategoryDropdown from "./CategoryDropdown";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div>
      <CategoryDropdown />
      <Link>Sales</Link>
      <Link>My Orders</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link>Logout</Link>
    </div>
  );
}
