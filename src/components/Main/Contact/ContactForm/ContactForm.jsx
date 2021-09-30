import React from "react";
import useForm from "../../../../hooks/useForm";
import { validateForm } from "../../../../helpers/ValidateForm";
import {
  Form,
  FormInput,
  FormMessage,
  HiddenLabel,
  FormButtonWrap,
  FormButton,
  Error,
} from "./ContactFormStyles";
// import Notification from "../../../global/Notification/Notification";

const ContactForm = () => {
  const { handleChange, handleSubmit, values, errors} =
    useForm(validateForm);

  return (
    <>
      <Form
        action="https://formspree.io/f/xjvjzbnp"
        method="POST"
        enctype="multipart/form-data"
      >
        {/* {isSubmitting === true ? <Notification>Message Sent!</Notification> : null} */}
        <FormInput>
          <HiddenLabel htmlFor="name">Enter your name</HiddenLabel>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && (
            <Error>
              {errors.name}{" "}
              <span>
                <i className="fas fa-exclamation-circle"></i>
              </span>
            </Error>
          )}
        </FormInput>
        <FormInput>
          <HiddenLabel htmlFor="email">Enter your email address</HiddenLabel>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && (
            <Error>
              {errors.email}{" "}
              <span>
                <i className="fas fa-exclamation-circle"></i>
              </span>
            </Error>
          )}
        </FormInput>
        <FormInput>
          <HiddenLabel htmlFor="phone">Enter your phone number</HiddenLabel>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Phone"
            value={values.phone}
            onChange={handleChange}
          />
          {errors.phone && (
            <Error>
              {errors.phone}{" "}
              <span>
                <i className="fas fa-exclamation-circle"></i>
              </span>
            </Error>
          )}
        </FormInput>
        <FormMessage>
          <HiddenLabel htmlFor="message">Type your message</HiddenLabel>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            value={values.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && (
            <Error>
              {errors.message}{" "}
              <span>
                <i className="fas fa-exclamation-circle"></i>
              </span>
            </Error>
          )}
        </FormMessage>
        <FormButtonWrap>
          <FormButton onClick={handleSubmit} type="submit">
            submit
          </FormButton>
        </FormButtonWrap>
      </Form>
    </>
  );
};

export default ContactForm;
