import PortalImage from "../../assets/portal.png";
import style from "./About.module.scss";
import curiositiesData from "../../utils/data/curiosities.json";
import { CuriosityData } from "../../utils/interfaces/interfaces";
import { useNavigate } from "react-router-dom";

export default function About() {
  const curiosities: CuriosityData[] = curiositiesData;
  const navigate = useNavigate();

  return (
    <main>
      <section className={style.aboutSection}>
        <img
          src={PortalImage}
          alt="imagem de um portal com rick e morty saindo de dentro dele"
        />
        <article>
          <h1>
            Qual é a <span>história de Rick and Morty?</span>
          </h1>
          <p>
            Criada por Justin Roiland e Dan Harmon, Rick & Morty é uma série
            animada de comédia que mostra as aventuras interdimensionais de
            Rick, a mente mais brilhante da galáxia, e seu neto Morty. Com sua
            arma capaz de criar portais para viajar no tempo-espaço, Rick leva
            Morty para explorar todos as absurdas formas de vida que o universo
            é capaz de sustentar. Apesar de genial, Rick tem sofre de alcoolismo
            e possui uma relação conflituosa com sua família, fruto da sua visão
            cínica da vida e seu egoísmo. Por outro lado, Morty está longe de
            ter o intelecto do seu avô, mas é o único capaz de fazê-lo ser um
            pouquinho mais gentil. Entre momentos hilários e reflexões
            interessantes sobre a vida, Rick & Morty arranca gargalhadas e ainda
            rende ótimas discussões filosóficas.
          </p>
          <button onClick={() => navigate("/characters")}>Conheça os personagens</button>
        </article>
      </section>

      <div className={style.line}></div>

      <section className={style.curiositiesSection}>
        <h2>
          <span>5 Curiosidades</span> sobre Rick and Morty
        </h2>

        {curiosities.map((curiosity, index) => (
          <div className={style.curiosity} key={index}>
            <h3>{curiosity.title}</h3>
            <p>{curiosity.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
