import React, { useState } from "react";
import {
  FormHeader,
  FormText,
  Input,
  InputGroup,
  Label,
  MessageTextField,
  StyledForm,
  SubmitButton,
  SubmitGroup,
} from "./ContactForm.styled";
import emailjs from "emailjs-com";
import { ImSpinner2 } from "react-icons/im";
import { HTMLContent } from "../HTMLContent/HTMLContent";
import { useTranslation } from "react-i18next";

function ContactForm() {
  const { t } = useTranslation();
  const [success, setSuccess] = useState(false);
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSuccess(false);
    setSending(true);

    emailjs
      .sendForm(
        "service_portfolio",
        "template_portfolio",
        e.target,
        "user_KIKxBC68gHEFRpZIzNez5"
      )
      .then((res) => {
        if (res.status === 200) {
          setSuccess(true);
          setSending(false);
        }
      })
      .then(() => {
        setSending(false);
        e.target.reset();
      });
  };

  return (
    <StyledForm onSubmit={sendEmail} name="contact">
      <FormHeader data-aos="fade-up">{t("contact:form:heading")}</FormHeader>
      <FormText data-aos="fade-up">{t("contact:form:text")}</FormText>
      <InputGroup data-aos="fade-up">
        <Label htmlFor="name">{t("contact:form:name-input")}</Label>
        <Input
          placeholder={t("contact:form:name-placeholder")}
          required
          type="text"
          name="name"
        />
      </InputGroup>
      <InputGroup data-aos="fade-up">
        <Label htmlFor="email">{t("contact:form:e-mail-placeholder")}</Label>
        <Input
          placeholder={t("contact:form:e-mail-placeholder")}
          required
          type="email"
          name="email"
        />
      </InputGroup>
      <InputGroup data-aos="fade-up">
        <Label htmlFor="message">{t("contact:form:message-placeholder")}</Label>
        <MessageTextField
          placeholder={t("contact:form:message-placeholder")}
          name="message"
        />
      </InputGroup>
      <SubmitGroup data-aos="fade-up">
        <SubmitButton
          type="submit"
          value={
            success
              ? t("contact:form:send-another-message")
              : t("contact:form:send-message")
          }
          success={success}
          disabled={sending}
        />{" "}
        {sending && (
          <span>
            <ImSpinner2 />
          </span>
        )}
        {!sending && success && (
          <span data-aos="fade-left">
            <HTMLContent>{t("contact:form:thank-you-message")}</HTMLContent>
          </span>
        )}
      </SubmitGroup>
    </StyledForm>
  );
}

export default ContactForm;
