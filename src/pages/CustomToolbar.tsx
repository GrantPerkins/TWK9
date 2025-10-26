import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  ContactMail as ContactMailIcon,
  Image as ImageIcon,
} from "@mui/icons-material";
import twk9Logo from "../assets/twk9.png";

interface ToolbarProps {
  isMobile: boolean;
}

const useStyles = makeStyles((theme: any) => ({
  toolbar: {
    justifyContent: "space-between",
    padding: "0 2rem",
    backgroundColor: theme.palette.background.paper,
    borderBottom: `2px solid ${theme.palette.secondary.main}`,
  },
  logo: {
    height: 80,
    [theme.breakpoints.down("sm")]: {
      height: 60,
    },
  },
  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: "2rem",
  },
  linkButton: {
    color: theme.palette.text.primary,
    textTransform: "none",
    fontWeight: 500,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  menuButton: {
    color: theme.palette.text.primary,
  },
  drawerPaper: {
    backgroundColor: theme.palette.background.paper,
    width: 200,
  },
  listItem: {
    justifyContent: "center",
    padding: "1.5rem 0",
  },
  icon: {
    color: theme.palette.secondary.main,
    fontSize: "2rem !important",
  },
}));

/* ---------- Desktop Toolbar ---------- */
const ToolbarDesktop: React.FC = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" elevation={0}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.navLinks}>
          <img src={twk9Logo} alt="TWK9 Logo" className={classes.logo} />
          <Button component={Link} to="/" className={classes.linkButton}>
            Home
          </Button>
          <Button component={Link} to="/contact" className={classes.linkButton}>
            Contact
          </Button>
          <Button component={Link} to="/gallery" className={classes.linkButton}>
            Gallery
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

/* ---------- Mobile Toolbar ---------- */
const ToolbarMobile: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state: boolean) => () => {
    setOpen(state);
  };

  return (
    <>
      <AppBar position="static" elevation={0}>
        <Toolbar className={classes.toolbar}>
          <img src={twk9Logo} alt="TWK9 Logo" className={classes.logo} />
          <IconButton
            edge="end"
            aria-label="menu"
            className={classes.menuButton}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        classes={{ paper: classes.drawerPaper }}
      >
        <List>
          <ListItem disablePadding className={classes.listItem}>
            <ListItemButton component={Link} to="/" onClick={toggleDrawer(false)}>
              <ListItemIcon className={classes.icon}>
                <HomeIcon className={classes.icon} />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding className={classes.listItem}>
            <ListItemButton component={Link} to="/contact" onClick={toggleDrawer(false)}>
              <ListItemIcon className={classes.icon}>
                <ContactMailIcon className={classes.icon} />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding className={classes.listItem}>
            <ListItemButton component={Link} to="/gallery" onClick={toggleDrawer(false)}>
              <ListItemIcon className={classes.icon}>
                <ImageIcon className={classes.icon} />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

/* ---------- Combined Export ---------- */
const CustomToolbar: React.FC<ToolbarProps> = ({ isMobile }) => {
  return isMobile ? <ToolbarMobile /> : <ToolbarDesktop />;
};

export default CustomToolbar;
