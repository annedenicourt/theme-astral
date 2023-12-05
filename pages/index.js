import { styled } from "styled-components";
import MenuNavBar from "../components/MenuNavBar";
import Banner from "../components/Banner";
import Presentation from "../components/Presentation";

const CustomDiv = styled.div`
  font-family: "Montserrat Alternates", sans-serif;
`;
export default function Page() {
  return (
    <CustomDiv>
      <MenuNavBar />
      <Banner />
      <Presentation />
    </CustomDiv>
  );
}
