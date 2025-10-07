import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Collapse,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import goodbyeImage from "../../assets/goodbye.jpg"; // your image path

const VacatingTenant = () => {
  const [showProducts, setShowProducts] = useState(false);

  const moveOutSteps = [
    "Provide vacate pack (entry inspection, keys form, chattel list)",
    "Bond refund processed within 15 working days (check signatures carefully)",
    "Recommend trusted cleaners (free quotes)",
    "Final rent/utility statements provided",
    "Collect Fibre/ICP numbers if applicable",
    "Provide tenants with cleaning product list if they prefer DIY cleaning", // ✅ new sentence
  ];

  const cleaningProducts = [
    "Multi-purpose cleaner",
    "Glass cleaner",
    "Bathroom mould remover",
    "Oven cleaner",
    "Vacuum & mop",
    "Disinfectant wipes",
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 4,
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={4}
        sx={{ color: "#0077b6", textAlign: "center" }}
      >
        Vacating Tenant Journey
      </Typography>

      {/* Timeline */}
      <Timeline position="alternate" sx={{ maxWidth: 800 }}>
        {/* Step 1: Move-Out Process */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <CheckCircleIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={6} sx={{ p: 2, borderRadius: 3 }}>
              <Typography variant="h6" fontWeight="bold" mb={1}>
                Move-Out Process
              </Typography>
              <List>
                {moveOutSteps.map((step, index) => (
                  <ListItem key={index} sx={{ py: 0.5 }}>
                    <ListItemIcon>
                      <CheckCircleIcon sx={{ color: "#0077b6" }} />
                    </ListItemIcon>
                    <ListItemText primary={step} />
                  </ListItem>
                ))}
              </List>

              {/* ✅ Button only for cleaning products */}
              <Box sx={{ mt: 2 }}>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => setShowProducts(!showProducts)}
                >
                  {showProducts ? "Hide Products" : "Show Products"}
                </Button>

                <Collapse in={showProducts}>
                  <List dense sx={{ mt: 1 }}>
                    {cleaningProducts.map((product, i) => (
                      <ListItem key={i} sx={{ pl: 2 }}>
                        <ListItemIcon>
                          <CheckCircleIcon sx={{ color: "green" }} />
                        </ListItemIcon>
                        <ListItemText primary={product} />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </Box>
            </Paper>
          </TimelineContent>
        </TimelineItem>

        {/* Step 1.5: Goodbye Image */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="info" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              component="img"
              src={goodbyeImage}
              alt="Goodbye"
              sx={{
                width: "100%",
                maxWidth: 500,
                borderRadius: 3,
                objectFit: "cover",
                boxShadow: "0px 8px 20px rgba(0,0,0,0.3)",
              }}
            />
          </TimelineContent>
        </TimelineItem>

        {/* Step 2: Positive Goodbye */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="success">
              <EmojiEmotionsIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={6} sx={{ p: 2, borderRadius: 3 }}>
              <Typography variant="h6" fontWeight="bold" mb={1}>
                Positive Goodbye
              </Typography>
              <Typography>
                Send a thank-you letter after move-out.  
                A smooth experience builds positive memories.
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>

        {/* Step 3: Long-Term Benefits */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <ThumbUpIcon />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={6} sx={{ p: 2, borderRadius: 3 }}>
              <Typography variant="h6" fontWeight="bold" mb={1}>
                Long-Term Benefits
              </Typography>
              <Typography>
                Positive experiences lead to referrals, returning tenants,  
                and future landlords for your property business.
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
};

export default VacatingTenant;
