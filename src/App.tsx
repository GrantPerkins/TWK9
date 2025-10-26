import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ThemeProvider as StylesThemeProvider } from "@mui/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";

import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/Gallery";
import Reviews from "./pages/Reviews";

const App: React.FC = () => {
  const isMobile = window.innerWidth < 768;

  return (
    <MuiThemeProvider theme={theme}>
      <StylesThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<Home isMobile={isMobile} />} />
            <Route path="/contact" element={<Contact isMobile={isMobile} />} />
            <Route path="/reviews" element={<Reviews isMobile={isMobile} />} />
            <Route path="/gallery" element={<Gallery isMobile={isMobile} />} />
          </Routes>
        </Router>
      </StylesThemeProvider>
    </MuiThemeProvider>
  );
};

export default App;
