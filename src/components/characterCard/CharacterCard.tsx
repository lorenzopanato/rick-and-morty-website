import { useNavigate } from "react-router-dom";
import { CharacterData } from "../../utils/interfaces/interfaces";
import style from "./CharacterCard.module.scss";
import { Info } from "@phosphor-icons/react";

export default function CharacterCard({
  character,
}: {
  character: CharacterData;
}) {
  const navigate = useNavigate();

  return (
    <div
      className={style.card}
      key={character.id}
      onClick={() => navigate(`/character-info/${character.id}`)}
    >
      <img
        src={character.image}
        alt={`imagem do personagem ${character.name}`}
      />

      <div className={style.characterInfo}>
        <h2>{character.name}</h2>
        <p className={style.status}>
          {character.species} - {character.status}
        </p>
        <div className={style.origin}>
          <strong>Origem:</strong>
          <p>{character.origin.name}</p>
        </div>
        <div className={style.currentLocation}>
          <strong>Localização atual:</strong>
          <p>{character.location.name}</p>
        </div>
      </div>
      <div className={style.infoContainer}>
        <span title="Mais informações">
          <Info className={style.info} size={28} />
        </span>
      </div>
    </div>
  );
}
