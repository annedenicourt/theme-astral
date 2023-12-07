import Link from "next/link";
import { useRouter } from "next/router";
import { styled } from "styled-components";

const MyFooterDiv = styled.div`
  font-family: "Montserrat Alternates", sans-serif;
  color: #fff;
  background-color: #1c2649;
  height: 50px;
  //font-family: "Anton", sans-serif;
  //font-size: 18px;
`;
export default function MyFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <MyFooterDiv>
      <div className="h-full justify-center flex items-center text-sm">
        <div>
          Tous droits réservés ® Copyright {currentYear} Astro thème astral
        </div>
      </div>
    </MyFooterDiv>
  );
}
