import style from "./Characters.module.scss";
import Logo from "../../assets/logo.png";
import { useContext, useEffect } from "react";
import { CharactersContext } from "../../context/CharactersContext";
import CharacterCard from "../../components/characterCard/CharacterCard";
import { CharacterData } from "../../utils/interfaces/interfaces";

export default function Characters() {
  const { getAllCharacters, characters } = useContext(CharactersContext);

  useEffect(() => {
    getAllCharacters();
  }, []);

  useEffect(() => {
    characters.forEach(character => console.log(character))
  }, []);


  return (
      <section className={style.charactersSection}>
        <img src={Logo} alt="logo de rick and morty" />
        <h1 onClick={() => console.log(characters)}>Personagens</h1>
        <div className={style.cardsContainer}>
        {characters.map((character: CharacterData) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      </section>
  );
}
