import React from "react";
import { makeStyles } from "@mui/styles";
import {
    Typography,
    Button,
    Container,
    Box,
} from "@mui/material";
import CustomToolbar from "../CustomToolbar";
import { Link } from "react-router-dom";
import home_content from "../../assets/home_content.json";
import headline from "../../assets/headline.png";
import pup1 from "../../assets/pup1.png";
import pup2 from "../../assets/pup2.png";
import CustomFooter from "../CustomFooter";

const useStyles = makeStyles((theme: any) => ({
    root: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
    },
    contentWrapper: {
        marginTop: "2rem",
        marginBottom: "2rem",
        padding: "0 1rem",
    },
    heroSection: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        marginBottom: "2rem",
    },
    heroImage: {
        width: "100%",
        maxHeight: 250,
        borderRadius: 8,
        objectFit: "cover",
        border: `2px solid ${theme.palette.secondary.main}`,
        marginBottom: "1.5rem",
    },
    headline: {
        fontWeight: 700,
        fontSize: "1.5rem",
        marginBottom: "0.75rem",
    },
    blurb: {
        color: theme.palette.text.secondary,
        fontSize: "1rem",
        lineHeight: 1.5,
        textAlign: "center",
    },
    contactButton: {
        backgroundColor: theme.palette.primary.main,
        color: "#fff",
        padding: "0.9rem 2rem",
        fontSize: "1.1rem",
        borderRadius: "40px !important",
        fontWeight: 600,
        textTransform: "none",
        boxShadow: "0 3px 10px rgba(0,0,0,0.15)",
        transition: "all 0.3s ease",
        "&:hover": {
            backgroundColor: theme.palette.primary.dark,
            transform: "translateY(-2px)",
            boxShadow: "0 5px 14px rgba(0,0,0,0.2)",
        },
    },
    mainContent: {
        color: theme.palette.text.secondary,
        lineHeight: 1.6,
        fontSize: "1rem",
        marginTop: "2rem",
        marginBottom: "2rem",
        paddingBottom: "4rem",
        textAlign: "center",
    },
    imageRow: {
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        alignItems: "center",
        marginBottom: "2.5rem",
    },
    pupImage: {
        width: "100%",
        maxWidth: 320,
        borderRadius: 8,
        objectFit: "cover",
        border: `2px solid ${theme.palette.secondary.main}`,
    },
}));

const HomeMobile: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CustomToolbar isMobile={true} />

            <Container maxWidth="sm" className={classes.contentWrapper}>
                {/* Hero Section */}
                <Box className={classes.heroSection}>
                    <Typography variant="h5" className={classes.headline}>
                        {home_content.title}
                    </Typography>
                    <img src={headline} alt="Dog Training" className={classes.heroImage} />
                    <Typography variant="body1" className={classes.blurb}>
                        {home_content.seller}
                    </Typography>
                </Box>

                {/* CTA Button */}
                <Box textAlign="center" mt={3} mb={4}>
                    <Button
                        variant="contained"
                        className={classes.contactButton}
                        component={Link}
                        to="/contact"
                    >
                        {home_content.contact_button_text}
                    </Button>
                </Box>

                {/* Main Content */}
                <Box className={classes.imageRow}>
                    <img src={pup1} alt="Happy Dog 1" className={classes.pupImage} />
                </Box>

                <Box>
                    <Typography variant="body1" className={classes.mainContent}>
                        {home_content.main_content}
                    </Typography>
                </Box>

                <Box textAlign="center" mt={3} mb={4}>
                    <Button
                        variant="contained"
                        className={classes.contactButton}
                        component={Link}
                        to="/reviews"
                    >
                        {home_content.review_button_text}
                    </Button>
                </Box>

                {/* Image Row */}
                <Box className={classes.imageRow}>
                    <img src={pup2} alt="Happy Dog 2" className={classes.pupImage} />
                </Box>
            </Container>

            <CustomFooter />
        </div>
    );
};

export default HomeMobile;
