import style from "./Characters.module.scss";
import Logo from "../../assets/logo.png";
import { useContext, useEffect } from "react";
import { CharactersContext } from "../../context/CharactersContext";
import CharacterCard from "../../components/characterCard/CharacterCard";
import { CharacterData } from "../../utils/interfaces/interfaces";
import Pagination from "@mui/material/Pagination";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Characters() {
  const { getAllCharacters, charactersData } = useContext(CharactersContext);
  const navigate = useNavigate();
  const [searchParam] = useSearchParams();

  useEffect(() => {
    getAllCharacters();
  }, [searchParam]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    navigate(`/characters/?page=${page}`);
  };

  return (
    <section className={style.charactersSection}>
      <img src={Logo} alt="logo de rick and morty" />
      <h1>Personagens</h1>
      <div className={style.cardsContainer}>
        {charactersData.results.map((character: CharacterData) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
      <Pagination
        count={charactersData.info.pages}
        color="success"
        size="large"
        className={style.pagination}
        onChange={handlePageChange}
      />
    </section>
  );
}
