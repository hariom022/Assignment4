import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WalletIcon from "@mui/icons-material/Wallet";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import "./DrawerComponent.css";
import { NavLink } from "react-router-dom";

const drawerWidth = 240;

const DrawerComponent = () => {
  return (
    <Box sx={{ display: "block", position: "relative" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          position: "relative",
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Box sx={{ overflow: "auto", position: "relative" }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton sx={{ color: "black" }}>
                <HomeIcon sx={{ marginRight: "20px" }} />
                Home
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <NotificationsIcon sx={{ marginRight: "20px" }} />
                Notifications
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <FavoriteBorderIcon sx={{ marginRight: "20px" }} />
                Shop
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <MailOutlineIcon sx={{ marginRight: "20px" }} />
                Conversation
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <WalletIcon sx={{ marginRight: "20px" }} />
                Wallet
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <StarBorderPurple500Icon sx={{ marginRight: "20px" }} />
                Subscription
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <PersonIcon sx={{ marginRight: "20px" }} />
                My Profile
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <SettingsIcon sx={{ marginRight: "20px" }} />
                Setting
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
        <Box sx={{ display: "flex", color: "blue" }}>
          <IconButton sx={{ mt: "71%", ml: "20px" }}>
            <LogoutIcon color="primary" />
          </IconButton>
          <Typography sx={{ mt: "75%", cursor: "pointer" }}>
            <NavLink to={"/signup"}>Login Out</NavLink>
          </Typography>
        </Box>
      </Drawer>
    </Box>
  );
};

export default DrawerComponent;
