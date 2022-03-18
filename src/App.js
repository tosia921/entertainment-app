import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Page component
import HomePage from "./pages/HomePage";
import Bookmarked from "./pages/Bookmarked";
import Movies from "./pages/Movies";
import TvSeries from './pages/TvSeries';

// Styled Components
import { ThemeProvider } from 'styled-components';
import { themeLight } from './styles/Themes';
import './styles/stylesReset.css'
import { GlobalStyle } from './styles/GlobalStyles';

function App() {

  const [theme, setTheme] = useState(themeLight)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/movies" element={<Movies />}/>
          <Route path="/tvseries" element={<TvSeries />}/>
          <Route path="/bookmarked" element={<Bookmarked />}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
