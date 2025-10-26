import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
    footer: {
        textAlign: "center",
        padding: "2rem 0",
        borderTop: `2px solid ${theme.palette.secondary.main}`,
        fontSize: "0.9rem",
        color: theme.palette.text.secondary,
    },
}));


const Footer: React.FC = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            © {new Date().getFullYear()} Tanner Wiersma K9s Dog Training. All Rights Reserved.
        </footer>
    );
}


const CustomFooter: React.FC = () => {
    return <Footer />;
};

export default CustomFooter;
