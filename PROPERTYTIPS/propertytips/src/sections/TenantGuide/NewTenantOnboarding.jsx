// src/sections/TenantGuide/NewTenantOnboarding.jsx
import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Box,
  Button,
  Modal,
  Card,
  CardMedia,
  CardContent,
  Link,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PeopleIcon from "@mui/icons-material/People";
import DescriptionIcon from "@mui/icons-material/Description";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { keyframes } from "@mui/system";

import exampleVideo from "../../assets/video.mp4";
import dirtyShower from "../../assets/dirtyshower.mp4";
import dirtyToilet from "../../assets/dirtytoilet.mp4";
import rangehood from "../../assets/rangehood.mp4";
import cleaningPhoto from "../../assets/30.jpg";
import mrMusclePhoto from "../../assets/muscle.jpg";
import gifPhoto from "../../assets/gif.jpg";
import tigerPhoto from "../../assets/Tiger.jpg";
import squeezePhoto from "../../assets/Squeeze.jpg";

// Fade-in animation
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const steps = [
  {
    title: "Offer & Contract",
    icon: <DescriptionIcon fontSize="large" color="primary" />,
    content: [
      "Offer and contract are sent together to build trust.",
      "Clear instructions for key collection and move-in arrangements are set up as soon as possible.",
      "Email the information before moving in:",
      [
        "Internet (ONT Fibre number provided if available)",
        "Power setup (ICP number provided)",
        "Cold water: included in rent or invoiced",
        "Hot water/gas setup if applicable",
        "Apartment move-in rules explained",
        "Free Renti service for utility setup with credits",
      ],
    ],
    image: "/sign.jpg",
  },
  {
    title: "First Meeting",
    icon: <PeopleIcon fontSize="large" color="primary" />,
    content: [
      "Build rapport by understanding tenants’ culture and lifestyle.",
      "Actively listen to their needs and explain processes clearly.",
      "Remind tenants to connect utilities (reconnection costs are their responsibility).",
      "First inspection scheduled one month after move-in.",
      "Remind tenants about rent, water, and neighborly responsibilities.",
      "Educate tenants about building rules such as noise, rubbish, alcohol restrictions, smoke alarms (never tamper, cover, or disconnect). Any non-compliance may result in fines or service charges.",
      "Sharing the example video of tenants who keep the place clean and tidy.",
      "Link the current tenants with new tenants who come from the same countries. They can exchange life experiences in New Zealand and make friends.",
      "Sharing the example videos of tenants who do not keep the place nice and tidy. Some common issues include greasy rangehood, dirty shower base, and dirty toilet.",
      "Sharing the cleaning products tenants should have in the house.",
    ],
    image: "/meeting.jpg",
    hasVideo: true,
    hasDirtyVideos: true,
    hasCleaningCard: true,
    hasMrMuscleCard: true,
    hasGifCard: true,
    hasTigerSqueezeCard: true,
  },
  {
    title: "Key Collection",
    icon: <VpnKeyIcon fontSize="large" color="primary" />,
    content: ["Pick up the keys from the office from 10AM to 5.30PM."],
    image: "/key.jpg",
  },
];

const NewTenantOnboarding = () => {
  const [videoOpen, setVideoOpen] = useState(false);
  const [dirtyVideoOpen, setDirtyVideoOpen] = useState(null);
  const [cleaningCardOpen, setCleaningCardOpen] = useState(false);
  const [mrMuscleCardOpen, setMrMuscleCardOpen] = useState(false);
  const [gifCardOpen, setGifCardOpen] = useState(false);
  const [tigerSqueezeCardOpen, setTigerSqueezeCardOpen] = useState(false);

  const handleVideoOpen = () => setVideoOpen(true);
  const handleVideoClose = () => setVideoOpen(false);

  const handleDirtyVideoOpen = (video) => setDirtyVideoOpen(video);
  const handleDirtyVideoClose = () => setDirtyVideoOpen(null);

  const handleCleaningCardOpen = () => setCleaningCardOpen(true);
  const handleCleaningCardClose = () => setCleaningCardOpen(false);

  const handleMrMuscleCardOpen = () => setMrMuscleCardOpen(true);
  const handleMrMuscleCardClose = () => setMrMuscleCardOpen(false);

  const handleGifCardOpen = () => setGifCardOpen(true);
  const handleGifCardClose = () => setGifCardOpen(false);

  const handleTigerSqueezeCardOpen = () => setTigerSqueezeCardOpen(true);
  const handleTigerSqueezeCardClose = () => setTigerSqueezeCardOpen(false);

  return (
    <Box sx={{ backgroundColor: "#f8f9fa", minHeight: "100vh", py: 8 }}>
      <Container maxWidth="lg">
        {/* Page Title */}
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            color: "#007acc",
            fontWeight: "bold",
            fontFamily: "'Roboto', sans-serif",
            mb: 5,
          }}
        >
          New Tenant Onboarding
        </Typography>

        {/* Steps */}
        {steps.map((step, index) => (
          <Box
            key={index}
            sx={{
              mb: 5,
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: "0px 4px 20px rgba(0,0,0,0.08)",
              animation: `${fadeIn} 1s ease-in-out`,
              px: 3,
              py: 2,
              bgcolor: "#ffffff",
            }}
          >
            {/* Photo */}
            <Box
              component="img"
              src={step.image}
              alt={step.title}
              sx={{
                width: "70%",
                height: "auto",
                maxHeight: 300,
                objectFit: "cover",
                borderRadius: 4,
                display: "block",
                mx: "auto",
                mb: 3,
              }}
            />

            {/* Accordion */}
            <Accordion sx={{ fontSize: "1.4rem" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ fontSize: "2rem" }} />}
                sx={{
                  backgroundColor: "#f0f8ff",
                  "&:hover": { backgroundColor: "#e6f4ff" },
                  fontSize: "1.3rem",
                }}
              >
                <Box display="flex" alignItems="center" gap={2}>
                  {step.icon}
                  <Typography variant="h5" fontWeight="bold">
                    {step.title}
                  </Typography>
                </Box>
              </AccordionSummary>

              <AccordionDetails
                sx={{
                  color: "#000",
                  backgroundColor: "#fff",
                  padding: "1rem",
                  lineHeight: 2.2,
                  fontSize: "1.4rem",
                }}
              >
                <Box component="div" sx={{ "& ul": { listStyle: "none", paddingLeft: 0 } }}>
                  <ul>
                    {step.content.map((line, i) =>
                      Array.isArray(line) ? (
                        <Box component="ul" sx={{ pl: 4 }} key={i}>
                          {line.map((subline, subIndex) => (
                            <li key={subIndex} style={{ marginBottom: "1rem" }}>
                              <FiberManualRecordIcon sx={{ color: "#ff9800", fontSize: "1rem" }} />
                              <Typography sx={{ display: "inline" }}>{subline}</Typography>
                            </li>
                          ))}
                        </Box>
                      ) : (
                        <li key={i} style={{ alignItems: "center", display: "flex", gap: "8px", marginBottom: "1rem" }}>
                          <CheckCircleIcon sx={{ color: "#007acc", fontSize: "1.3rem" }} />
                          <Typography sx={{ display: "inline" }}>{line}</Typography>

                          {/* Watch Video button */}
                          {line.includes("Sharing the example video of tenants who keep the place clean and tidy.") && (
                            <Button variant="outlined" startIcon={<PlayCircleIcon />} onClick={handleVideoOpen} size="small">
                              Watch the Video
                            </Button>
                          )}

                          {/* Product Buttons */}
                          {line.includes("Sharing the cleaning products tenants should have in the house") && (
                            <>
                              <Button variant="outlined" size="small" onClick={handleCleaningCardOpen}>
                                30 Seconds
                              </Button>
                              <Button variant="outlined" size="small" onClick={handleMrMuscleCardOpen}>
                                Mr Muscle
                              </Button>
                              <Button variant="outlined" size="small" onClick={handleGifCardOpen}>
                                Gif
                              </Button>
                              <Button variant="outlined" size="small" onClick={handleTigerSqueezeCardOpen}>
                                Tiger's Paw
                              </Button>
                            </>
                          )}
                        </li>
                      )
                    )}

                    {step.hasDirtyVideos && (
                      <li style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "1rem" }}>
                        <Typography sx={{ fontWeight: "bold", fontSize: "1.6rem" }}>
                          Watch examples of common cleaning issues:
                        </Typography>
                        <Button variant="outlined" startIcon={<PlayCircleIcon />} onClick={() => handleDirtyVideoOpen("rangehood")}>
                          Greasy Rangehood
                        </Button>
                        <Button variant="outlined" startIcon={<PlayCircleIcon />} onClick={() => handleDirtyVideoOpen("shower")}>
                          Dirty Shower Base
                        </Button>
                        <Button variant="outlined" startIcon={<PlayCircleIcon />} onClick={() => handleDirtyVideoOpen("toilet")}>
                          Dirty Toilet
                        </Button>
                      </li>
                    )}
                  </ul>
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
        ))}

        {/* All Modals (Videos & Products) */}        {/* Video Modal */}
        <Modal open={videoOpen} onClose={handleVideoClose}>
          <Box sx={{ width: "100vw", height: "100vh", bgcolor: "black", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <video controls autoPlay style={{ maxWidth: "100%", maxHeight: "100%" }}>
              <source src={exampleVideo} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
          </Box>
        </Modal>

        {/* Dirty Video Modal */}
        <Modal open={!!dirtyVideoOpen} onClose={handleDirtyVideoClose}>
          <Box sx={{ width: "100vw", height: "100vh", bgcolor: "black", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <video controls autoPlay style={{ maxWidth: "100%", maxHeight: "100%" }}>
              <source
                src={
                  dirtyVideoOpen === "shower"
                    ? dirtyShower
                    : dirtyVideoOpen === "toilet"
                    ? dirtyToilet
                    : rangehood
                }
                type="video/mp4"
              />
              Your browser does not support HTML5 video.
            </video>
          </Box>
        </Modal>

        {/* 30 Seconds Modal */}
        <Modal open={cleaningCardOpen} onClose={handleCleaningCardClose}>
          <Box sx={{ p: 4, bgcolor: "white", maxWidth: 800, margin: "auto", mt: 10, borderRadius: 2 }}>
            <Card sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 2 }}>
              <CardMedia component="img" sx={{ width: { xs: "100%", md: 300 }, objectFit: "cover" }} image={cleaningPhoto} alt="30 Seconds Mould Remover" />
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom fontWeight="bold">
                  30 Seconds Mould & Mildew Remover
                </Typography>
                <Typography variant="body1" gutterBottom sx={{ fontSize: "1.2rem" }}>
                  Remove mould from ceiling, shower base, wall.
                </Typography>
                <Link href="https://www.youtube.com/watch?v=aaWirIDGr_U" target="_blank" rel="noopener" sx={{ fontSize: "1.1rem" }}>
                  Watch Video
                </Link>
              </CardContent>
            </Card>
          </Box>
        </Modal>

        {/* Mr Muscle Modal */}
        <Modal open={mrMuscleCardOpen} onClose={handleMrMuscleCardClose}>
          <Box sx={{ p: 4, bgcolor: "white", maxWidth: 800, margin: "auto", mt: 10, borderRadius: 2 }}>
            <Card sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 2 }}>
              <CardMedia component="img" sx={{ width: { xs: "100%", md: 300 }, objectFit: "cover" }} image={mrMusclePhoto} alt="Mr Muscle Cleaning Product" />
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom fontWeight="bold">
                  Mr Muscle Cleaning Product
                </Typography>
                <Typography variant="body1" gutterBottom sx={{ fontSize: "1.2rem" }}>
                  Removes grease in oven, stove, and rangehood.
                </Typography>
                <Link href="https://www.youtube.com/shorts/-2Y-Z1puIy8" target="_blank" rel="noopener" sx={{ fontSize: "1.1rem" }}>
                  Watch Video 1
                </Link>
                <br />
                <Link href="https://www.youtube.com/watch?v=DGDa_2pCDTc" target="_blank" rel="noopener" sx={{ fontSize: "1.1rem" }}>
                  Watch Video 2
                </Link>
                <br />
                <Link href="https://www.youtube.com/watch?v=tfAUvfEYkqY" target="_blank" rel="noopener" sx={{ fontSize: "1.1rem" }}>
                  Watch Video 3
                </Link>
              </CardContent>
            </Card>
          </Box>
        </Modal>

        {/* Gif Modal */}
        <Modal open={gifCardOpen} onClose={handleGifCardClose}>
          <Box sx={{ p: 4, bgcolor: "white", maxWidth: 800, margin: "auto", mt: 10, borderRadius: 2 }}>
            <Card sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 2 }}>
              <CardMedia component="img" sx={{ width: { xs: "100%", md: 300 }, objectFit: "cover" }} image={gifPhoto} alt="Gif Cleaning Product" />
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom fontWeight="bold">
                  Gif Cleaning Product
                </Typography>
                <Typography variant="body1" gutterBottom sx={{ fontSize: "1.2rem" }}>
                  Remove black marks on wall, stains on cabinets, steel surfaces, and bathroom glass.
                </Typography>
                <Link href="https://www.tiktok.com/@jason.cleans/video/7431896275462720784" target="_blank" rel="noopener" sx={{ fontSize: "1.1rem" }}>
                  Watch Video
                </Link>
              </CardContent>
            </Card>
          </Box>
        </Modal>

        {/* Tiger's Paw and Squeeze Modal */}
        <Modal open={tigerSqueezeCardOpen} onClose={handleTigerSqueezeCardClose}>
          <Box sx={{ p: 4, bgcolor: "white", maxWidth: 900, margin: "auto", mt: 10, borderRadius: 2 }}>
            <Card sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 2 }}>
              <CardMedia component="img" sx={{ width: { xs: "100%", md: 300 }, objectFit: "cover" }} image={tigerPhoto} alt="Tiger's Paw ShowerGlass" />
              <CardMedia component="img" sx={{ width: { xs: "100%", md: 300 }, objectFit: "cover" }} image={squeezePhoto} alt="Squeeze Cleaning Glass" />
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom fontWeight="bold">
                  Tiger's Paw ShowerGlass and Squeeze
                </Typography>
                <Typography variant="body1" gutterBottom sx={{ fontSize: "1.2rem" }}>
                  Remove calcium deposits on shower glass.
                </Typography>
                <Link href="https://www.youtube.com/watch?v=lfqVLJ_J6jA" target="_blank" rel="noopener" sx={{ fontSize: "1.1rem" }}>
                  Watch Video
                </Link>
              </CardContent>
            </Card>
          </Box>
        </Modal>
      </Container>
    </Box>
  );
};

export default NewTenantOnboarding;

