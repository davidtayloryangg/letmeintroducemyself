import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Button,
  Container,
  Stack,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import DeckIcon from "@mui/icons-material/Deck";
import DashboardTwoToneIcon from "@mui/icons-material/DashboardTwoTone";
import "./Navbar.css";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMyProfilePressed = () => {
    setAnchorEl(null);
    navigate("/my-profile");
  };

  const handleSignOutPressed = () => {
    setAnchorEl(null);
  };
  //   data-theme={theme}

  return (
    <div className="NavigationBar">
      <AppBar position="static" sx={{ boxShadow: "none" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Stack direction="row" justifyContent="flex-start">
              <Button
                variant="contained"
                startIcon={<DashboardTwoToneIcon />}
                disableElevation
                sx={{
                  display: { xs: "none", md: "flex" },
                  fontWeight: 700,
                  letterSpacing: ".2rem",
                  color: "white",
                  background: "black",
                  textDecoration: "none",
                }}
                component={Link}
                to={"/"}
              >
                &#60; DavidYang /&#62;
              </Button>
              <Button
                variant="contained"
                disableElevation
                component={Link}
                to={"/about"}
              >
                About
              </Button>
              <Button
                variant="contained"
                disableElevation
                component={Link}
                to={"/blog"}
              >
                Blog
              </Button>
              <Button
                variant="contained"
                disableElevation
                component={Link}
                to={"/coolstuff"}
              >
                Cool Stuff
              </Button>
            </Stack>
            <Stack direction="row" spacing={0} justifyContent="flex-end">
              <div>
                <Button
                  variant="contained"
                  disableElevation
                  component={Link}
                  to={"/contact"}
                >
                  Contact
                </Button>
              </div>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
