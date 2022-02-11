// Libraries
import React from "react";
import { Grid, Box } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import SearchIcon from "@mui/icons-material/Search";

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
      <Grid container className='search'>
        <Grid item lg={3.5}>
          <Box sx={{ py: 2, px: 4 }} className='location'>
            <label for='location'>Location</label>
            <input
              id='location'
              type='search'
              name='location'
              placeholder='Where are you going?'
            />
          </Box>
        </Grid>
        <Grid item lg={2.5}>
          <Box sx={{ p: 2 }} className='location'>
            <label for='location'>Check in</label>
            <input id='location' type='date' name='check in' />
          </Box>
        </Grid>
        <Grid item lg={2.5}>
          <Box sx={{ p: 2 }} className='location'>
            <label for='location'>Check out</label>
            <input id='location' type='date' name='check out' />
          </Box>
        </Grid>
        <Grid item lg={3.5}>
          <Box sx={{ p: 2 }} className='guest'>
            <div className='location'>
              <label for='guest'>Guest</label>
              <input
                id='guest'
                type='text'
                name='huest'
                placeholder='Add guest'
              />
            </div>
            <span>
              <SearchIcon />
            </span>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default HeaderFixed;
