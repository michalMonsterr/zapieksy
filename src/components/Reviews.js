// src/components/Reviews.js
import React, { useEffect, useState } from "react";
import { db } from "../firebase"; // Upewnij się, że importujesz z prawidłowej ścieżki
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  TextField,
  Typography,
  Rating,
  Grid,
} from "@mui/material"; // Używamy Material-UI

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  const [rating, setRating] = useState(0); // Ustawienie stanu gwiazdek

  // Fetch reviews from Firestore
  useEffect(() => {
    const fetchReviews = async () => {
      const querySnapshot = await getDocs(collection(db, "reviews"));
      const reviewsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReviews(reviewsData);
    };

    fetchReviews();
  }, []);

  // Submit review
  const onSubmit = async (data) => {
    try {
      // Dodajemy ocenę do danych recenzji
      const docRef = await addDoc(collection(db, "reviews"), {
        ...data,
        rating,
      });
      setReviews([...reviews, { id: docRef.id, ...data, rating }]); // Dodajemy nową recenzję do stanu
      reset();
      setRating(0); // Resetujemy rating
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };

  return (
    <Box
      sx={{
        padding: 4,
        backgroundColor: "#f4f4f9",
        borderRadius: 3,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        width: "75%", // Szerokość ustawiona na 75% ekranu
        margin: "50px auto", // Wyśrodkowanie formularza
        maxWidth: "900px", // Maksymalna szerokość dla dużych ekranów
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          background: "linear-gradient(45deg, #f0c040, #ff9800)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: "bold",
        }}
      >
        Dodaj swoją opinię
      </Typography>

      {/* Kontener na formularz */}
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "white",
          padding: "30px",
          borderRadius: 3,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <TextField
          {...register("name")}
          label="Imię"
          fullWidth
          required
          sx={{
            marginBottom: 2,
            "& .MuiInputBase-root": {
              borderRadius: "8px",
            },
            maxWidth: "600px", // Maksymalna szerokość inputu, aby wyglądał dobrze w szerszych widokach
          }}
        />

        <TextField
          {...register("review")}
          label="Twoja opinia"
          multiline
          rows={4}
          fullWidth
          required
          sx={{
            marginBottom: 2,
            "& .MuiInputBase-root": {
              borderRadius: "8px",
            },
            maxWidth: "600px", // Maksymalna szerokość inputu
          }}
        />

        <Rating
          name="controlled-rating"
          value={rating}
          onChange={(event, newValue) => setRating(newValue)}
          sx={{ marginBottom: 3 }}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{
            background: "linear-gradient(45deg, #f0c040, #ff9800)",
            color: "white",
            padding: "10px 20px",
            borderRadius: "20px",
            textTransform: "none",
            fontSize: "16px",
            maxWidth: "600px", // Maksymalna szerokość przycisku
            "&:hover": {
              background: "linear-gradient(45deg, #ff9800, #f0c040)",
            },
          }}
        >
          Dodaj opinię
        </Button>
      </Box>

      {/* Kontener na opinie */}
      <Box sx={{ mt: 4 }}>
        <Grid container spacing={2} justifyContent="center">
          {reviews.map((review) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={review.id}>
              <Box
                sx={{
                  padding: 2,
                  backgroundColor: "#fff",
                  borderRadius: 2,
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                  textAlign: "center",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  {review.name}
                </Typography>
                <Rating name="read-only" value={review.rating} readOnly />
                <Typography variant="body2">{review.review}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Reviews;
