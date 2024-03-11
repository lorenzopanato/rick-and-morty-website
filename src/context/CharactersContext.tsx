import { createContext, useState } from "react";
import { CharacterData, IChildren } from "../utils/interfaces/interfaces";
import axios from "axios";
import { apiBaseUrl } from "../utils/api";

interface CharactersType {
  characters: CharacterData[];
  getAllCharacters: () => Promise<void>;
}

export const CharactersContext = createContext({} as CharactersType);

export function CharactersProvider({ children }: IChildren) {
  const [characters, setCharacters] = useState<CharacterData[]>([]);

  const getAllCharacters = async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}/character`);
      const data = response.data;

      setCharacters(data.results);
    } catch (error) {
      console.error("Erro ao buscar personagens:", error);
    }
  };

  return (
    <CharactersContext.Provider
      value={{
        characters,
        getAllCharacters,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
}
