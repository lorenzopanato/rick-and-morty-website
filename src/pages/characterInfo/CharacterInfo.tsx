import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiBaseUrl } from "../../utils/api";
import { CharacterData } from "../../utils/interfaces/interfaces";
import { enqueueSnackbar } from "notistack";

export default function CharacterInfo() {
  const { id } = useParams();
  const [character, setCharacter] = useState<CharacterData | null>(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        if (id) {
          const response = await axios.get(`${apiBaseUrl}/character/${id}`);
          setCharacter(response.data);
          console.log(response.data)
        }
      } catch (error) {
        console.error("Erro ao buscar personagem:", error);
        enqueueSnackbar("Nenhum personagem encontrado.", { variant: "error" });
      }
    };
    
    fetchCharacter();
  }, [id]);

  return (
    <>
      {character && <h1>{character.name}</h1>}
    </>
  );
}
