import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router-dom";
import "./issue.css";

const drawerWidth = 200;

export default function ClippedDrawer() {
  return (
    <div sx={{ background: "#082032" }}>
      <Box sx={{ display: "flex", background: "#082032" }} className="sidedraw">
        <Drawer
          variant="permanent"
          sx={{
            zIndex: "-1",
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
              background: "#393E46",
            },
          }}
        >
          <Box
            sx={{ overflow: "auto", paddingTop: "60px", fontWeight: "bold" }}
          >
            {/* <nav> */}
            <List>
              <NavLink to="/" className="link">
                <ListItem>
                  <ListItemButton>
                    <ListItemText>Project Board</ListItemText>
                  </ListItemButton>
                </ListItem>
              </NavLink>
              <NavLink to="/issues" className="link">
                <ListItem>
                  <ListItemButton>
                    <ListItemText>Create Issue</ListItemText>
                  </ListItemButton>
                </ListItem>
              </NavLink>
              <NavLink to="/projects" className="link">
                <ListItem>
                  <ListItemButton>
                    <ListItemText>Create Project</ListItemText>
                  </ListItemButton>
                </ListItem>
              </NavLink>
            </List>
            {/* </nav> */}
          </Box>
        </Drawer>
      </Box>
    </div>
  );
}
