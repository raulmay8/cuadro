import { BrowserRouter, Route, Routes, createBrowserRouter } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent"
import FooterComponent from "./components/FooterComponent"
import HomePage from "./pages/HomePage";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <HeaderComponent/>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element="Page not exists 404" />
      </Routes>
      <FooterComponent/>
    </BrowserRouter>
  );
}

export default App;
