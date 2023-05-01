import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, CssBaseline, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Box } from "@mui/system";
import { useTheme } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import DrawerComponent from "./Drawer";

function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <>
      <style>{`
      a {
        text-decoration: none;
      }
    `}</style>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          top: 0,
          transition: "top 300ms",
          top: visible ? 0 : "-64px",
        }}
      >
        <CssBaseline />
        <Toolbar>
          <Typography
            variant="h4"
            sx={{
              flexGrow: "1",
              cursor: "pointer",
            }}
          >
            {/* Add your logo or text here */}
          </Typography>
          {isMobile ? (
            <DrawerComponent />
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                flexGrow: 1,
              }}
            >
              {["home", "projects", "about", "contact", "faq"].map(
                (text, index) => (
                  <NavLink
                    key={index}
                    to={`/${text}`}
                  >
                    <Box
                      sx={{
                        textDecoration: "none",
                        color: "white",
                        fontSize: "20px",
                        marginLeft: 20,
                        padding: "5px 10px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                          textDecoration: "none",
                        },
                        transition: "background-color 300ms",
                        flexGrow: 1,
                        flexShrink: 0,
                        "@media (max-width: 1200px)": {
                          marginLeft: 10,
                          fontSize: "18px",
                        },
                        "@media (max-width: 900px)": {
                          marginLeft: 5,
                          fontSize: "16px",
                        },
                      }}
                    >
                      {text}
                    </Box>
                  </NavLink>
                )
              )}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
export default Navbar;
