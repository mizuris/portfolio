import React from "react";
import {
  Adress,
  AdressGroup,
  ContactInfo,
  Icon,
  StyledContact,
  Socials,
} from "./Contact.styled";
import { MdPhone, MdEmail, MdPerson } from "react-icons/md";
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import ContactForm from "../ContactForm/ContactForm";

function Contact() {
  return (
    <StyledContact>
      <ContactInfo>
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
