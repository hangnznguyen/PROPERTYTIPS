import React, { useState } from "react";
import {
  Typography,
  Box,
  Button,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Card,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import ErrorIcon from "@mui/icons-material/Error";

import bannerImage from "../../assets/bannerinspection.jpg";

const feedbackContent = {
  positive: `
Dear Tenant,

Thank you so much for welcoming me for the inspection today.
I’m really happy to let you know that the inspection went very well—everything looks wonderful. I can see the effort you’ve put into keeping your home tidy and well cared for, and I truly appreciate it.

Keep up the great work, and thank you again for looking after the place so nicely.

Warm regards,
Hang
`,
  improvement: `
Dear Tenant,

It was lovely meeting you today at the property.
I am very pleased to see the effort you’ve put into making the place cosy and tidy—it really shows.

Just a friendly reminder: when you have time, please remove the rangehood filter and soak it in hot water with a little dishwashing liquid for about 30 minutes. Afterwards, you can gently clean it with a soft sponge to remove the oil. If you do this regularly (about once a week), it will be much easier to maintain and prepare for inspections.

Once again, thank you for your time and effort in looking after the property.

Kind regards,
Hang
`,
  recheck: `
Subject: Inspection Follow-Up – Cleaning Required

Dear Tenant,

I hope you are well.

I am not sure if you were aware that I would be coming to do the inspection at your property today. Unfortunately, I was disappointed to see that the house has not met our cleaning standards.

After inspecting the property, I noted the following issues:

The bathroom ceiling is mouldy, and the shower base is very dirty.

The kitchen rangehood is oily, and the oven and stove are greasy.

Your belongings are not kept in a tidy condition.

You are required to remedy these issues within 7 days. To assist you, I would like to suggest some products and cleaning steps:

**Mouldy ceiling and shower:** Use 30 Seconds Mould Spray (approx. $7.90). Spray the affected area, leave for 30 minutes, then wipe with hot water and a towel. For the shower base, spray first, then scrub with a sponge and dishwashing liquid mixed with water.

**Rangehood filter:** Remove and soak in very hot water with dishwashing liquid for 30 minutes, then scrub with a sponge.

**Stove and oven:** Use Mr Muscle Oven and Stove Cleaner. Shake well, spray over greasy areas, leave for 15 minutes, then wipe clean with a towel.

If you have any questions about these steps, please call me and I will guide you.

I would also like to remind you that if you plan to look for a new place in the future, the inspection report will be important. Future property managers may request it, and maintaining a high standard will help build a strong rental record for you. By keeping the property well-maintained, we can ensure a positive rental history for your future.

I look forward to seeing your home restored to its beautiful condition. I am confident you can achieve this.

Kind regards,
Hang
`,
};

const CurrentTenant = () => {
  const [open, setOpen] = useState(false);
  const [currentFeedback, setCurrentFeedback] = useState("");
  const [feedbackType, setFeedbackType] = useState("");

  const handleOpen = (type) => {
    setCurrentFeedback(feedbackContent[type]);
    setFeedbackType(type);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const feedbackItems = [
    {
      type: "positive",
      title: "Positive Feedback",
      description:
        "Compliments for maintaining cleanliness and tidiness, with a PDF summary provided.",
      icon: <CheckCircleIcon color="success" fontSize="large" />,
    },
    {
      type: "improvement",
      title: "Positive Feedback with Recommendations",
      description:
        "Compliments plus useful tips for ongoing maintenance.",
      icon: <LightbulbIcon color="info" fontSize="large" />,
    },
    {
      type: "recheck",
      title: "Negative Feedback – Recheck Notice",
      description:
        "Cleaning standards not met, requiring follow-up action.",
      icon: <ErrorIcon color="error" fontSize="large" />,
    },
  ];

  return (
    <Box sx={{ padding: 4, bgcolor: "white", fontSize: "1.1rem" }}>
      {/* Banner */}
      <Box
        component="img"
        src={bannerImage}
        alt="Inspection Banner"
        sx={{
          width: "50%",
          height: "auto",
          display: "block",
          margin: "0 auto",
          mt: 0,
          mb: 4,
        }}
      />

      {/* Intro */}
      <Typography paragraph sx={{ fontSize: "1.2rem" }}>
        At{" "}
        <Box component="span" sx={{ color: "red", fontWeight: "bold" }}>
          Mission Property Management
        </Box>
        , routine inspections are conducted to ensure tenant comfort and uphold high property standards. These inspections also provide guidance to tenants on maintaining cleaning excellence.
      </Typography>

      <Typography paragraph sx={{ fontSize: "1.2rem" }}>
        After each inspection, tenants receive detailed feedback:
      </Typography>

      {/* Feedback Cards */}
      <Stack spacing={3}>
        {feedbackItems.map((item) => (
          <Card
            key={item.type}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 3,
              boxShadow: 3,
              borderRadius: 2,
              fontSize: "1.1rem",
              transition: "0.3s",
              "&:hover": {
                boxShadow: 6,
                transform: "scale(1.01)",
              },
            }}
          >
            <Box display="flex" alignItems="center" gap={2}>
              {item.icon}
              <Box>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ fontSize: "1.3rem" }}
                >
                  {item.title}
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "1.1rem" }}>
                  {item.description}
                </Typography>
              </Box>
            </Box>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleOpen(item.type)}
              sx={{
                textTransform: "none",
                fontWeight: "bold",
                fontSize: "1rem",
              }}
            >
              View Feedback
            </Button>
          </Card>
        ))}
      </Stack>

      {/* Last Sentence */}
      <Typography
        paragraph
        mt={4}
        sx={{
          fontSize: "1.3rem",
          fontWeight: "bold",
          background: "linear-gradient(90deg, #1976d2, #42a5f5, #64b5f6)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: "gradientShift 4s ease infinite",
          backgroundSize: "300% 300%",
          "@keyframes gradientShift": {
            "0%": { backgroundPosition: "0% 50%" },
            "50%": { backgroundPosition: "100% 50%" },
            "100%": { backgroundPosition: "0% 50%" },
          },
        }}
      >
        Tenants value this inspection feedback as it helps them maintain the
        property to the expected standard and fosters a strong, positive
        relationship with{" "}
        <Box component="span" sx={{ color: "red" }}>
          Mission Property Management
        </Box>.
      </Typography>

      {/* Feedback Dialog */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            fontSize: "1.3rem",
          }}
        >
          {feedbackType === "positive" && <CheckCircleIcon color="success" />}
          {feedbackType === "improvement" && (
            <LightbulbIcon color="info" />
          )}
          {feedbackType === "recheck" && <ErrorIcon color="error" />}
          <span>
            {feedbackType.charAt(0).toUpperCase() +
              feedbackType.slice(1)}{" "}
            Feedback
          </span>
        </DialogTitle>
        <DialogContent sx={{ bgcolor: "#f9f9f9", padding: 3 }}>
          <Typography
            style={{
              whiteSpace: "pre-line",
              fontSize: "1.1rem",
              textAlign: "justify",
            }}
          >
            {currentFeedback}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="primary"
            variant="contained"
            sx={{ fontSize: "1rem" }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CurrentTenant;
