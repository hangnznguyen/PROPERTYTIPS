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
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PeopleIcon from "@mui/icons-material/People";
import DescriptionIcon from "@mui/icons-material/Description";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { keyframes } from "@mui/system";

import exampleVideo from "../../assets/video.mp4";
import dirtyShower from "../../assets/dirtyshower.mp4";
import dirtyToilet from "../../assets/dirtytoilet.mp4";
import rangehood from "../../assets/rangehood.mp4";

import cleaningPhoto from "../../assets/30.jpg";
import mrMusclePhoto from "../../assets/muscle.jpg";
import gifPhoto from "../../assets/gif.jpg";
import tigerPhoto from "../../assets/Squeeze.jpg";

import meterPhoto from "../../assets/meter.jpg";
import mainSwitchPhoto from "../../assets/mainswitch.jpg";
import behaviorPhoto from "../../assets/behavior.jpg";
import packagePhoto from "../../assets/package.jpg";

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
      "Sharing the example video of tenants who keep the place clean and tidy.",
      "Remind tenants about rent, water, and neighborly responsibilities.",
      "Educate tenants about building rules such as noise, rubbish, alcohol restrictions, smoke alarms (never tamper, cover, or disconnect). Any non-compliance may result in fines or service charges.",
      "Show tenants where to locate the water meter and main power switch as soon as they move in.",
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
  const [meterOpen, setMeterOpen] = useState(false);
  const [mainSwitchOpen, setMainSwitchOpen] = useState(false);
  const [behaviorOpen, setBehaviorOpen] = useState(false);
  const [packageOpen, setPackageOpen] = useState(false);

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
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ color: "#007acc", fontWeight: "bold", fontFamily: "'Roboto', sans-serif", mb: 5 }}
        >
          New Tenant Onboarding
        </Typography>

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

              <AccordionDetails sx={{ color: "#000", backgroundColor: "#fff", padding: "1rem", lineHeight: 2.2, fontSize: "1.4rem" }}>
                <Box component="div" sx={{ "& ul": { listStyle: "none", paddingLeft: 0 } }}>
                  <ul>
                    {step.content.map((line, i) => (
                      <React.Fragment key={i}>
                        <li style={{ display: "flex", alignItems: "flex-start", gap: "8px", marginBottom: "1rem" }}>
                          <CheckCircleIcon sx={{ color: "#007acc", fontSize: "1.3rem", flexShrink: 0, mt: "3px" }} />

                          <Typography sx={{ display: "block", flex: 1, lineHeight: 1.6, wordBreak: "break-word" }}>
                            {line}
                          </Typography>

                          {line.includes("First inspection scheduled one month after move-in.") && (
                            <Button variant="outlined" startIcon={<PlayCircleIcon />} onClick={handleVideoOpen} size="small">
                              Watch Example Video
                            </Button>
                          )}

                          {line.includes("Show tenants where to locate the water meter") && (
                            <>
                              <Button variant="outlined" size="small" onClick={() => setMeterOpen(true)}>
                                Water Meter Location
                              </Button>
                              <Button variant="outlined" size="small" onClick={() => setMainSwitchOpen(true)}>
                                Main Switch Location
                              </Button>
                            </>
                          )}

                          {line.includes("Educate tenants about building rules") && (
                            <Box display="flex" gap={2} mt={1} flexWrap="wrap">
                              <Button variant="outlined" href="/Breachnoise.pdf" target="_blank" rel="noopener" size="small">
                                Breach Noise PDF
                              </Button>
                              <Box
                                component="img"
                                src={behaviorPhoto}
                                alt="Behavior"
                                sx={{ width: 100, cursor: "pointer", borderRadius: 2 }}
                                onClick={() => setBehaviorOpen(true)}
                              />
                              <Box
                                component="img"
                                src={packagePhoto}
                                alt="Package"
                                sx={{ width: 100, cursor: "pointer", borderRadius: 2 }}
                                onClick={() => setPackageOpen(true)}
                              />
                            </Box>
                          )}

                          {line.includes("Sharing the cleaning products tenants should have in the house") && (
                            <Box display="flex" gap={2} mt={1} flexWrap="wrap">
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
                            </Box>
                          )}
                        </li>

                        {i === step.content.length - 1 && step.hasDirtyVideos && (
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

                            <Typography sx={{ fontWeight: "bold", fontSize: "1.6rem", mt: 3 }}>
                              Example: Entry Inspection Report
                            </Typography>

                            <Button
                              variant="outlined"
                              href="/SampleEntryinspection.pdf"
                              target="_blank"
                              rel="noopener"
                            >
                              View Sample Entry Inspection Report
                            </Button>

                            <Typography sx={{ fontWeight: "bold", fontSize: "1.6rem", mt: 3 }}>
                              Example: Smoke Alarm Service Report
                            </Typography>

                            <Button
                              variant="outlined"
                              href="/Smokealarm.pdf"
                              target="_blank"
                              rel="noopener"
                            >
                              View Smoke Alarm Breach invoice
                            </Button>
                          </li>
                        )}
                      </React.Fragment>
                    ))}
                  </ul>
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
        ))}

        {/* Example Video */}
        <Modal open={videoOpen} onClose={handleVideoClose}>
          <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 2, maxWidth: '90%', maxHeight: '90%' }}>
            <video src={exampleVideo} controls style={{ width: '100%', height: 'auto' }} />
          </Box>
        </Modal>

        {/* Dirty Videos */}
        <Modal open={dirtyVideoOpen !== null} onClose={handleDirtyVideoClose}>
          <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 2, maxWidth: '90%', maxHeight: '90%' }}>
            {dirtyVideoOpen === "rangehood" && <video src={rangehood} controls style={{ width: '100%', height: 'auto' }} />}
            {dirtyVideoOpen === "shower" && <video src={dirtyShower} controls style={{ width: '100%', height: 'auto' }} />}
            {dirtyVideoOpen === "toilet" && <video src={dirtyToilet} controls style={{ width: '100%', height: 'auto' }} />}
          </Box>
        </Modal>

        {/* Cleaning Product Modals */}
        <Modal open={cleaningCardOpen} onClose={handleCleaningCardClose}>
          <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 3, maxWidth: 400, maxHeight: '90%', overflowY: 'auto', borderRadius: 2 }}>
            <img src={cleaningPhoto} alt="30 Seconds" style={{ width: '100%', height: 'auto', borderRadius: 4 }} />
            <Typography sx={{ mt: 2, fontWeight: 'bold', fontSize: '1.2rem' }}>30 Seconds</Typography>
            <Typography sx={{ mt: 1 }}>Description: A powerful cleaner used for removing outdoor grime, mold, and mildew from surfaces.</Typography>
            <Typography sx={{ mt: 1 }}>Suggested Usage: Ideal for showers, bathrooms, and outdoor surfaces.</Typography>
            <Button variant="outlined" href="https://www.youtube.com/watch?v=aaWirIDGr_U" target="_blank" sx={{ mt: 2 }}>
              Watch Video
            </Button>
          </Box>
        </Modal>

        <Modal open={mrMuscleCardOpen} onClose={handleMrMuscleCardClose}>
          <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 3, maxWidth: 400, maxHeight: '90%', overflowY: 'auto', borderRadius: 2 }}>
            <img src={mrMusclePhoto} alt="Mr Muscle" style={{ width: '100%', height: 'auto', borderRadius: 4 }} />
            <Typography sx={{ mt: 2, fontWeight: 'bold', fontSize: '1.2rem' }}>Mr Muscle</Typography>
            <Typography sx={{ mt: 1 }}>Description: A well-known bathroom and kitchen cleaner designed to dissolve grease, soap scum, and dirt.</Typography>
            <Typography sx={{ mt: 1 }}>Suggested Usage: Use for tiles, sinks, rangehoods, and stainless steel surfaces.</Typography>
            <Button variant="outlined" href="https://www.tiktok.com/@outgrownourhome/video/7350027433329823008?lang=en" target="_blank" sx={{ mt: 2 }}>
              Watch Video
            </Button>
          </Box>
        </Modal>

        <Modal open={gifCardOpen} onClose={handleGifCardClose}>
          <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 3, maxWidth: 400, maxHeight: '90%', overflowY: 'auto', borderRadius: 2 }}>
            <img src={gifPhoto} alt="Gif" style={{ width: '100%', height: 'auto', borderRadius: 4 }} />
            <Typography sx={{ mt: 2, fontWeight: 'bold', fontSize: '1.2rem' }}>Gif</Typography>
            <Typography sx={{ mt: 1 }}>Description: Cream cleanser effective on stubborn stains, perfect for sinks, stoves, and counters.</Typography>
            <Typography sx={{ mt: 1 }}>Suggested Usage: Apply a small amount on a sponge and scrub gently for shiny results.</Typography>
            <Button variant="outlined" href="https://www.youtube.com/watch?v=70MP0GU06OM" target="_blank" sx={{ mt: 2 }}>
              Watch Video
            </Button>
          </Box>
        </Modal>

        <Modal open={tigerSqueezeCardOpen} onClose={handleTigerSqueezeCardClose}>
          <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 3, maxWidth: 400, maxHeight: '90%', overflowY: 'auto', borderRadius: 2 }}>
            <img src={tigerPhoto} alt="Tiger's Paw" style={{ width: '100%', height: 'auto', borderRadius: 4 }} />
            <Typography sx={{ mt: 2, fontWeight: 'bold', fontSize: '1.2rem' }}>Tiger's Paw</Typography>
            <Typography sx={{ mt: 1 }}>Description: A concentrated cleaning gel ideal for tough grease and grime.</Typography>
            <Typography sx={{ mt: 1 }}>Suggested Usage: Apply directly to dirty spots; rinse with warm water.</Typography>
            <Button variant="outlined" href="https://www.youtube.com/watch?v=xmaJ7OcusPY" target="_blank" sx={{ mt: 2 }}>
              Watch Video
            </Button>
          </Box>
        </Modal>

        {/* Meter & Main Switch */}
        <Modal open={meterOpen} onClose={() => setMeterOpen(false)}>
          <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 2, maxWidth: '90%', maxHeight: '90%' }}>
            <img src={meterPhoto} alt="Water Meter" style={{ width: '100%', height: 'auto' }} />
          </Box>
        </Modal>

        <Modal open={mainSwitchOpen} onClose={() => setMainSwitchOpen(false)}>
          <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 2, maxWidth: '90%', maxHeight: '90%' }}>
            <img src={mainSwitchPhoto} alt="Main Switch" style={{ width: '100%', height: 'auto' }} />
          </Box>
        </Modal>

        {/* Behavior & Package Photo Modals */}
        <Modal open={behaviorOpen} onClose={() => setBehaviorOpen(false)}>
          <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 2, maxWidth: '90%', maxHeight: '90%' }}>
            <img src={behaviorPhoto} alt="Behavior" style={{ width: '100%', height: 'auto' }} />
          </Box>
        </Modal>

        <Modal open={packageOpen} onClose={() => setPackageOpen(false)}>
          <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 2, maxWidth: '90%', maxHeight: '90%' }}>
            <img src={packagePhoto} alt="Package" style={{ width: '100%', height: 'auto' }} />
          </Box>
        </Modal>
      </Container>
    </Box>
  );
};

export default NewTenantOnboarding;