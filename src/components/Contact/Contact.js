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
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <StyledContact>
      <ContactForm />
      <ContactInfo data-aos="fade-up">
        <h4>{t("contact:details:heading")}</h4>
        <AdressGroup>
          <Icon>
            <MdPerson />
          </Icon>
          <Adress>{t("contact:details:person")}</Adress>
        </AdressGroup>
        <AdressGroup>
          <Icon>
            <MdPhone />
          </Icon>
          <Adress>{t("contact:details:phone-number")}</Adress>
        </AdressGroup>
        <AdressGroup>
          <Icon>
            <MdEmail />
          </Icon>
          <Adress>{t("contact:details:e-mail-address")}</Adress>
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
              href="www.linkedin.com/in/piotr-bątor"
              rel="noreferrer"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
          </Icon>
        </Socials>
      </ContactInfo>
      <ScrollTop>
        <Link to="header" smooth={true}>
          <BiArrowToTop />
        </Link>
      </ScrollTop>
    </StyledContact>
  );
}

export default Contact;
