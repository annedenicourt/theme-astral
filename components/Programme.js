import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { styled } from "styled-components";
import { presentation } from "../data/presentation";
import { programme } from "../data/programme";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

const ProgramDiv = styled.div`
  font-family: "Montserrat Alternates", sans-serif;
  background-image: url("/images/fond_ciel_bis.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  li {
    list-style: inside;
    font-weight: 600;
    margin: 10px 0;
    width: 85%;
    margin: auto;
    //padding-left: 50px;
    //text-indent: 4rem;
  }

  .title {
    font-family: "Anton", sans-serif;
  }

  .container_bg {
    position: relative;
    background-color: rgba(255, 255, 255, 0.8);
    width: 100%;
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export default function Programme() {
  const router = useRouter();
  const [showDetails, setShowDetails] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const handleAccordion = (lesson) => {
    if (!showDetails.includes(lesson)) {
      setShowDetails([...showDetails, lesson]);
    } else {
      const filteredArray = showDetails?.filter((item) => item !== lesson);
      setShowDetails(filteredArray);
    }
  };

  useEffect(() => {
    if (showAll) {
      let myArray = [];
      programme.modules?.forEach((module) => {
        myArray.push(module.lesson);
      });
      setShowDetails(myArray);
    } else {
      setShowDetails([]);
    }
  }, [showAll]);

  return (
    <ProgramDiv>
      <div id="programme" className="container_bg blue_dark">
        <div className="my-6">
          <div className="mb-6 title text-center text-2xl uppercase">
            {programme.title}
          </div>
          <div className="w-2/3 mb-6 mx-auto text-center">
            {programme.intro1}
          </div>
          <div className="w-2/3 mx-auto text-center">{programme.intro2}</div>
          <div
            className="w-2/3 mx-auto mt-8 text-end cursor-pointer underline"
            onClick={() => setShowAll(!showAll)}
          >
            Tout voir
          </div>

          <div className="w-2/3 mt-8 mx-auto flex">
            <div className="w-1/2">
              {programme?.modules?.slice(0, 5).map((item, index) => {
                return (
                  <div
                    key={`first-${index}`}
                    className="my-6 flex flex-col items-center justify-center"
                  >
                    <div className={`w-80 flex items-center`}>
                      <div
                        className="w-5 h-5 cursor-pointer rounded-full"
                        onClick={() => handleAccordion(item.lesson)}
                      >
                        {showDetails.includes(item.lesson) ? (
                          <FaMinusCircle size={23} />
                        ) : (
                          <FaPlusCircle size={23} />
                        )}
                      </div>
                      <div className={`title ml-2 text-lg uppercase`}>
                        {item.title}
                      </div>
                    </div>
                    {showDetails.includes(item.lesson) && (
                      <ul className="w-80 mt-4">
                        {item.details?.map((detail) => {
                          return <li key={`first-${detail}`}>{detail}</li>;
                        })}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="w-1/2">
              {programme?.modules?.slice(5).map((item, index) => {
                return (
                  <div
                    key={`second-${index}`}
                    className="my-6 flex flex-col items-center justify-center"
                  >
                    <div className={`w-80 flex items-center`}>
                      <div
                        className="w-5 h-5 cursor-pointer rounded-full"
                        onClick={() => handleAccordion(item.lesson)}
                      >
                        {showDetails.includes(item.lesson) ? (
                          <FaMinusCircle size={23} />
                        ) : (
                          <FaPlusCircle size={23} />
                        )}
                      </div>
                      <div className={`title ml-2 text-lg uppercase`}>
                        {item.title}
                      </div>
                    </div>
                    {showDetails.includes(item.lesson) && (
                      <ul className="w-80 mt-4">
                        {item.details?.map((detail) => {
                          return <li key={`second-${detail}`}>{detail}</li>;
                        })}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className={`title mt-8 flex justify-center`}>
            <button
              className={`px-6 py-3 bg_blue_dark text-white text-xl rounded-md uppercase transform hover:scale-95 duration-75`}
            >
              {programme.buttonText}
            </button>
          </div>
        </div>
      </div>
    </ProgramDiv>
  );
}
