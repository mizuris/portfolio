import React, { useState, useEffect } from "react";
import {
  FormHeader,
  FormText,
  Input,
  InputGroup,
  Label,
  MessageTextField,
  StyledForm,
} from "./ContactForm.styled";
import { Button } from "../Styled/styled";
import AOS from "aos";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <StyledForm onSubmit={handleSubmit} name="contact">
      <FormHeader data-aos="fade-up">Let's talk!</FormHeader>
      <FormText data-aos="fade-up">
        Call me, send me an e-mail or send your message below!
      </FormText>
      <InputGroup data-aos="fade-up">
        <Label htmlFor="name">Name</Label>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          required
          type="text"
          name="name"
        />
      </InputGroup>
      <InputGroup data-aos="fade-up">
        <Label htmlFor="email">E-mail</Label>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your e-mail"
          required
          type="email"
          name="email"
        />
      </InputGroup>
      <InputGroup data-aos="fade-up">
        <Label htmlFor="message">Message</Label>
        <MessageTextField
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask me whatever you want!"
          name="message"
        />
      </InputGroup>
      <InputGroup>
        <Button type="submit" data-aos="fade-up">
          Send
        </Button>
      </InputGroup>
    </StyledForm>
  );
}

export default ContactForm;
