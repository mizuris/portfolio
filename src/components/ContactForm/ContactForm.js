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

function ContactForm() {
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
      <FormHeader data-aos="fade-up">Let's talk!</FormHeader>
      <FormText data-aos="fade-up">
        Call me, send me an e-mail or send your message below!
      </FormText>
      <InputGroup data-aos="fade-up">
        <Label htmlFor="name">Name</Label>
        <Input placeholder="Your name" required type="text" name="name" />
      </InputGroup>
      <InputGroup data-aos="fade-up">
        <Label htmlFor="email">E-mail</Label>
        <Input placeholder="Your e-mail" required type="email" name="email" />
      </InputGroup>
      <InputGroup data-aos="fade-up">
        <Label htmlFor="message">Message</Label>
        <MessageTextField
          placeholder="Ask me whatever you want!"
          name="message"
        />
      </InputGroup>
      <SubmitGroup data-aos="fade-up">
        <SubmitButton
          type="submit"
          value={success ? "Send another email" : "Send email"}
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
            Thank you! <span>👍</span>
          </span>
        )}
      </SubmitGroup>
    </StyledForm>
  );
}

export default ContactForm;
