import React from "react";
import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const ContactForm = () => {
  const OnSubmit = (event) => {
    event.preventDefault();
    // console.log("name", event.target[input]).value;
    // console.log("email", event.target[input]).value;
    // console.log("text", event.target[textarea]).value;
    console.log(event);
  };

  const onViaCallSupport = () => {
    console.log("This is Via Support Chat Clicked");
  };
  const onViaCallSubmit = () => {
    console.log("Via Call Button Clicked");
  };

  return (
    <section className={styles.container}>
      <div className={styles.Contact_form}>
        <div className={styles.top_btn}>
          <Button
            onClick={onViaCallSupport}
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />

          <Button
            onClick={onViaCallSubmit}
            text="VIA CALL"
            icon={<FaPhoneAlt fontSize="24px" />}
          />
        </div>

        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="24px" />}
        />

        <form onClick={OnSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">E-Mail</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows={8} />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT" />
          </div>
        </form>
      </div>

      <div className={styles.Contact_image}>
        <img src="/images/Service 24_7-pana 1.svg" alt="contact image" />
      </div>
    </section>
  );
};

export default ContactForm;
