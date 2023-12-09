import Link from "next/link";
import { useRouter } from "next/router";
import { styled } from "styled-components";

const BannerDiv = styled.div`
  font-family: "Montserrat Alternates", sans-serif;
  color: #fff;
  background-image: url("/images/fond-ciel.webp");
  background-size: 100vw;
  background-position: top;
  background-attachment: fixed;
  background-repeat: no-repeat;
  height: 390px;
  padding-top: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;

  .title {
    font-family: "Anton", sans-serif;
  }
  .bg_transparent {
    background-color: rgba(255, 255, 255, 0.6);
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    height: 290px;
    padding-bottom: 10px;
  }
`;
export default function Banner() {
  const router = useRouter();

  return (
    <BannerDiv>
      <div className="w-full md:w-1/3 h-full flex flex-col items-center justify-center">
        <div className="mb-2 text-xl md:text-xl lg:text-3xl">
          J&apos;apprends à faire un
        </div>
        <div className="title text-4xl lg:text-6xl">thème astral</div>
      </div>
      <div className="w-full md:w-2/3">
        <div className="flex items-center justify-around">
          <div className="w-32 h-32 md:w-36 md:h-36 lg:w-52 lg:h-52 flex flex-col items-center justify-center blue_dark bg_transparent rounded-full">
            <div className="title text-xs md:text-base lg:text-xl">pour</div>
            <div className="title text-xs  md:text-base lg:text-xl">
              mieux comprendre
            </div>
            <div className="mt-2 md:mt-1 text-xs lg:text-base text-center">
              mon mode de fonctionnement
            </div>
            <div className="text-xs lg:text-base text-center">
              et celui des autres
            </div>
          </div>
          <div className="w-32 h-32 md:w-36 md:h-36 lg:w-52 lg:h-52 flex flex-col items-center justify-center blue_dark bg_transparent rounded-full">
            <div className="title text-xs  md:text-base lg:text-xl">pour</div>
            <div className="title text-xs  md:text-base lg:text-xl">
              accompagner
            </div>
            <div className="mt-2 md:mt-1 text-xs lg:text-base text-center">
              toute personne
            </div>
            <div className="text-xs lg:text-base text-center">
              dans une démarche
            </div>
            <div className="text-xs lg:text-base text-center">
              {" "}
              de connaissance
            </div>
            <div className="text-xs lg:text-base text-center">de soi</div>
          </div>
          <div className="w-32 h-32 md:w-36 md:h-36 lg:w-52 lg:h-52 flex flex-col items-center justify-center blue_dark bg_transparent rounded-full">
            <div className="title text-xs  md:text-base lg:text-xl">
              pour débuter ou
            </div>
            <div className="title text-xs  md:text-base lg:text-xl">
              approfondir
            </div>
            <div className="mt-2 md:mt-1 text-xs lg:text-base text-center">
              un travail de développement personnel
            </div>
          </div>
        </div>
      </div>
    </BannerDiv>
  );
}
