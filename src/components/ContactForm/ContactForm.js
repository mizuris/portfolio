import React, { useState, useEffect } from "react";
import {
  FormHeader,
  FormText,
  Input,
  InputGroup,
  Label,
  MessageTextField,
  StyledForm,
  SubmitButton,
} from "./ContactForm.styled";
import AOS from "aos";
import emailjs from "emailjs-com";

function ContactForm() {
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSuccess(false);

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
        }
      })
      .then(() => e.target.reset());
  };

  useEffect(() => {
    AOS.init();
  }, []);

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
      <InputGroup data-aos="fade-up">
        <SubmitButton
          value={success ? "Send another email" : "Send email"}
          success={success}
        />
      </InputGroup>
    </StyledForm>
  );
}

export default ContactForm;
