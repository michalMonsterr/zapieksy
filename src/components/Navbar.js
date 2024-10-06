// components/Navbar.js
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "#2b2a28" }}>
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
          <img
            src="/images/logo.jpg"
            alt="Logo"
            style={{ width: "5%", height: "5%", marginRight: "10px" }}
          />{" "}
          {/* Logo */}
          <Typography
            variant="h6"
            style={{
              flexGrow: 1,
              textAlign: "center",
              color: "#fff",
              fontSize: "45px",
            }}
          >
            Stargardzkie Zapieksy
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
