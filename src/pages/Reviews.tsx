import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Typography, Box } from "@mui/material";
import CustomToolbar from "./CustomToolbar";
import CustomFooter from "./CustomFooter";

// Import the JSON file
import reviewsData from "../assets/reviews/reviews.json";

interface Review {
    name: string;
    review_text: string;
    image: string;
}

interface ReviewsProps {
    isMobile: boolean;
}

const useStyles = makeStyles((theme: any) => ({
    root: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
    },
    contentWrapper: {
        flex: 1,
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(6),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
    },
    title: {
        textAlign: "center",
        fontWeight: 700,
        marginBottom: theme.spacing(4),
        fontSize: "2rem",
        paddingTop: "1rem"
    },
    reviewBox: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: theme.spacing(6),
        textAlign: "center",
    },
    dogImage: {
        width: "50%",
        height: "50%",
        borderRadius: 8,
        objectFit: "cover",
        border: `2px solid ${theme.palette.secondary.main}`,
        marginBottom: theme.spacing(2),
    },
    dogName: {
        fontWeight: 600,
        fontSize: "1.25rem",
        marginBottom: theme.spacing(1),
        color: theme.palette.primary.main
    },
    reviewText: {
        color: theme.palette.text.secondary,
        lineHeight: 1.6,
        fontSize: "1rem",
        maxWidth: 600,
    },
}));

const Reviews: React.FC<ReviewsProps> = ({ isMobile }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CustomToolbar isMobile={isMobile} />

            <Typography variant={"h3"} className={classes.title}>Reviews</Typography>
            <Container maxWidth="md" className={classes.contentWrapper}>


                {reviewsData.map((review: Review, index: number) => {
                    // Dynamically import the image from assets/reviews folder
                    const imgSrc = require(`../assets/reviews/${review.image}`);

                    return (
                        <Box key={index} className={classes.reviewBox}>
                            <Typography variant={"h4"} className={classes.dogName}>{review.name}</Typography>
                            <img src={imgSrc} alt={review.name} className={classes.dogImage} />
                            <Typography className={classes.reviewText}>"{review.review_text}"</Typography>
                            <Typography className={classes.reviewText}>- {review.name}'s owner </Typography>
                        </Box>
                    );
                })}
            </Container>
            <CustomFooter />
        </div>
    );
};

export default Reviews;
