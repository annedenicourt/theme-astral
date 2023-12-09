import Link from "next/link";
import { useRouter } from "next/router";
import { styled } from "styled-components";
import { presentation } from "../data/presentation";
import { FaPlus, FaPlusCircle } from "react-icons/fa";

const PresentationDiv = styled.div`
  font-family: "Montserrat Alternates", sans-serif;
  background-image: url("/images/fond_ciel.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;

  .title {
    font-family: "Anton", sans-serif;
  }
  .bg_transparent {
    background-color: rgba(255, 255, 255, 0.6);
  }

  .container_bg {
    position: relative;
    background-color: rgba(255, 255, 255, 0.8);
    //height: 356px;
    width: 100%;
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    //justify-content: center;
  }
`;
export default function Presentation() {
  const router = useRouter();

  return (
    <PresentationDiv>
      <div className="container_bg blue_dark">
        <div className="flex flex-col items-center">
          <div className="w-full md:w-2/3 mt-6 text-center text-base md:text-xl leading-6 md:leading-9">
            Le thème astral est un{" "}
            <span className="font-semibold">outil formidable</span> à utiliser{" "}
            <span className="font-semibold">pour soi</span> mais aussi pour{" "}
            <span className="font-semibold">accompagner les autres</span> et les
            aider à prendre conscience de leurs points forts et de leurs points
            faibles.
          </div>
          <div className="w-36 h-0.5 my-8 bg_blue_dark"></div>
        </div>
        <div className="my-6 flex flex-col lg:flex-row">
          {presentation?.map((item, index) => {
            return (
              <div key={index} className="w-full lg:w-1/3">
                {index === 1 ? (
                  <div
                    className={`h-full max-w-md px-5 flex flex-col items-center justify-between text-center
                      py-5 bg_blue_dark text-white rounded-lg`}
                  >
                    <div className={`mt-3 mb-5 title text-2xl uppercase`}>
                      <div className="flex items-center">
                        Les{" "}
                        <span className="mx-2">
                          <FaPlusCircle />
                        </span>
                        de notre formation
                      </div>
                    </div>
                    <div className="mb-1 font-semibold text-xl text-orange-400">
                      {item.subtitle1}
                    </div>
                    <div className="mb-3 text-sm">
                      Notre formation thème astral se démarque des autres
                      formations présentes sur internet. En plus des modules
                      consacrés à l’étude des signes, des maisons et des
                      planètes, nous vous proposons{" "}
                      <span className="text-orange-400">
                        2 modules entièrement consacrés aux noeuds lunaires
                        (karma et dharma) ainsi qu’à la Lune Noire
                      </span>{" "}
                      et aux 12 blessures/blocages qu’elle génère.
                    </div>
                    <div className="font-semibold text-xl text-orange-400">
                      Blessures de Lune Noire
                    </div>
                    <div className="mb-1 font-semibold text-xl text-orange-400">
                      et nœuds lunaires
                    </div>
                    <div className="mb-3 text-sm">
                      Ces modules sont particulièrement intéressants pour le
                      développement personnel et comprendre ce qui nous freine
                      dans notre fonctionnement au quotidien.
                    </div>
                    <div className="mb-1 font-semibold">{item.subtitle3}</div>
                    <div className="mb-3 text-sm">{item.paragraph3}</div>
                    <Link href={item.buttonHref} target={"_blank"}>
                      <div className={`title my-4 blue_dark`}>
                        <button
                          className={`px-6 py-3 text-xl bg-white rounded-md transform hover:scale-95 duration-75`}
                        >
                          {item.buttonText}
                        </button>
                      </div>
                    </Link>
                  </div>
                ) : (
                  <div
                    className={`h-full max-w-md px-5 flex flex-col items-center justify-between text-center`}
                  >
                    <div className={`mt-3 mb-5 title text-lg uppercase`}>
                      {item.title}
                    </div>
                    <div className="mb-1 font-semibold">{item.subtitle1}</div>
                    <div className="mb-3 text-sm">{item.paragraph1}</div>
                    <div className="mb-1 font-semibold">{item.subtitle2}</div>
                    <div className="mb-3 text-sm">{item.paragraph2}</div>
                    <div className="mb-1 font-semibold">{item.subtitle3}</div>
                    <div className="mb-3 text-sm">{item.paragraph3}</div>
                    <Link href={item.buttonHref}>
                      <div className={`title my-4 text-white`}>
                        <button
                          className={`px-6 py-3 text-xl bg_blue_dark rounded-md shadow-lg transform hover:scale-95 duration-75`}
                        >
                          {item.buttonText}
                        </button>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </PresentationDiv>
  );
}
