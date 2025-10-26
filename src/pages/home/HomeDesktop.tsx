import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Typography,
  Button,
  Container,
  Box,
} from "@mui/material";
import CustomToolbar from "../CustomToolbar"
import { Link } from "react-router-dom";
import home_content from "../../assets/home_content.json"
import headline from "../../assets/headline.png";
import pup1 from "../../assets/pup1.png";
import pup2 from "../../assets/pup2.png";
import CustomFooter from "../CustomFooter";

const useStyles = makeStyles((theme: any) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  contentWrapper: {
    marginTop: "4rem",
    marginBottom: "4rem",
  },
  heroSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "2rem",
    marginBottom: "4rem",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  },
  heroImage: {
    flex: 1,
    borderRadius: 8,
    maxHeight: 400,
    width: "100%",
    objectFit: "cover",
    border: `2px solid ${theme.palette.secondary.main}`,
  },
  heroText: {
    flex: 1,
  },
  headline: {
    fontWeight: 700,
    marginBottom: "1rem",
  },
  blurb: {
    color: theme.palette.text.secondary,
    lineHeight: 1.6,
  },
  contactButton: {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    padding: "1rem 2.5rem",
    fontSize: "1.25rem",
    borderRadius: "50px !important",
    fontWeight: 600,
    textTransform: "none",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      transform: "translateY(-2px)",
      boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
    },
  },
  mainContent: {
    // margin: "0 auto",
    color: theme.palette.text.secondary,
    lineHeight: 1.8,
    paddingBottom: "4rem",
    textAlign: "center",
  },
  imageRowOuter: {
    marginLeft: `calc(-${theme.spacing(3)})`,
    marginRight: `calc(-${theme.spacing(3)})`,
  },
  imageRow: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    marginBottom: "4rem",
  },
  pupImage: {
    width: "45%",
    borderRadius: 8,
    objectFit: "cover",
    border: `2px solid ${theme.palette.secondary.main}`,
  },
  footer: {
    textAlign: "center",
    padding: "2rem 0",
    borderTop: `2px solid ${theme.palette.secondary.main}`,
    fontSize: "0.9rem",
    color: theme.palette.text.secondary,
  },
}));


const HomeDesktop: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* Toolbar */}
      <CustomToolbar isMobile={false} />

      {/* Main Content */}
      <Container maxWidth="md" className={classes.contentWrapper}>
        {/* Hero Section */}
        <Box className={classes.heroSection}>
          <img src={headline} alt="Dog Training" className={classes.heroImage} />
          <div className={classes.heroText}>
            <Typography variant="h4" className={classes.headline}>
              {home_content.title}
            </Typography>
            <Typography variant="body1" className={classes.blurb}>
              {home_content.seller}
            </Typography>
          </div>
        </Box>

        {/* CTA Button */}
        <Box textAlign="center" mt={5} mb={6}>
          <Button
            variant="contained"
            className={classes.contactButton}
            component={Link}
            to="/contact"
          >
            {home_content.button_text}
          </Button>
        </Box>

        {/* Filler Text */}
        <Box>
          <Typography variant="body1" className={classes.mainContent}>
            {home_content.main_content}
          </Typography>
        </Box>

        {/* Image Row */}
        <Box className={classes.imageRowOuter}>
          <Box className={classes.imageRow}>
            <img src={pup1} alt="Happy Dog 1" className={classes.pupImage} />
            <img src={pup2} alt="Happy Dog 2" className={classes.pupImage} />
          </Box>
        </Box>
      </Container>

      {/* Footer */}
      <CustomFooter />
    </div>
  );
};

export default HomeDesktop;