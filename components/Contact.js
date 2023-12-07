import Link from "next/link";
import { useRouter } from "next/router";
import { styled } from "styled-components";
import { presentation } from "../data/presentation";
import { programme } from "../data/programme";
import { FiSend } from "react-icons/fi";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const ContactDiv = styled.div`
  font-family: "Montserrat Alternates", sans-serif;
  color: #1c2649;
  background-image: url("/images/fond_ciel_bis.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100vw;
  background-attachment: fixed;

  .title {
    font-family: "Anton", sans-serif;
  }

  .container_bg {
    background-color: rgba(255, 255, 255, 0.8);
    width: 100%;
    //padding: 20px 10px;
    padding: 80px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export default function Programme() {
  const router = useRouter();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_if9q8wq",
        "contact_form",
        e.target,
        "user_BwL24v0D7KuEvBfg9MBkR"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Super !",
            text: "Votre message a bien été envoyé",
          });
          document.getElementById("contact_form").reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <ContactDiv>
      <div id="contact" className="container_bg">
        <div className="title mb-6 text-4xl text-center uppercase">
          Nous contacter
        </div>
        <form
          className="w-2/3 py-8 bg_blue_dark rounded-lg"
          id="contact_form"
          onSubmit={sendEmail}
        >
          <div className="w-96 mx-auto flex flex-col items-center">
            <label htmlFor="to_name"></label>
            <input
              className="hidden"
              type="text"
              name="to_name"
              id="to_name"
              placeholder="Votre nom"
              defaultValue={"theme_astral"}
            />
            <label htmlFor="name"></label>
            <input
              className="w-full my-3 p-2 rounded"
              type="text"
              name="user_name"
              id="name"
              placeholder="Votre nom"
              required
            />
            <label htmlFor="email"></label>
            <input
              className="w-full my-3 p-2 rounded"
              type="email"
              name="user_email"
              id="email"
              placeholder="Votre adresse mail"
              required
            />
            <label htmlFor="message"></label>
            <textarea
              className="w-full my-3 p-2 rounded"
              rows="5"
              name="message"
              id="message"
              placeholder="Votre message"
              required
            />
          </div>
          <div className="mt-8 flex justify-center">
            <button
              className="title px-4 py-2 flex items-center text-xl bg-white rounded-md transform hover:scale-95 duration-75"
              type="submit"
            >
              <div className="mr-2">
                <FiSend />
              </div>
              ENVOYER
            </button>
          </div>
        </form>
      </div>
    </ContactDiv>
  );
}
