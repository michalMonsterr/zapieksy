// components/Footer.js
import React from "react";
import { Typography, Link } from "@mui/material";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Typography variant="body1" style={{ color: "#f0c040" }}>
        © 2024 Stargardzkie Zapieksy. Wszystkie prawa zastrzeżone.
      </Typography>
      <Typography variant="body2">
        Stworzono z miłością do zapiekanek przez{" "}
        <Link
          href="https://github.com/michalMonsterr"
          color="inherit"
          target="_blank"
        >
          Michał Tomasik
        </Link>
        .
      </Typography>
    </FooterWrapper>
  );
};

export default Footer;
