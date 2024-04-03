import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiBaseUrl } from "../../utils/api";
import {
  CharacterData,
  EpisodeData,
} from "../../utils/interfaces/interfaces";
import { enqueueSnackbar } from "notistack";
import style from "./CharacterInfo.module.scss";
import { CaretDoubleDown } from "@phosphor-icons/react";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Table,
} from "@mui/material";
import Paper from "@mui/material/Paper";

export default function CharacterInfo() {
  const { id } = useParams();
  const [character, setCharacter] = useState<CharacterData | null>(null);
  const [episodes, setEpisodes] = useState<EpisodeData[]>([]);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        if (id) {
          const response = await axios.get(`${apiBaseUrl}/character/${id}`);
          const data: CharacterData = response.data;
          setCharacter(data);

          // Cria um array para armazenar os dados dos episódios
          let episodesData: EpisodeData[] = [];

          // Itera sobre os URLs dos episódios
          for (const episodeUrl of data.episode) {
            const episodeResponse = await axios.get(episodeUrl);
            episodesData.push(episodeResponse.data);
          }

          setEpisodes(episodesData);
        }
      } catch (error) {
        console.error("Erro ao buscar personagem:", error);
        enqueueSnackbar("Nenhum personagem encontrado.", { variant: "error" });
      }
    };

    fetchCharacter();
  }, [id]);

  return (
    <section className={style.characterInfoSection}>
      {character && (
        <>
          <div className={style.characterInfo}>
            <img
              src={character.image}
              alt={`imagem do(a) personagem ${character.name}`}
            />
            <article>
              <h1>{character.name}</h1>

              <p>
                <span>Status: </span>
                {character.status}
              </p>

              <div className={style.speciesAndGender}>
                <p>
                  <span>Espécie: </span>
                  {character.species}
                </p>
                <p>
                  <span>Gênero: </span>
                  {character.gender}
                </p>
              </div>
              <p>
                <span>Origem: </span>
                {character.origin.name}
              </p>
              <p>
                <span>Localização atual: </span>
                {character.location.name}
              </p>
              <div className={style.episodesText}>
                <p>
                  Confira abaixo todos os episódios que{" "}
                  <span>{character.name}</span> participa!
                </p>
                <CaretDoubleDown
                  className={style.bottomArrow}
                  size={32}
                  weight="bold"
                  color="white"
                />
              </div>
            </article>
          </div>
          <div className={style.line}></div>
          <h2>Episódios</h2>
          <TableContainer component={Paper} sx={{ backgroundColor: "transparent" }}>
            <Table aria-label="simple table">
              <TableHead sx={{ backgroundColor: "#260670" }}>
                <TableRow>
                  <TableCell sx={{ color: "var(--light-text)", fontSize: "1.1rem" }}>Episódio</TableCell>
                  <TableCell sx={{ color: "var(--light-text)", fontSize: "1.1rem" }} align="left">Nome</TableCell>
                  <TableCell sx={{ color: "var(--light-text)", fontSize: "1.1rem" }} align="left">Data de lançamento</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {episodes.map((ep) => (
                  <TableRow
                    key={ep.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell sx={{ color: "var(--light-text)", fontSize: "1.1rem" }} component="th" scope="row">
                      {ep.episode}
                    </TableCell>
                    <TableCell sx={{ color: "var(--light-text)", fontSize: "1.1rem" }} align="left">{ep.name}</TableCell>
                    <TableCell sx={{ color: "var(--light-text)", fontSize: "1.1rem" }} align="left">{ep.air_date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </section>
  );
}
