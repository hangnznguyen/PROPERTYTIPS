import React, { useState } from "react";
import { Box, List, ListItem, ListItemText, Collapse, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Logo from "../assets/logo.png";

const Sidebar = ({ activeSection, setActiveSection }) => {
  const [tenantOpen, setTenantOpen] = useState(false);

  const handleTenantClick = () => setTenantOpen(!tenantOpen);

  const mainBoxStyle = {
    borderRadius: 2,
    boxShadow: "0 6px 10px rgba(0,0,0,0.25)",
    bgcolor: "#E3F2FD",
    "&:hover": {
      boxShadow: "0 8px 16px rgba(0,0,0,0.35)",
      cursor: "pointer",
    },
    py: 1.5,
    px: 2,
  };

  const nestedBoxStyle = {
    ...mainBoxStyle,
    pl: 4,
    bgcolor: "#F1F8E9",
  };

  const handleClick = (section) => {
    console.log("Sidebar click:", section);
    setActiveSection(section);
  };

  return (
    <Box
      width="250px"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      bgcolor="#E3F2FD"
      p={2}
    >
      {/* Logo */}
      <Box mb={2} textAlign="center">
        <img
          src={Logo}
          alt="Logo"
          style={{ width: "95%", borderRadius: 8 }}
        />
      </Box>

      {/* Navigation */}
      <List component="nav" sx={{ width: "100%" }}>
        <ListItem button sx={{ ...mainBoxStyle, mb: 2 }} selected={activeSection === "home"} onClick={() => handleClick("home")}>
          <ListItemText primary="Home" primaryTypographyProps={{ fontSize: "1.2rem", fontWeight: "bold" }} />
        </ListItem>

        <ListItem button sx={{ ...mainBoxStyle, mb: 2 }} onClick={handleTenantClick}>
          <ListItemText primary="Tenant Guide" primaryTypographyProps={{ fontSize: "1.2rem", fontWeight: "bold" }} />
          {tenantOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>

        <Collapse in={tenantOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ ...nestedBoxStyle, mb: 2 }} selected={activeSection === "viewingProcedure"} onClick={() => handleClick("viewingProcedure")}>
              <ListItemText primary="Viewing Procedure" primaryTypographyProps={{ fontSize: "1.1rem", fontWeight: "bold" }} />
            </ListItem>

            <ListItem button sx={{ ...nestedBoxStyle, mb: 2 }} selected={activeSection === "newTenant"} onClick={() => handleClick("newTenant")}>
              <ListItemText primary="New Tenant Onboarding" primaryTypographyProps={{ fontSize: "1.1rem", fontWeight: "bold" }} />
            </ListItem>

            <ListItem button sx={{ ...nestedBoxStyle, mb: 2 }} selected={activeSection === "currentTenant"} onClick={() => handleClick("currentTenant")}>
              <ListItemText primary="Current Tenant" primaryTypographyProps={{ fontSize: "1.1rem", fontWeight: "bold" }} />
            </ListItem>

            <ListItem button sx={{ ...nestedBoxStyle, mb: 2 }} selected={activeSection === "vacatingTenant"} onClick={() => handleClick("vacatingTenant")}>
              <ListItemText primary="Vacating Tenant" primaryTypographyProps={{ fontSize: "1.1rem", fontWeight: "bold" }} />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button sx={{ ...mainBoxStyle, mb: 2 }} selected={activeSection === "troubleshooting"} onClick={() => handleClick("troubleshooting")}>
          <ListItemText primary="Troubleshooting" primaryTypographyProps={{ fontSize: "1.2rem", fontWeight: "bold" }} />
        </ListItem>

        <ListItem button sx={{ ...mainBoxStyle, mb: 2 }} selected={activeSection === "relationships"} onClick={() => handleClick("relationships")}>
          <ListItemText primary="Building Strong Relationships" primaryTypographyProps={{ fontSize: "1.2rem", fontWeight: "bold" }} />
        </ListItem>
      </List>

      {/* Slogan */}
      <Box mt={0} textAlign="center" px={1}>
        <Typography sx={{
          fontWeight: "bold",
          fontSize: "1.4rem",
          fontFamily: "'Poppins', sans-serif",
          background: "linear-gradient(270deg, #FF6B6B, #FFD93D, #6BCB77, #FF6B6B)",
          backgroundSize: "600% 600%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: 0.5,
          display: "inline-block",
          animation: "gradientMove 8s ease infinite, fadeSlide 1.5s ease-in-out 0s infinite alternate",
        }}>
          Fair - Kind - Caring
        </Typography>
      </Box>
    </Box>
  );
};

export default Sidebar;
