import { useState } from 'react'
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import StatsGrid from "./components/StatGrid";
import { Box } from "@mui/material";

const drawerWidth = 240;

function App() {
  return (
    <Box>
      <Header />
      <Box sx={{ padding: 3, marginLeft: "240px" }}>
        <Sidebar />
        <Box sx={{ padding: 3, marginLeft: "240px" }}>
          <StatsGrid />
        </Box>
      </Box>
    </Box>
  );
}

export default App;