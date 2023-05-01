import React, { useState } from "react";
import { Drawer, IconButton, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

function DrawerComponent() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          {["Home", "Projects", "About", "Contact", "FAQ"].map((text, index) => (
            <ListItem
              key={index}
              button
              onClick={() => setOpenDrawer(false)}
              sx={{
                textDecoration: "none",
              }}
            >
              <ListItemText>
                <Link
                  to={`/${text.toLowerCase()}`}
                  sx={{
                    textDecoration: "none",
                    color: "blue",
                    fontSize: "20px",
                  }}
                >
                  {text}
                </Link>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon sx={{ color: "white" }} />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
