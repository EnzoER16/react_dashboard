import { Drawer, List, ListItem, ListItemText } from "@mui/material";

function Sidebar() {
  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        <ListItem button>
          <ListItemText primary="Inicio" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Usuarios" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Sidebar;