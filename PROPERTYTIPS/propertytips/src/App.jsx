import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
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

  useEffect(() => {
    console.log("Active Section Changed:", activeSection);
  }, [activeSection]);

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
        <Box sx={{ position: "relative", zIndex: 2 }}>
          {renderContent()}
        </Box>
      </Box>
    </Box>
  );
}

export default App;
