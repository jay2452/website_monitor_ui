import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const style = {
  flexGrow: 1,
  position: "fixed",
  width: "100%",
  zIndex: 1,
};

export default function DenseAppBar() {
  return (
    <Box sx={style}>
      <AppBar position="static">
        <Toolbar variant="dense">
          {/* <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" color="inherit" component="div">
            WebsiteMonitor
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
