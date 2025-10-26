import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#c62828", // red accent
    },
    secondary: {
      main: "#757575", // grey accent
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    text: {
      primary: "#000000",
      secondary: "#333333",
    },
  },
  shape: {
    borderRadius: 0, // sharp edges
  },
});

export default theme;
