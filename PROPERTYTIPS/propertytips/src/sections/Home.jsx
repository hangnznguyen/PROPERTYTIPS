import React from "react";
import { Box } from "@mui/material";
import Background from "../assets/Background.jpg";

function Home() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        zIndex: 2,
      }}
    >
      {/* Brighter overlay using white */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(255,255,255,0.2)", // semi-transparent white = brighter
          zIndex: 3,
        }}
      />

      {/* Content container */}
      <Box
        sx={{
          position: "relative",
          zIndex: 4,
          p: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      />
    </Box>
  );
}

export default Home;
