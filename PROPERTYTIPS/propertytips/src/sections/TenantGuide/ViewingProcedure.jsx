import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Card,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { keyframes } from "@mui/system";

// ✅ Updated image path for public folder
const viewingImage = "/viewing.jpg";

// Fade-in animation
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ViewingProcedure = () => {
  const sections = [
    {
      title: "Schedule Viewings Immediately",
      content:
        "Viewings are arranged as soon as a property is advertised to minimize phone inquiries.",
    },
    {
      title: "Pre-Viewing Confirmation",
      content:
        "• Call potential tenants at least 3 hours before the viewing (for properties with fewer bookings) to confirm attendance.\n• Ask key questions to determine suitability and avoid unnecessary appointments.",
    },
    {
      title: "Confirm Bookings",
      content: "Confirm all bookings at least 3 hours before the viewing.",
    },
    {
      title: "During the Viewing",
      content:
        "• Gather all attendees together and explain:\n  - Viewing procedures.\n  - What to expect (credit check, background check, meth test, etc.).\n  - Property conditions and any upgrades the owner will provide.\n• Emphasize: tenants must accept the property as is unless upgrades are specified.\n• Answer questions and highlight key features of the property.",
    },
    {
      title: "Application Process",
      content:
        "• Applications must be complete (Part 1 & Part 2) to be processed.\n• Late or incomplete applications will not be considered.\n• Only successful applicants will be contacted within the stated timeframe.",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#f8f9fa", minHeight: "100vh", py: 6 }}>
      <Container maxWidth="md">
        {/* Page Title */}
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            color: "#007acc",
            fontWeight: "bold",
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          Viewing Procedure
        </Typography>

        {/* Page Description */}
        <Typography
          variant="body1"
          align="center"
          sx={{ mb: 5, color: "#555", fontSize: "1.1rem" }}
        >
          A clear and modern process for property viewings — saving time and making
          the experience professional and smooth for everyone.
        </Typography>

        {/* Centered Image */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 5,
            animation: `${fadeIn} 1s ease-in-out`,
          }}
        >
          <Box
            component="img"
            src={viewingImage}
            alt="Viewing"
            sx={{
              width: "100%",
              maxWidth: "500px",
              borderRadius: 3,
              boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
            }}
          />
        </Box>

        {/* Accordion Content */}
        {sections.map((section, index) => (
          <Card
            key={index}
            sx={{
              mb: 3,
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: "0px 4px 20px rgba(0,0,0,0.08)",
              transition: "all 0.3s ease",
              animation: `${fadeIn} 1s ease-in-out`,
              "&:hover": {
                boxShadow: "0px 6px 25px rgba(0,0,0,0.12)",
                transform: "translateY(-2px)",
              },
            }}
          >
            <Accordion
              sx={{
                "&.Mui-expanded": {
                  borderLeft: "4px solid #007acc",
                  background:
                    "linear-gradient(90deg, rgba(240,248,255,0.3), rgba(255,255,255,1))",
                },
                "& .MuiAccordionSummary-root": {
                  backgroundColor: "#f0f8ff",
                  "&:hover": { backgroundColor: "#e6f4ff" },
                  padding: "0.8rem 1rem",
                },
                "& .MuiAccordionSummary-content": {
                  color: "#007acc",
                },
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">{section.title}</Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  color: "#000",
                  backgroundColor: "#fff",
                  padding: "1rem",
                }}
              >
                <Typography
                  sx={{
                    whiteSpace: "pre-line",
                    color: "#000",
                    fontSize: "1rem",
                    lineHeight: "1.8",
                  }}
                >
                  {section.content}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Card>
        ))}
      </Container>
    </Box>
  );
};

export default ViewingProcedure;
