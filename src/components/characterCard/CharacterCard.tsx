import { useEffect } from "react";
import { CharacterData } from "../../utils/interfaces/interfaces";
import style from "./CharacterCard.module.scss";

export default function CharacterCard({ character }: { character: CharacterData }) {
  useEffect(() => {
    console.log(character)
  }, [])

  return (
    <div className={style.card}>
      <img
        src={character.image}
        alt={`imagem do personagem ${character.name}`}
      />

      <div className={style.characterInfo}>
        <h2>{character.name}</h2>
        <p className={style.status}>
          {character.species} - {character.status}
        </p>
        <div className={style.firstLocation}>
          <strong>Visto pela primeira vez em:</strong>
          <p>{character.origin.name}</p>
        </div>
        <div className={style.lastLocation}>
          <strong>Ultima localização conhecida:</strong>
          <p>{character.location.name}</p>
        </div>
      </div>
    </div>
  );
}
