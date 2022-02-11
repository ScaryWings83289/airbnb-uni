// Libraries
import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import SearchIcon from "@mui/icons-material/Search";

// Styles
import "./Header.scss";

// Components
import UserDropdown from "./../UserDropDown";

// Assets
import { ReactComponent as Logo } from "./../../assets/logoDark.svg";

const HeaderScroll = () => {
  return (
    <div className='headerScroll'>
      <div className='logo'>
        <Logo />
        airbnb
      </div>
      <ul className='contents'>
        <div className='searchContainer'>
          <input type='text' placeholder='Start your search' name='search' />
          <button>
            <SearchIcon />
          </button>
        </div>
        <div className='last'>
          <a href='/' className='link-item'>
            Become a host
          </a>
          <a href='/' className='link-item'>
            <LanguageIcon />
          </a>
          <div className='drops'>
            <UserDropdown />
          </div>
        </div>
      </ul>
    </div>
  );
};

export default HeaderScroll;
