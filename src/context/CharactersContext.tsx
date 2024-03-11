import { createContext, useEffect, useState } from "react";
import {
  ApiCharacterData,
  IChildren,
} from "../utils/interfaces/interfaces";
import axios from "axios";
import { apiBaseUrl } from "../utils/api";
import { useNavigate, useSearchParams } from "react-router-dom";

interface CharactersType {
  charactersData: ApiCharacterData;
  getAllCharacters: (page: number) => Promise<void>;
}

export const CharactersContext = createContext({} as CharactersType);

export function CharactersProvider({ children }: IChildren) {
  const [charactersData, setCharactersData] = useState<ApiCharacterData>({
    info: {
      count: 0,
      pages: 0,
      next: "",
      prev: "",
    },
    results: [],
  });
  
  const navigate = useNavigate();
  const [searchParam] = useSearchParams();
  let page = Number(searchParam.get("page")) || 1;

  const getAllCharacters = async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}/character/?page=${page}`);
      const data = response.data;

      setCharactersData(data);
    } catch (error) {
      console.error("Erro ao buscar personagens:", error);
    }
  };

  return (
    <CharactersContext.Provider
      value={{
        charactersData,
        getAllCharacters,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
}
