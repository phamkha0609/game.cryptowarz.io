import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button, message } from "antd";

export const ContactUs = () => {
  const form = useRef<any>();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3d00xkp",
        "template_9ryni4w",
        form.current,
        "UwN_Zns3_IlpTlmN9"
      )
      .then(
        (result: any) => {
          console.log(result.text);
          message.success("Your message was sent!");
        },
        (error: any) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form}>
      <h3 style={{ color: "#fff", textAlign: "left" }}>Contact us</h3>
      <p style={{ textAlign: "start" }}>Contact@cryptowarz.io</p>
      <p style={{ textAlign: "start" }}>
        Address: Rue des Bogards 44, 1000 Brussels -
        Belgium
      </p>
      <input
        type="text"
        name="user_name"
        placeholder="Name"
        style={{ width: "100%", marginBottom: "1em", height: "40px" }}
      />

      <input
        type="email"
        name="user_email"
        placeholder="Email"
        style={{ width: "100%", marginBottom: "1em", height: "40px" }}
      />

      <textarea
        name="message"
        placeholder="Message"
        style={{ width: "100%", marginBottom: "1em", height: "100px" }}
      />
      <Button block type="primary" size="large">
        Submit
      </Button>
    </form>
  );
};
