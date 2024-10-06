// components/Hero.js
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import styled from "styled-components";

const HeroContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  background-image: url("/images/hero.jpg"); /* dodaj odpowiedni obrazek */
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <Typography
        variant="h2"
        component="h1"
        style={{
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
        }}
      >
        Najlepsze zapiekanki w tym mieście!
      </Typography>
    </HeroContainer>
  );
};

export default Hero;
