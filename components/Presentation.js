import Link from "next/link";
import { useRouter } from "next/router";
import { styled } from "styled-components";
import { presentation } from "../data/presentation";
import { FaPlus } from "react-icons/fa";

const PresentationDiv = styled.div`
  font-family: "Montserrat Alternates", sans-serif;
  background-image: url("/images/fond_ciel.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  //height: 356px;

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
          <div className="w-2/3 mt-6 text-center text-xl leading-9">
            Le thème astral est un{" "}
            <span className="font-semibold">outil formidable</span> à utiliser{" "}
            <span className="font-semibold">pour soi</span> mais aussi pour{" "}
            <span className="font-semibold">accompagner les autres</span> et les
            aider à prendre conscience de leurs points forts et de leurs points
            faibles.
          </div>
          <div className="w-36 h-0.5 my-8 bg_blue_dark"></div>
        </div>
        <div className="my-6 flex">
          {presentation?.map((item, index) => {
            return (
              <div key={index} className="w-1/3">
                <div
                  className={`h-full max-w-md px-5 flex flex-col items-center justify-between text-center ${
                    index === 1 && "py-5 bg_blue_dark text-white rounded-lg"
                  }`}
                >
                  <div
                    className={`mt-3 mb-5 title ${
                      index === 1 ? "text-2xl" : "text-lg"
                    } uppercase`}
                  >
                    {index === 1 ? (
                      <div className="flex items-center">
                        Les{" "}
                        <span className="mx-2">
                          <FaPlus />
                        </span>
                        de notre formation
                      </div>
                    ) : (
                      item.title
                    )}
                  </div>
                  <div className="mb-1 font-semibold">{item.subtitle1}</div>
                  <div className="mb-3 text-sm">{item.paragraph1}</div>
                  <div className="mb-1 font-semibold">{item.subtitle2}</div>
                  <div className="mb-3 text-sm">{item.paragraph2}</div>
                  <div className="mb-1 font-semibold">{item.subtitle3}</div>
                  <div className="mb-3 text-sm">{item.paragraph3}</div>
                  <Link
                    href={item.buttonHref}
                    target={index === 1 ? "_blank" : "_self"}
                  >
                    <div
                      className={`title mt-8 ${
                        index === 1 ? "blue_dark" : "text-white"
                      } `}
                    >
                      <button
                        className={`px-6 py-3 text-xl ${
                          index === 1 ? "bg-white" : "bg_blue_dark"
                        } rounded-md transform hover:scale-95 duration-75`}
                      >
                        {item.buttonText}
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PresentationDiv>
  );
}
