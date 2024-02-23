import { useNavigate } from "react-router-dom";
import style from "./Home.module.scss";
import PortalImage from "../../assets/portal.webp";
import Logo from "../../assets/logo.png";
import "../../index.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main>
      <section className={style.homeSection}>
        <article>
          <img
            src={Logo}
            alt="imagem escrito rick and morty nas cores azul e verde"
          />
          <h1>
            Conheça o mundo caótico de <span>Rick and Morty!</span>
          </h1>
          <p className={style.wubbaLubba}>Wubba Lubba Dub Dub!</p>
          <h2>
            Entre no portal e <span>explore esse universo →</span>
          </h2>
          <p className={style.features}>
            Curiosidades, personagens, imagens e muito mais!
          </p>
        </article>
        <div className={style.portalContainer}>
          <img
            onClick={() => navigate("/about")}
            src={PortalImage}
            alt="imagem do portal de rick and morty, com diferentes tons de verde"
          />
        </div>
      </section>
    </main>
  );
}
