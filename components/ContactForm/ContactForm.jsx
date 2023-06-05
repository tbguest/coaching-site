import React, { useState } from "react";
import styles from "./ContactForm.module.css";

const ContactForm = ({ children }) => {
  // States for contact form fields
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleFormStateReset = () => {
    setFullname("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  //   Form validation state
  const [errors, setErrors] = useState({});

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState("Send");

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  // Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    return isValid;
  };

  //   Handling form submit

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
    }
    handleFormStateReset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1>Send a message</h1>

        <label htmlFor="fullname" className={styles.form_label}>
          Full name<span className={styles.highlight}>*</span>
        </label>
        <input
          type="text"
          name="fullname"
          className={styles.input}
          value={fullname}
          onChange={(e) => {
            setFullname(e.target.value);
          }}
        />

        <label htmlFor="email" className={styles.form_label}>
          E-mail<span className={styles.highlight}>*</span>
        </label>
        <input
          type="email"
          name="email"
          className={styles.input}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <label htmlFor="subject" className={styles.form_label}>
          Subject<span className={styles.highlight}>*</span>
        </label>
        <input
          type="text"
          name="subject"
          className={styles.input}
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value);
          }}
        />

        <label htmlFor="message" className={styles.form_label}>
          Message<span className={styles.highlight}>*</span>
        </label>
        <textarea
          name="message"
          className={styles.input}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></textarea>
        <div className={styles.button_container}>
          <button className={styles.button} aria-label="Send message">
            {buttonText}
          </button>
        </div>
        {showSuccessMessage ? (
          <p>Email sent!</p>
        ) : showFailureMessage ? (
          <p>Sending failed...</p>
        ) : null}
      </form>
    </>
  );
};

export default ContactForm;
