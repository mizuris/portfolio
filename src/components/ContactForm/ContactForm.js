import React from "react";
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

function ContactForm() {
  return (
    <StyledForm>
      <FormHeader>Let's talk!</FormHeader>
      <FormText>
        Call me, send me an e-mail or send your message below!
      </FormText>
      <InputGroup>
        <Label htmlFor="name">Name</Label>
        <Input placeholder="Your name" required type="text" name="name" />
      </InputGroup>
      <InputGroup>
        <Label htmlFor="email">E-mail</Label>
        <Input placeholder="Your e-mail" required type="email" name="email" />
      </InputGroup>
      <InputGroup>
        <Label htmlFor="message">Message</Label>
        <MessageTextField
          placeholder="Ask me whatever you want!"
          name="message"
        />
      </InputGroup>
      <InputGroup>
        <Button>Send</Button>
      </InputGroup>
    </StyledForm>
  );
}

export default ContactForm;
