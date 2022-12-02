import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import CategoryDropdown from "./CategoryDropdown";

export default function Navbar() {
  const navigate = useNavigate();

  useEffect(() => {
    // call the fetcheMe thunk
  }, []);

  return (
    <div>
      <CategoryDropdown />
      <Link>Sales</Link>
      <Link>My Orders</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/mycart">My Cart</Link>
      <Button
        onClick={() => {
          logoutUser();
          navigate("/");
        }}
      >
        Logout
      </Button>
    </div>
  );
}
