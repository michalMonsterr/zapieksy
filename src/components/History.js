// components/History.js
import React from "react";
import { Typography, Box } from "@mui/material";
import styled from "styled-components";

const HistoryContainer = styled(Box)`
  padding: 50px 20px;
  background-color: #f7f7f7;
  text-align: center;
`;

const History = () => {
  return (
    <HistoryContainer>
      <Typography variant="h4" style={{ color: "#333", marginBottom: "30px" }}>
        Historia naszego lokalu
      </Typography>
      <Typography
        variant="body1"
        style={{ maxWidth: "600px", margin: "0 auto" }}
      >
        Nasz lokal powstał z miłości do zapiekanek. Od 2010 roku serwujemy
        najsmaczniejsze zapiekanki, używając świeżych składników i tradycyjnych
        receptur.
      </Typography>
    </HistoryContainer>
  );
};

export default History;
