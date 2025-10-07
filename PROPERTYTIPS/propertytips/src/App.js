import React, { useState } from "react";
import { Box } from "@mui/material";
import Sidebar from "./components/Sidebar";
import TopBanner from "./components/TopBanner";
import ContentArea from "./components/ContentArea";
import './styles.css';

function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <Box display="flex" height="100vh">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Box flexGrow={1} p={3} overflow="auto">
        <TopBanner />
        <ContentArea activeSection={activeSection} />
      </Box>
    </Box>
  );
}

export default App;
