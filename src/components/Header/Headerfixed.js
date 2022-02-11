// Libraries
import React from "react";
import LanguageIcon from "@mui/icons-material/Language";

// Styles
import "./Header.scss";

// Components
import UserDropdown from "./../UserDropDown";

// Assets
import { ReactComponent as Logo } from "./../../assets/logo.svg";

// Links
const links = [
  { label: "Places to stay", to: "#" },
  { label: "Experiences", to: "#" },
  { label: "Online Experiences", to: "#" },
];

const HeaderFixed = () => {
  return (
    <>
      <div className='headerFixed'>
        <div className='logo'>
          <Logo />
          airbnb
        </div>
        <ul className='contents'>
          <div className='links'>
            {links.map((data, index) => (
              <a key={`link${index + 1}`} href={data.to}>
                {data.label}
              </a>
            ))}
          </div>
          <div className='last'>
            <a href='/' className='link-item'>
              Become a host
            </a>
            <a href='/' className='link-item'>
              <LanguageIcon />
            </a>
            <UserDropdown />
          </div>
        </ul>
      </div>
      <div className='search'>Hello</div>
    </>
  );
};

export default HeaderFixed;
