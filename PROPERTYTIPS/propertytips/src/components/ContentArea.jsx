import React from "react";
import ViewingProcedure from "../sections/TenantGuide/ViewingProcedure";
import NewTenantOnboarding from "../sections/TenantGuide/NewTenantOnboarding";
import CurrentTenant from "../sections/TenantGuide/CurrentTenant";
import VacatingTenant from "../sections/TenantGuide/VacatingTenant";
import Troubleshooting from "../sections/Troubleshooting";
import Relationships from "../sections/Relationships";
import Home from "../sections/Home";
import { Box } from "@mui/material";

const ContentArea = ({ activeSection }) => {
  const renderContent = () => {
    switch (activeSection) {
      case "home": return <Home />;
      case "viewingProcedure": return <ViewingProcedure />;
      case "newTenant": return <NewTenantOnboarding />;
      case "currentTenant": return <CurrentTenant />;
      case "vacatingTenant": return <VacatingTenant />;
      case "troubleshooting": return <Troubleshooting />;
      case "relationships": return <Relationships />;
      default: return <Home />;
    }
  };

  return (
    <Box key={activeSection} sx={{ opacity: 0, animation: "fadeIn 0.5s forwards" }}>
      {renderContent()}
      <style>{`
        @keyframes fadeIn { to { opacity: 1; } }
      `}</style>
    </Box>
  );
};

export default ContentArea;
