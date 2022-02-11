// Libraries
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";

// Styles
import "./UserDropdown.scss";

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggling Dropdown
  const toggling = () => setIsOpen(!isOpen);

  // Dropdown Options
  const options = [
    "Sign up",
    "Log in",
    "Host your home",
    "Host an experience",
    "Help",
  ];

  return (
    <div className='selectContainer'>
      <div className='title' onClick={toggling}>
        <MenuIcon />
        <span>
          <PersonIcon />
        </span>
      </div>
      {isOpen && (
        <div className='dropdownListContainer'>
          <ul>
            {options.map((data, index) => (
              <li key={`item-${index + 1}`}>{data}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
