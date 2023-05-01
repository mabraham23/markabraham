import React from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import backgroundVideo from "../assets/background-video.mp4";
import Proficiency from "../components/Proficiency";
import TypingText from "../components/TypingText";
import proficiencies from "./proficiencyData";

export default function Home() {
  return (
    <Box>
      <Box
        sx={{
          flexGrow: 1,
          position: "relative",
          height: "100vh",
        }}
      >
        <video
          muted
          loop
          autoPlay
          style={{
            position: "absolute",
            width: "100%",
            height: "auto",
            zIndex: -1,
          }}
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{
            position: "absolute",
            top: "45%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            height: "100%",
            width: "100%",
            fontWeight: "bold",
            fontSize: "5rem",
            textAlign: "center",
            color: "#fff",
            "@media (max-width: 1200px)": {
              top: "30%",
              fontSize: "4rem",
            },
            "@media (max-width: 900px)": {
              top: "20%",
              fontSize: "3rem",
            },
            "@media (max-width: 600px)": {
              top: "15%",
              fontSize: "2.5rem",
            },
          }}
        >
          <TypingText text="Mark Abraham Software Engineer" />
        </Grid>
      </Box>

      <Box sx={{ padding: 10, paddingLeft: 20 }}>
        <Grid container spacing={10}>
          {proficiencies.map((proficiency, index) => (
            <Grid item xs={12} sm={6} md={5} key={proficiency.title}>
              <Proficiency
                title={proficiency.title}
                description={proficiency.description}
                image={proficiency.image}
                reverse={index % 2 !== 0}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
