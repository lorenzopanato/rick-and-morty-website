import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Characters from "./pages/characters/Characters";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export default function Router() {
  return (
    <BrowserRouter>
      <div className="pageContainer">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/characters" element={<Characters />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
