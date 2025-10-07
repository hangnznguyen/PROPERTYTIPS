import React from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import bannerImage from "../assets/banner.jpg";
import tenantManagerImage from "../assets/tenantandpropertymanager.jpg";
import expectationImage from "../assets/expectation.jpg";

const Relationships = () => {
  const sections = [
    {
      title: "Tenant & Property Manager",
      bullets: [
        "Educate tenants from Day 1",
        "Set clear boundaries regarding rent, maintenance, and property care",
        "Work with fairness, kindness, and consistency",
        "Stay approachable, responsive, and supportive",
      ],
      image: tenantManagerImage,
    },
  ];

  const tenantsBullets = [
    "Clear guidance on utilities, rules, and responsibilities",
    "Prompt, fair, and consistent communication",
    "Knowledgeable support for troubleshooting issues",
    "Respectful handling of concerns",
  ];

  const landlordsBullets = [
    "Responsible tenants who care for the property",
    "Fewer complaints and emergencies",
    "Smooth transitions during viewings, tenancies, and move-outs",
    "Positive referrals and long-term tenancies",
  ];

  return (
    <Box sx={{ p: 4 }}>
      {/* Banner Section */}
      <Box
        sx={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          p: { xs: 4, md: 6 },
          textAlign: "center",
          borderRadius: 3,
          mb: 6,
          boxShadow: 4,
          color: "#023e8a",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            fontFamily: "'Dancing Script', cursive",
            fontSize: { xs: "2.8rem", md: "4rem" },
            letterSpacing: "2px",
          }}
        >
          Tenant & Landlord
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontWeight: 500,
            fontFamily: "'Dancing Script', cursive",
            fontSize: { xs: "1.5rem", md: "2rem" },
            letterSpacing: "1px",
            mt: 1,
          }}
        >
          Relationships
        </Typography>
      </Box>

      {/* Tenant & Property Manager Section */}
      <Grid container spacing={4} sx={{ mb: 6, alignItems: "center" }}>
        <Grid item xs={12} md={4}>
          <Box
            component="img"
            src={sections[0].image}
            alt={sections[0].title}
            sx={{
              width: "100%",
              borderRadius: 2,
              objectFit: "cover",
              maxHeight: 300,
            }}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper
            elevation={8}
            sx={{
              p: 4,
              borderRadius: 3,
              backgroundColor: "#ffffff",
              boxShadow: "0px 8px 20px rgba(0,0,0,0.3)",
            }}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              gutterBottom
              sx={{ fontSize: { xs: "1.8rem", md: "2rem" } }}
            >
              {sections[0].title}
            </Typography>
            <List>
              {sections[0].bullets.map((bullet, index) => (
                <ListItem key={index} sx={{ py: 0.5 }}>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: "#0077b6" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={bullet}
                    primaryTypographyProps={{
                      fontSize: { xs: "1.2rem", md: "1.4rem" },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>

      {/* Expectation Image Row */}
      <Grid container justifyContent="center" sx={{ mb: 4 }}>
        <Grid item xs={12} md={5} lg={4}>
          <Box
            component="img"
            src={expectationImage}
            alt="Expectations"
            sx={{
              width: "75%", // smaller than before
              maxHeight: 400,
              borderRadius: 3,
              objectFit: "cover",
              boxShadow: "0px 8px 20px rgba(0,0,0,0.3)",
              display: "block",
              margin: "0 auto",
            }}
          />
        </Grid>
      </Grid>

      {/* Two Cards Row */}
      <Grid container spacing={4} sx={{ mb: 6, alignItems: "flex-start" }}>
        {/* Tenants Expect Card */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={8}
            sx={{
              p: 4,
              borderRadius: 3,
              backgroundColor: "#e0f7fa",
              boxShadow: "0px 8px 20px rgba(0,0,0,0.3)",
              height: "100%",
            }}
          >
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              What Tenants Expect
            </Typography>
            <List>
              {tenantsBullets.map((bullet, index) => (
                <ListItem key={index} sx={{ py: 0.5 }}>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: "#0077b6" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={bullet}
                    primaryTypographyProps={{
                      fontSize: { xs: "1.1rem", md: "1.3rem" },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Landlords Expect Card */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={8}
            sx={{
              p: 4,
              borderRadius: 3,
              backgroundColor: "#ffe0b2",
              boxShadow: "0px 8px 20px rgba(0,0,0,0.3)",
              height: "100%",
            }}
          >
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              What Landlords Expect
            </Typography>
            <List>
              {landlordsBullets.map((bullet, index) => (
                <ListItem key={index} sx={{ py: 0.5 }}>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: "#fb8c00" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={bullet}
                    primaryTypographyProps={{
                      fontSize: { xs: "1.1rem", md: "1.3rem" },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Relationships;
