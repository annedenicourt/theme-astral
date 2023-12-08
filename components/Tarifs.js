import Link from "next/link";
import { useRouter } from "next/router";
import { styled } from "styled-components";
import { presentation } from "../data/presentation";
import { programme } from "../data/programme";
import { FaPlusCircle } from "react-icons/fa";

const TarifDiv = styled.div`
  font-family: "Montserrat Alternates", sans-serif;
  color: #1c2649;
  background-image: url("/images/fond_ciel_bis.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100vw;
  background-attachment: fixed;
  padding: 80px 0;

  li {
    list-style: inside;
    font-weight: 600;
    margin: 20px 0;
  }

  .title {
    font-family: "Anton", sans-serif;
  }

  .container_bg {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export default function Tarifs() {
  const router = useRouter();

  return (
    <TarifDiv>
      <div
        id="tarifs"
        className="h-full flex flex-col justify-center items-center"
      >
        <div className="container_bg w-96 mb-12 rounded-lg">
          <div className="title mb-4 text-4xl uppercase">Formation</div>
          <div className="title text-4xl uppercase">thème astral</div>
          <div className="mt-8">
            <ul className="text-center">
              <li className="">60 heures de formation</li>
              <li className="">Accès illimité aux cours pendant 12 mois</li>
              <li className="">Vidéos accessibles à tout moment</li>
              <li className="">Support pédagogique téléchargeable</li>
              <li className="">Carte du ciel de votre naissance</li>
            </ul>
          </div>
          <div className="title mt-6 text-7xl uppercase">
            80
            <span className="text-3xl"> €</span>
          </div>
        </div>
        <Link
          href={
            "https://www.formation-astrologie-elearning.fr/courses/interpretation/?tab=tab-overview"
          }
          target={"_blank"}
        >
          <div className={`title mt-8 flex justify-center`}>
            <button
              className={`px-8 py-4 text-2xl bg-white rounded-md transform hover:scale-95 duration-75`}
            >
              JE M&lsquo;INSCRIS
            </button>
          </div>
        </Link>
      </div>
    </TarifDiv>
  );
}
