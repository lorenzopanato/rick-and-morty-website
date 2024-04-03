import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Characters from "./pages/characters/Characters";
import Locations from "./pages/locations/Locations";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { CharactersProvider } from "./context/CharactersContext";
import CharacterInfo from "./pages/characterInfo/CharacterInfo";

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
            <Route path="/character-info/:id" element={<CharacterInfo />} />
            <Route path="/locations" element={<Locations />} />
          </Routes>
          <Footer />
        </CharactersProvider>
      </div>
    </BrowserRouter>
  );
}
