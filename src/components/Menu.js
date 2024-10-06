// components/Menu.js
import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import styled from "styled-components";

const MenuContainer = styled.div`
  padding: 50px 20px;
  background-color: #f7f7f7;
`;

const MenuSection = styled.div`
  margin-bottom: 50px;
`;

const MenuItem = styled(Card)`
  margin: 20px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
`;

const Menu = () => {
  // Zapiekanki
  const zapiekanki = [
    {
      name: "Klasyk",
      price: "16 zł",
      ingredients: "sos pomidorowy, mozzarella, pieczarki",
      image: "/images/zapiekanka1.jpg", // dodaj odpowiednie obrazki
    },
    {
      name: "Prosie",
      price: "22 zł",
      ingredients: "sos pomidorowy, mozzarella, pieczarki, szynka, salami",
      image: "/images/zapiekanka2.jpg", // dodaj odpowiednie obrazki
    },
    {
      name: "Nachos",
      price: "21 zł",
      ingredients:
        "sos pomidorowy, mozzarella, pieczarki, Nachosy, Jalapeno, cebula prażona, sos serowy",
      image: "/images/zapiekanka2.jpg", // dodaj odpowiednie obrazki
    },
    {
      name: "Gyros",
      price: "24 zł",
      ingredients: "sos pomidorowy, mozzarella, pieczarki, kukurydza, kurczak",
      image: "/images/zapiekanka2.jpg", // dodaj odpowiednie obrazki
    },
    {
      name: "Piekielna",
      price: "25 zł",
      ingredients:
        "sos pomidorowy, mozzarella, pieczarki, Nsalami, Jalapeno, sos ostry",
      image: "/images/zapiekanka2.jpg", // dodaj odpowiednie obrazki
    },
    {
      name: "Tost",
      price: "12 zł",
      ingredients: "ser, pieczarki",
      image: "/images/tost.jpg", // dodaj odpowiednie obrazki
    },
  ];

  const mrozole = [
    {
      name: "Liofilizowane żelki Krążki Brzoskwiniowe",
      price: "23,99 zł",
      image: "/images/mrozole1.jpg", // dodaj odpowiednie obrazki
    },
    {
      name: "Liofilizowane krówki Puff Puffy",
      price: "23,99 zł",
      image: "/images/mrozole2.jpg", // dodaj odpowiednie obrazki
    },
    // dodaj inne dodatki...
  ];

  return (
    <MenuContainer>
      {/* Zapiekanki */}
      <MenuSection>
        <Typography
          variant="h4"
          align="center"
          style={{ color: "#333", marginBottom: "30px" }}
        >
          Nasze Zapiekanki
        </Typography>
        <Grid container justifyContent="center">
          {zapiekanki.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <MenuItem>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <CardContent>
                  <Typography variant="h5">{item.name}</Typography>
                  <Typography variant="body1">{item.ingredients}</Typography>
                  <Typography variant="h6" style={{ color: "#f0c040" }}>
                    {item.price}
                  </Typography>
                </CardContent>
              </MenuItem>
            </Grid>
          ))}
        </Grid>
      </MenuSection>

      <MenuSection>
        <Typography
          variant="h4"
          align="center"
          style={{ color: "#333", marginBottom: "30px" }}
        >
          Mrozole
        </Typography>
        <Grid container justifyContent="center">
          {mrozole.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <MenuItem>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <CardContent>
                  <Typography variant="h5">{item.name}</Typography>
                  <Typography variant="h6" style={{ color: "#f0c040" }}>
                    {item.price}
                  </Typography>
                </CardContent>
              </MenuItem>
            </Grid>
          ))}
        </Grid>
      </MenuSection>
    </MenuContainer>
  );
};

export default Menu;
