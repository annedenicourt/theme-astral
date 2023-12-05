import Link from "next/link";
import { useRouter } from "next/router";
import { styled } from "styled-components";
import { presentation } from "../data/presentation";

const CustomDiv = styled.div`
  font-family: "Montserrat Alternates", sans-serif;
  background-image: url("/images/fond_ciel.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 356px;

  .title {
    font-family: "Anton", sans-serif;
  }
  .bg_transparent {
    background-color: rgba(255, 255, 255, 0.6);
  }

  .container_bg {
    position: relative;
    background-color: rgba(255, 255, 255, 0.6);
    height: 356px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    //justify-content: center;
  }
`;
export default function Presentation() {
  const router = useRouter();

  return (
    <CustomDiv>
      <div className="container_bg blue_dark">
        <div className="flex flex-col items-center">
          <div>Le thème astral est un outil formidable</div>
          <div className="w-36 h-0.5 my-6 bg_blue_dark"></div>
        </div>
        <div className="flex">
          {presentation?.map((item, index) => {
            return (
              <div key={index} className="w-1/3">
                <div className="px-3">
                  <div className="title">{item.title}</div>
                  <div>{item.subtitle1}</div>
                  <div>{item.paragraph1}</div>
                  <div>{item.subtitle2}</div>
                  <div>{item.paragraph2}</div>
                  <div>{item.subtitle3}</div>
                  <div>{item.paragraph3}</div>
                  <div>
                    <div className={item.buttonClassName}>
                      {item.buttonText}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </CustomDiv>
  );
}
