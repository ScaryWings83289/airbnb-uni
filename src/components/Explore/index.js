// Library
import React from "react";
import { Grid, Box } from "@mui/material";

// Styles
import "./Explore.scss";

// Assets
import Mumbai from "./../../assets/mumbai.png";
import Lonavla from "./../../assets/lonavla.png";
import Manali from "./../../assets/manali.png";
import Calcutta from "./../../assets/calcutta.png";

// Places
const places = [
  { image: Mumbai, label: "Mumbai", description: "15-min drive" },
  { image: Lonavla, label: "Lonavla", description: "1.5-hour drive" },
  { image: Manali, label: "Calangute", description: "7.5-hour drive" },
  { image: Calcutta, label: "Candolim", description: "7.5-hour drive" },
  { image: Mumbai, label: "Saligaon", description: "7.5-hour drive" },
  { image: Lonavla, label: "Baga", description: "7.5-hour drive" },
  { image: Manali, label: "Anjuna", description: "7-hour drive" },
  { image: Calcutta, label: "Arpora", description: "7.5-hour drive" },
];

const Explore = () => {
  return (
    <Grid container className='explore'>
      {places.map((data, index) => (
        <Grid key={`item${index + 1}`} item lg={3} md={4} xs={6}>
          <Box sx={{ p: 2 }} className='item'>
            <img src={data.image} alt={data.label} />
            <div className='description'>
              <span>{data.label}</span>
              <span>{data.description}</span>
            </div>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Explore;
