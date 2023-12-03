import Link from "next/link";
import { useRouter } from "next/router";
import { styled } from "styled-components";

const CustomDiv = styled.div`
  //color: red;
  font-family: "Anton", sans-serif;
  font-size: 18px;
`;
export default function NavBar() {
  const router = useRouter();

  return (
    <CustomDiv>
      <nav className="px-4 py-3 blue_dark bg-white">
        <div className="" id="navbarNav">
          <div className="flex justify-end items-center">
            <div className="">
              <Link href="/#programme">
                <div
                  className={
                    router.asPath == "/#programme"
                      ? `nav-link ${active}`
                      : "nav-link"
                  }
                >
                  Programme
                </div>
              </Link>
            </div>
            <div className="mx-4">
              <Link href="/#tarifs">
                <div
                  className={
                    router.asPath == "/tarifs"
                      ? `nav-link ${styles.active}`
                      : "nav-link"
                  }
                >
                  Tarifs
                </div>
              </Link>
            </div>
            <div className="">
              <Link href="/#contact">
                <div
                  className={
                    router.asPath == "/#contact"
                      ? `nav-link ${styles.active}`
                      : "nav-link"
                  }
                >
                  Contact
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </CustomDiv>
  );
}
