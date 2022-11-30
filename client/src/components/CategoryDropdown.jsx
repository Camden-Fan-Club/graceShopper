import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import { Navigate, useNavigate } from "react-router-dom";

export default function CategoryDropdown() {
  const navigate = useNavigate();
  return (
    <div>
      <DropdownButton
        id="dropdown-button-dark-example2"
        variant="secondary"
        menuVariant="dark"
        title="Categories"
        className="mt-2"
      >
        <Dropdown.Item
          onClick={() => {
            navigate("/categories/1");
          }}
        >
          Outdoor Paint
        </Dropdown.Item>
        <Dropdown.Item
          className="noBull"
          onClick={() => {
            navigate("/categories/2");
          }}
        >
          Tape and Accessories
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            navigate("/categories/3");
          }}
        >
          Brushes
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            navigate("/categories/4");
          }}
        >
          Rollers
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            navigate("/categories/5");
          }}
        >
          Interior Paint
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
}

// {
/* <Dropdown title="Categories">
        <Dropdown.Item
          onClick={() => {
            navigate("/categories/1");
          }}
        >
          Outdoor Paint
        </Dropdown.Item>
        <Dropdown.Item
          className="noBull"
          onClick={() => {
            navigate("/categories/2");
          }}
        >
          Tape and Accessories
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            navigate("/categories/3");
          }}
        >
          Brushes
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            navigate("/categories/4");
          }}
        >
          Rollers
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            navigate("/categories/5");
          }}
        >
          Interior Paint
        </Dropdown.Item>
      </Dropdown> */
// }
