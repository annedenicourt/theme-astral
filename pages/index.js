import Head from "next/head";
import { styled } from "styled-components";
import MyNavBar from "../components/MyNavBar";
import Banner from "../components/Banner";
import Presentation from "../components/Presentation";
import Programme from "../components/Programme";
import Tarifs from "../components/Tarifs";
import Contact from "../components/Contact";
import MyFooter from "../components/MyFooter";
const CustomDiv = styled.div`
  font-family: "Montserrat Alternates", sans-serif;
  .section_break {
    background-image: url("/images/fond-ciel-bis.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100vw;
    background-attachment: fixed;
    height: 200px;
  }
`;
export default function Page() {
  return (
    <div>
      <Head>
        <title>Thème astral</title>
        <meta name="description" content="Apprendre à faire un thème astral" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CustomDiv>
        <MyNavBar />
        <Banner />
        <Presentation />
        <div className="section_break"></div>
        <Programme />
        <Tarifs />
        <Contact />
        <MyFooter />
      </CustomDiv>
    </div>
  );
}
