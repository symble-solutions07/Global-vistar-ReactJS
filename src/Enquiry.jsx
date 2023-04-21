import React, { useRef } from "react";
import {  Select } from "@mantine/core";
import emailjs from "@emailjs/browser";
import "./Enquiry.css";
// import { Header } from "@mantine/core";
import Header from "./Header";
import Footer from "./Footer";
const Enquiry = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l89qcsa",
        "template_ritiioe",
        form.current,
        "-TMWI-rA9Z12xMD0O"
      )
      .then(
        (result) => {
              console.log(result.text);
              console.log("email sent!");
        },
        (error) => {
            console.log(error.text);
            console.log("email not sent!");
        }
      );
  };

  return (
    <>
      <Header />
      <h1 className="header-enquiry">Enquiry Form</h1>
      <hr className="enquiry-hr" />
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <Select
          mt="md"
          withinPortal
          data={[
            "Mighty Millets",
            "Desi Rass",
            "Shivratna Jaggery",
            "Anjani Food Products",
            "Tribe Cook",
            "Bee Basket",
            "Max Food Products",
          ]}
          // placeholder="Pick one"
          label="Categories"
        />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
      <Footer></Footer>
    </>
  );
};

export default Enquiry;

