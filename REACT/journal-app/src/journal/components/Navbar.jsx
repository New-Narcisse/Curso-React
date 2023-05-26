import { MenuBookOutlined } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar } from "@mui/material";

export const Navbar = ({ drawerWidth }) => {
  return (
    <AppBar position="fixed" sx={{}}>
      <Toolbar>
        <IconButton>
          <MenuBookOutlined />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
