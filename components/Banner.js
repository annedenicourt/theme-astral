import Link from "next/link";
import { useRouter } from "next/router";
import { styled } from "styled-components";

const CustomDiv = styled.div`
  font-family: "Montserrat Alternates", sans-serif;
  color: #fff;
  background-image: url("/images/fond_ciel.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  //font-size: 18px;
  height: 356px;
  display: flex;
  flex-direction: row;
  align-items: center;

  .title {
    font-family: "Anton", sans-serif;
  }
  .bg_transparent {
    background-color: rgba(255, 255, 255, 0.6);
  }
`;
export default function Banner() {
  const router = useRouter();

  return (
    <CustomDiv>
      <div className="w-1/3 h-full flex flex-col items-center justify-center">
        <div className="mb-2 text-3xl">J&apos;apprends à faire un</div>
        <div className="title text-6xl">thème astral</div>
      </div>
      <div className="w-2/3">
        <div className="flex items-center justify-around">
          <div className="w-52 h-52 flex flex-col items-center justify-center blue_dark bg_transparent rounded-full">
            <div className="title text-xl">pour mieux</div>
            <div className="title text-xl">comprendre</div>
            <div className="mt-2 text-center">mon mode de fonctionnement</div>
          </div>
          <div className="w-52 h-52 flex flex-col items-center justify-center blue_dark bg_transparent rounded-full">
            <div className="title text-xl">pour</div>
            <div className="title text-xl">accompagner</div>
            <div className="mt-2 text-center">toute personne</div>
            <div className="text-center">dans une démarche</div>
            <div className="text-center"> de connaissance</div>
            <div className="text-center">de soi</div>
          </div>
          <div className="w-52 h-52 flex flex-col items-center justify-center blue_dark bg_transparent rounded-full">
            <div className="title text-xl">pour débuter ou</div>
            <div className="title text-xl">approfondir</div>
            <div className="mt-2 text-center">
              un travail de développement personnel
            </div>
          </div>
        </div>
      </div>
    </CustomDiv>
  );
}
