import React from "react";
import {
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  Avatar,
  Link,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WaterIcon from "@mui/icons-material/Opacity";
import HotTubIcon from "@mui/icons-material/HotTub";
import TapIcon from "@mui/icons-material/Plumbing";
import DrainIcon from "@mui/icons-material/Build";
import EmergencyIcon from "@mui/icons-material/ReportProblem";
import KitchenIcon from "@mui/icons-material/Kitchen";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import PestControlIcon from "@mui/icons-material/PestControl";
import PowerIcon from "@mui/icons-material/Power";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import DeleteIcon from "@mui/icons-material/Delete";

const Troubleshooting = () => {
  const sections = [
    {
      title: "No Hot Water",
      icon: <HotTubIcon />,
      color: "#ff7043",
      content: (
        <>
          • Gas Systems: Check gas meter or LPG bottle is ON. Replace if empty.  
          Leaking cylinder → water escapes → system may not heat properly.<br /><br />
          • Electric Systems: Check breaker & hot water switch. Check if tank is empty.<br /><br />
          • Tips: Heavy usage can empty the tank → wait several hours to reheat.  
          Off-peak systems may only reheat overnight.<br /><br />
          • Still no hot water after 24 hrs? Contact your property manager.
        </>
      ),
    },
    {
      title: "No Water",
      icon: <WaterIcon />,
      color: "#90caf9", // lighter blue color
      content: "Check your water meter. Ask neighbors if they are affected. Call Watercare if needed.",
    },
    {
      title: "Tap Won’t Turn Off",
      icon: <TapIcon />,
      color: "#66bb6a",
      content: "Shut off mains water immediately. Inform property manager.",
    },
    {
      title: "Blocked Drain",
      icon: <DrainIcon />,
      color: "#ab47bc",
      content: "Remove debris or use a plunger. Tenant-caused blockage → repair costs may apply.",
    },
    {
      title: "Lockouts & Emergencies",
      icon: <EmergencyIcon />,
      color: "#ef5350",
      content: (
        <>
          • Lockouts: During Working Hours: Borrow keys from the office.<br /><br />
          • After Hours: Call a locksmith (tenant pays). Apartment Access Cards: Contact building manager/reception.<br /><br />
          • Emergencies: Fire or Break-in → Call 111 immediately.<br /><br />
          • Major Water Leak → Call Watercare at (09) 442 2222 before contacting the property manager.<br /><br />
          • Smoke Alarms → Never tamper, cover, or disconnect.
        </>
      ),
    },
    {
      title: "No Power in a Room",
      icon: <PowerIcon />,
      color: "#ffb74d",
      content: (
        <>
          • Check the circuit breaker or fuse box.<br /><br />
          • Test other outlets in the room.<br /><br />
          • Ensure the appliance is plugged in properly.
        </>
      ),
    },
    {
      title: "Fridge Not Cooling",
      icon: <AcUnitIcon />,
      color: "#4db6ac",
      content: (
        <>
          • Check if it’s plugged in properly.<br /><br />
          • Ensure temperature control is set correctly.<br /><br />
          • Check if vents inside the fridge are blocked.<br /><br />
          • Clean condenser coils if accessible.
        </>
      ),
    },
    {
      title: "Oven & Stove Not Working",
      icon: <KitchenIcon />,
      color: "#ffa726",
      content: (
        <>
          • Check power/gas – Ensure the appliance is plugged in or the gas supply is turned on.<br /><br />
          • Check settings – Make sure the oven/stove mode and temperature or burner setting are correct.<br /><br />
          • Check timer – Ensure the timer isn’t preventing operation. Reset if necessary.
        </>
      ),
    },
    {
      title: "Water Smell",
      icon: <WaterDropIcon />,
      color: "#4fc3f7",
      content: (
        <>
          • Run the water – Let hot and cold water run for a few minutes in all taps to flush the system.<br /><br />
          • Check different taps – Smell water from multiple taps. If it’s only one tap, the problem is likely local to that tap or pipe.<br /><br />
          • Check hot water – If only hot water smells, the water heater may need flushing.<br /><br />
          • Common causes:<br />
          &nbsp;&nbsp;– Brand-new house → Metallic or chemical smell from new pipes/fittings (usually fades after flushing).<br />
          &nbsp;&nbsp;– Rotten egg smell → Bacteria in water heater or pipes.<br />
          &nbsp;&nbsp;– Chlorine smell → From municipal water supply.<br />
          &nbsp;&nbsp;– Metallic smell → Old or corroded pipes.<br /><br />
          • Still smelling strange? – Contact your property manager or a licensed plumber.
        </>
      ),
    },
    {
      title: "Seasonal Pests",
      icon: <PestControlIcon />,
      color: "#ff8a65",
      content: (
        <>
          <strong>1. Fleas / Itchy Skin</strong><br />
          • Check skin for small red bumps.<br />
          • Inspect bedding, carpets, and upholstery.<br />
          • Wash bedding and clothes in hot water.<br />
          • Vacuum carpets and dispose of vacuum bag immediately.<br /><br />

          <strong>2. Ant Infestation</strong><br />
          • Store food in sealed containers and clean crumbs.<br />
          • Wipe surfaces daily.<br />
          • Seal cracks and gaps around doors/windows.<br />
          • Remove standing water.<br />
          • Use deterrents like vinegar or lemon juice.<br /><br />

          <strong>3. Cockroach Infestation</strong><br />
          • Store food in sealed containers and clean crumbs.<br />
          • Wipe counters and sweep floors daily.<br />
          • Seal cracks and gaps where cockroaches may enter.<br />
          • Remove water sources and fix leaks.<br />
          • Use cockroach deterrents or bait traps.<br /><br />

          💡 Tenant Tip: Prevention is key — keep the home clean, seal entry points, and remove food and water sources to reduce pest problems.<br />
          📞 If pests persist, contact the property manager.
        </>
      ),
    },
    {
      title: "Waste Disposal",
      icon: <DeleteIcon />,
      color: "#8d6e63",
      content: (
        <>
          • If the engine makes a humming noise or the machine is not working, check the power first.<br /><br />
          • Check the circuit breaker.<br /><br />
          • Press the red reset button at the bottom of the unit.<br /><br />
          <Link href="https://www.youtube.com/watch?v=5xFUJIUsHVI" target="_blank" rel="noopener" sx={{ fontWeight: "bold" }}>
            Watch tutorial video
          </Link>
        </>
      ),
    },
  ];

  return (
    <Box
      sx={{
        maxWidth: 950,
        margin: "auto",
        p: 3,
        bgcolor: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      {/* Banner */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #90caf9 0%, #64b5f6 100%)", // Updated lighter blue
          p: 6,
          textAlign: "center",
          borderRadius: 4,
          mb: 6,
          boxShadow: 6,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            color: "white",
            letterSpacing: 1,
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
          }}
        >
          Troubleshooting Guide
        </Typography>
        <Typography variant="h5" sx={{ color: "white", mt: 2, opacity: 0.9 }}>
          Quick solutions for common property issues
        </Typography>
      </Box>

      {/* Accordion Cards */}
      {sections.map((section, index) => (
        <Paper
          key={index}
          sx={{
            mb: 4,
            borderRadius: 3,
            boxShadow: 6,
            overflow: "hidden",
            transition: "transform 0.2s",
            "&:hover": { transform: "scale(1.02)" },
            borderLeft: `8px solid ${section.color}`,
          }}
        >
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                {section.icon && (
                  <Avatar sx={{ bgcolor: section.color, width: 40, height: 40 }}>
                    {section.icon}
                  </Avatar>
                )}
                <Typography sx={{ fontWeight: "bold", fontSize: "1.4rem", color: section.color }}>
                  {section.title}
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
                {section.content}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Paper>
      ))}
    </Box>
  );
};

export default Troubleshooting;
