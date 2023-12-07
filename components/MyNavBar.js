import Link from "next/link";
import { useRouter } from "next/router";
import { styled } from "styled-components";

const NavBarDiv = styled.div`
  color: #1c2649;
  background-color: rgba(255, 255, 255, 0.9);
  font-family: "Anton", sans-serif;
  font-size: 18px;
  position: fixed;
  z-index: 1;
  width: 100%;
`;
export default function MyNavBar() {
  const router = useRouter();

  return (
    <NavBarDiv>
      <nav className="px-4 py-3 flex align-items justify-between blue_dark">
        <div>THÈME ASTRAL</div>
        <div className="" id="navbarNav">
          <div className="flex justify-end items-center">
            <div className="">
              <Link href="/#programme">
                <div className={"nav-link"}>Programme</div>
              </Link>
            </div>
            <div className="mx-4">
              <Link href="/#tarifs">
                <div className={"nav-link"}>Tarifs</div>
              </Link>
            </div>
            <div className="">
              <Link href="/#contact">
                <div className={"nav-link"}>Contact</div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </NavBarDiv>
  );
}
