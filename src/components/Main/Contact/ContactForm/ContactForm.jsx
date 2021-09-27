import React from "react";
import {
  Form,
  FormInput,
  FormMessage,
  HiddenLabel,
  FormButtonWrap,
  FormButton
} from "./ContactFormStyles";

const ContactForm = () => {
  return (
    <>
      <Form>
        <FormInput>
          <HiddenLabel htmlFor="name">Enter your name</HiddenLabel>
          <input type="text" name="name" id="name" placeholder="Name" />
        </FormInput>
        <FormInput>
          <HiddenLabel htmlFor="email">Enter your email address</HiddenLabel>
          <input
            type="email"
            name=""
            email
            id="email"
            placeholder="Email Address"
          />
        </FormInput>
        <FormInput>
          <HiddenLabel htmlFor="phone">Enter your phone number</HiddenLabel>
          <input type="text" name="phone" id="phone" placeholder="Phone" />
        </FormInput>
        <FormMessage>
          <HiddenLabel htmlFor="message">Type your message</HiddenLabel>
          <input
            type="text"
            name="message"
            id="message"
            placeholder="Your Message"
            rows="4"
            cols="50"
          />
        </FormMessage>
        <FormButtonWrap>
          <FormButton>
            submit
          </FormButton>
          {/* <Button primary fixed>
            SUBMIT
          </Button> */}
        </FormButtonWrap>
      </Form>
    </>
  );
};

export default ContactForm;
