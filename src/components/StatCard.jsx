import { Card, CardContent, Typography } from "@mui/material";

function StatCard({ title, value }) {
  return (
    <Card sx={{ minWidth: 200 }}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="h4">{value}</Typography>
      </CardContent>
    </Card>
  );
}

export default StatCard;