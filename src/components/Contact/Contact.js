import React from "react";
import {
  ContactForm,
  ContactHeader,
  Input,
  MessageTextField,
  StyledContact,
} from "./Contact.styled";

function Contact() {
  return (
    <StyledContact>
      <ContactHeader>
        <h3>Contact</h3>
        <p>
          Contact me on <em>pbator94@gmail.com</em> or fill out the form to send
          me a message.
        </p>
      </ContactHeader>
      <ContactForm>
        <Input />
        <Input />
        <MessageTextField />
      </ContactForm>
    </StyledContact>
  );
}

export default Contact;
