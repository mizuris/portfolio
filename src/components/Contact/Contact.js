import React, { useEffect } from "react";
import {
  Adress,
  AdressGroup,
  ContactInfo,
  Icon,
  StyledContact,
  Socials,
  ScrollTop,
} from "./Contact.styled";
import { MdPhone, MdEmail, MdPerson } from "react-icons/md";
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { BiArrowToTop } from "react-icons/bi";
import ContactForm from "../ContactForm/ContactForm";
import AOS from "aos";
import { Link } from "react-scroll";

function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <StyledContact>
      <ScrollTop>
        <Link to="header" smooth={true}>
          <BiArrowToTop />
        </Link>
      </ScrollTop>
      <ContactInfo data-aos="fade-up">
        <h3>Contact Info</h3>
        <AdressGroup>
          <Icon>
            <MdPerson />
          </Icon>
          <Adress>Piotr Bątor</Adress>
        </AdressGroup>
        <AdressGroup>
          <Icon>
            <MdPhone />
          </Icon>
          <Adress>+48 000-000-000</Adress>
        </AdressGroup>
        <AdressGroup>
          <Icon>
            <MdEmail />
          </Icon>
          <Adress>aaaa@gmail.com</Adress>
        </AdressGroup>
        <Socials>
          <Icon>
            <a
              href="https://www.facebook.com/piotr.bator.33/"
              rel="noreferrer"
              target="_blank"
            >
              <AiFillFacebook />
            </a>
          </Icon>
          <Icon>
            <a
              href="https://github.com/mizuris/"
              rel="noreferrer"
              target="_blank"
            >
              <AiFillGithub />
            </a>
          </Icon>
          <Icon>
            <a
              href="https://www.linkedin.com/in/piotr-b%C4%85tor-b4b95620a/"
              rel="noreferrer"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
          </Icon>
        </Socials>
      </ContactInfo>
      <ContactForm />
    </StyledContact>
  );
}

export default Contact;
