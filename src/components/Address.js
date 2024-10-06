import React from "react";
import { Box, Typography } from "@mui/material";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapStyles = {
  height: "300px",
  width: "100%",
};

const defaultCenter = {
  lat: 53.33900918944311,
  lng: 15.035625924263645,
};

const Address = () => {
  const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  return (
    <Box
      sx={{
        padding: "20px",
        backgroundColor: "#eee",
        color: "#333",
        textAlign: "center",
        marginBottom: "10px", // Wyśrodkowanie tekstu
      }}
    >
      <Typography
        variant="h2"
        sx={{
          background: "linear-gradient(45deg, #f0c040, #ff9800)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: "bold",
        }}
      >
        Nasza Lokalizacja
      </Typography>
      <Typography variant="body1">
        ul. Kardynała Stefana Wyszyńskiego 19B, 73-110 Stargard
      </Typography>
      <LoadScript googleMapsApiKey={googleMapsApiKey}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={20}
          center={defaultCenter}
        >
          <Marker position={defaultCenter} />
        </GoogleMap>
      </LoadScript>
    </Box>
  );
};

export default Address;
