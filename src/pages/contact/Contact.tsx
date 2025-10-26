import React from "react";
import { makeStyles } from "@mui/styles";
import {
    Container,
    Typography,
    Button,
    Box,
    Card,
    CardContent,
    Avatar,
} from "@mui/material";
import { Phone as PhoneIcon, Email as EmailIcon } from "@mui/icons-material";
import CustomToolbar from "../CustomToolbar";
import CustomFooter from "../CustomFooter";
import contactPic from "../../assets/twk9.png";
import contactInfo from "../../assets/contact_info.json"

interface ContactProps {
    isMobile: boolean;
}

const useStyles = makeStyles((theme: any) => ({
    root: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
    },
    content: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: theme.spacing(6, 2),
    },
    card: {
        maxWidth: 480,
        width: "100%",
        textAlign: "center",
        border: `2px solid ${theme.palette.secondary.main}`,
        borderRadius: 16,
        padding: theme.spacing(4),
        boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
    },
    avatar: {
        width: "150px !important",
        height: "150px !important",
        margin: "0 auto 1.5rem auto",
        border: `2px solid ${theme.palette.primary.main}`,
    },
    name: {
        fontWeight: 700,
        fontSize: "1.8rem",
        marginBottom: "1rem",
    },
    buttonGroup: {
        display: "flex",
        justifyContent: "center",
        gap: "1.5rem",
        flexWrap: "wrap",
        marginTop: "1.5rem",
    },
    contactButton: {
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        backgroundColor: theme.palette.primary.main,
        color: "#fff",
        padding: "0.8rem 1.5rem",
        borderRadius: "50px",
        textTransform: "none",
        fontWeight: 600,
        "&:hover": {
            backgroundColor: theme.palette.primary.dark,
        },
    },
}));

const ContactDesktop: React.FC = () => {
    const classes = useStyles();

    // Replace with actual data
    const name = "Tanner Weisma";
    const phoneNumber = "+15555555555"; // E.164 format for SMS link
    const email = "tanner@twk9training.com";

    return (
        <div className={classes.root}>
            <CustomToolbar isMobile={false} />

            <Container className={classes.content}>
                <Card className={classes.card}>
                    <CardContent>
                        <Avatar src={contactPic} alt={name} className={classes.avatar} />
                        <Typography className={classes.name}>{name}</Typography>

                        <Typography variant="body1" color="textSecondary">
                            Owner & Lead Trainer
                        </Typography>

                        <Box className={classes.buttonGroup}>
                            <Button
                                className={classes.contactButton}
                                startIcon={<PhoneIcon />}
                                href={`sms:${phoneNumber}`}
                            >
                                Text Tanner
                            </Button>

                            <Button
                                className={classes.contactButton}
                                startIcon={<EmailIcon />}
                                href={`mailto:${email}`}
                            >
                                Email Tanner
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Container>

            <CustomFooter />
        </div>
    );
};

const ContactMobile: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CustomToolbar isMobile={true} />

            <Container className={classes.content}>
                <Card className={classes.card}>
                    <CardContent>
                        <Avatar src={contactPic} alt={contactInfo.name} className={classes.avatar} />
                        <Typography className={classes.name} variant="h5">
                            {contactInfo.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Owner & Lead Trainer
                        </Typography>

                        <Box className={classes.buttonGroup}>
                            <Button
                                className={classes.contactButton}
                                startIcon={<PhoneIcon />}
                                href={`sms:${contactInfo.number}`}
                            >
                                Text
                            </Button>

                            <Button
                                className={classes.contactButton}
                                startIcon={<EmailIcon />}
                                href={`mailto:${contactInfo.email}`}
                            >
                                Email
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Container>

            <CustomFooter />
        </div>
    );
};

const Contact: React.FC<ContactProps> = ({ isMobile }) => {
    return isMobile ? <ContactMobile /> : <ContactDesktop />;
};

export default Contact;
