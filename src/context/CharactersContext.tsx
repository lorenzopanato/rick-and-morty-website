import { createContext, useState } from "react";
import { ApiCharacterData, IChildren } from "../utils/interfaces/interfaces";
import axios from "axios";
import { apiBaseUrl } from "../utils/api";
import { useNavigate, useSearchParams } from "react-router-dom";
import { enqueueSnackbar } from "notistack";

interface CharactersType {
  charactersData: ApiCharacterData;
  getAllCharacters: () => Promise<void>;
  getCharacterByName: (name: string) => Promise<void>;
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
  let name = searchParam.get("name") || "";

  const getAllCharacters = async () => {
    try {
      const response = await axios.get(
        `${apiBaseUrl}/character/?page=${page}&name=${name}`
      );
      const data = response.data;

      setCharactersData(data);
    } catch (error) {
      console.error("Erro ao buscar personagens:", error);
    }
  };

  const getCharacterByName = async (name: string) => {
    try {
      const response = await axios.get(`${apiBaseUrl}/character/?name=${name}`);
      const data = response.data;

      setCharactersData(data);
      navigate(`/characters/?name=${name}`);
    } catch (error) {
      console.error("Erro ao buscar personagem:", error);
      enqueueSnackbar("Personagem não encontrado.", { variant: "error" });
    }
  };

  return (
    <CharactersContext.Provider
      value={{
        charactersData,
        getAllCharacters,
        getCharacterByName,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
}
