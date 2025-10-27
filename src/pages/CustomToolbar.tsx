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
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  ContactMail as ContactMailIcon,
  Image as ImageIcon,
  AutoGraph as AutoGraphIcon
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
    height: 120,
    [theme.breakpoints.down("sm")]: {
      height: 100,
    },
  },
  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: "2rem",
    fontSize: "2rem !important",
  },
  menuButton: {
    color: theme.palette.text.primary,
    paddingRight: "2rem !important",
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
          <Link to="/">
            <img src={twk9Logo} alt="TWK9 Logo" className={classes.logo} />
          </Link>
          <Button variant={"contained"} component={Link} to="/">
            Home
          </Button>
          <Button variant={"contained"} component={Link} to="/contact">
            Contact
          </Button>
          <Button variant={"contained"} component={Link} to="/reviews">
            Reviews
          </Button>
          <Button variant={"contained"} component={Link} to="/gallery">
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
          <Link to="/">
            <img src={twk9Logo} alt="TWK9 Logo" className={classes.logo} />
          </Link>
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
              <ListItemText primary="Home" className={classes.icon} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding className={classes.listItem}>
            <ListItemButton component={Link} to="/contact" onClick={toggleDrawer(false)}>
              <ListItemIcon className={classes.icon}>
                <ContactMailIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary="Contact" className={classes.icon} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding className={classes.listItem}>
            <ListItemButton component={Link} to="/reviews" onClick={toggleDrawer(false)}>
              <ListItemIcon className={classes.icon}>
                <AutoGraphIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary="Reviews" className={classes.icon} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding className={classes.listItem}>
            <ListItemButton component={Link} to="/gallery" onClick={toggleDrawer(false)}>
              <ListItemIcon className={classes.icon}>
                <ImageIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary="Gallery" className={classes.icon} />
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
