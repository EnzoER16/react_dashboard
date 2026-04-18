import { Grid } from "@mui/material";
import StatCard from "./StatCard";

function StatsGrid() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <StatCard title="Usuarios" value="120" />
      </Grid>
      <Grid item xs={6}>
        <StatCard title="Ventas" value="$5000" />
      </Grid>
    </Grid>
  );
}

export default StatsGrid;