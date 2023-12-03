import { styled } from "styled-components";
import NavBar from "../components/navbar";

const CustomDiv = styled.div`
  color: red;
  font-family: "Anton", sans-serif;
`;
export default function Page() {
  return (
    <CustomDiv>
      <NavBar />
      <h1>Hello, Next.js!</h1>
    </CustomDiv>
  );
}
