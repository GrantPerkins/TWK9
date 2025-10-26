import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Typography, Box } from "@mui/material";
import CustomToolbar from "./CustomToolbar";
import CustomFooter from "./CustomFooter";

// Import gallery JSON
import galleryData from "../assets/gallery/gallery.json";

interface GalleryProps {
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
  },
  grid: {
    display: "grid",
    gridTemplateColumns: (props: any) => (props.isMobile ? "1fr" : "1fr 1fr"),
    gap: theme.spacing(3),
    justifyItems: "center",
  },
  image: {
    width: (props: any) => (props.isMobile ? "100%" : 320),
    borderRadius: 8,
    border: `2px solid ${theme.palette.secondary.main}`,
    objectFit: "cover",
  },
}));

const Gallery: React.FC<GalleryProps> = ({ isMobile }) => {
  const classes = useStyles({ isMobile });

  return (
    <div className={classes.root}>
      <CustomToolbar isMobile={isMobile} />
      <Typography variant="h1" className={classes.title}>Gallery</Typography>

      <Container maxWidth="md" className={classes.contentWrapper}>

        <Box className={classes.grid}>
          {galleryData.map((filename: string, index: number) => {
            const imgSrc = require(`../assets/gallery/${filename}`);
            return (
              <img
                key={index}
                src={imgSrc}
                alt={`Gallery ${index + 1}`}
                className={classes.image}
              />
            );
          })}
        </Box>
      </Container>

      <CustomFooter />
    </div>
  );
};

export default Gallery;
