import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Characters from "./pages/characters/Characters";
import Locations from "./pages/locations/Locations";
import Episodes from "./pages/episodes/Episodes";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { CharactersProvider } from "./context/CharactersContext";

export default function Router() {
  return (
    <BrowserRouter>
      <div className="pageContainer">
        <CharactersProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/episodes" element={<Episodes />} />
          </Routes>
          <Footer />
        </CharactersProvider>
      </div>
    </BrowserRouter>
  );
}
