import React, { useState, useEffect, useRef } from "react";
import { Box, IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

import Sidebar from "./components/Sidebar";

import Home from "./sections/Home";
import NewTenantOnboarding from "./sections/TenantGuide/NewTenantOnboarding";
import CurrentTenant from "./sections/TenantGuide/CurrentTenant";
import VacatingTenant from "./sections/TenantGuide/VacatingTenant";
import Troubleshooting from "./sections/Troubleshooting";
import Relationships from "./sections/Relationships";
import ViewingProcedure from "./sections/TenantGuide/ViewingProcedure";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Audio from public folder
  const softPianoUrl = "/assets/softmusic.mp3";

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0; // start from 0 for fade-in
      audioRef.current.loop = true;

      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);

          // Fade-in effect
          let volume = 0;
          const fadeInterval = setInterval(() => {
            if (!audioRef.current) return;
            if (volume < 0.2) {
              volume += 0.01;
              audioRef.current.volume = volume;
            } else {
              clearInterval(fadeInterval);
            }
          }, 100);
        })
        .catch((err) =>
          console.log(
            "Autoplay blocked. Click anywhere on the page to start music.",
            err
          )
        );
    }
  }, [activeSection]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      // Fade out before pausing
      let volume = audioRef.current.volume;
      const fadeOut = setInterval(() => {
        if (audioRef.current && volume > 0) {
          volume -= 0.02;
          if (volume < 0) volume = 0;
          audioRef.current.volume = volume;
        } else {
          clearInterval(fadeOut);
          audioRef.current.pause();
          setIsPlaying(false);
        }
      }, 50);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return <Home />;
      case "newTenant":
        return <NewTenantOnboarding />;
      case "currentTenant":
        return <CurrentTenant />;
      case "vacatingTenant":
        return <VacatingTenant />;
      case "troubleshooting":
        return <Troubleshooting />;
      case "relationships":
        return <Relationships />;
      case "viewingProcedure":
        return <ViewingProcedure />;
      default:
        return <Home />;
    }
  };

  return (
    <Box display="flex" minHeight="100vh">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <Box
        flex={1}
        p={3}
        overflow="auto"
        sx={{
          position: "relative",
          bgcolor: activeSection === "home" ? "transparent" : "#fff",
        }}
      >
        <Box sx={{ position: "relative", zIndex: 2 }}>{renderContent()}</Box>
      </Box>

      {/* Background Music Button */}
      <Box
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 1000,
        }}
      >
        <audio ref={audioRef} src={softPianoUrl} controls style={{ display: "none" }} />
        <IconButton
          color="primary"
          onClick={togglePlay}
          sx={{
            backgroundColor: "#fff",
            boxShadow: 2,
            border: "1px solid #000",
          }}
        >
          {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </IconButton>
      </Box>
    </Box>
  );
}

export default App;
