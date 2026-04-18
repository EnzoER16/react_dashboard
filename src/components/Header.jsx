import { AppBar, Toolbar, Typography, Box } from "@mui/material";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }} />

        <Typography variant="h6" sx={{ textAlign: "center" }}>
          Mi Dashboard
        </Typography>

        <Box sx={{ flexGrow: 1 }} />
      </Toolbar>
    </AppBar>
  );
}

export default Header;