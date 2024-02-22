import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import appStyles from "../../App.module.css";
import styles from "../../styles/Contact.module.css";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import btnStyles from "../../styles/Button.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Footer from "../../components/Footer";
import ContactSuccessForm from "./ContactSuccessForm";

// ContactCreateForm Component
const ContactCreateForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      await axios.post(
        "https://th-1982-artistery-avenue-198c22334f81.herokuapp.com/contacts/",
        data,
      );
      setSuccessMessage(
        "Thank you for the feedback! We are reading your message!",
      );
      setErrorMessage("");
      reset();
    } catch (error) {
      setErrorMessage("Something went wrong! Make sure to fill in all fields!");
      setSuccessMessage("");
      console.error(error);
    }
  };

  // ContactCreateForm Structure
  return (
    <>
      <Container className={`${appStyles.Content} p-4 mt-2`}>
        <Row className="mb-3">
          <Col>
            <h1 className={styles.Header}>Contact Us</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            {successMessage ? (
              <ContactSuccessForm />
            ) : (
              <div>
                {errorMessage && (
                  <div className="alert alert-danger" role="alert">
                    {errorMessage}
                  </div>
                )}
                <Form onSubmit={handleSubmit(onSubmit)} className={styles.Form}>
                  <div className="d-flex flex-column">
                    
                    <input
                      {...register("email", { required: true })}
                      id="email"
                      className={`${styles.Input} mb-3`}
                      placeholder="Email"
                    />

      
                    <input
                      {...register("name", { required: true })}
                      id="name"
                      className={`${styles.Input} mb-3`}
                      placeholder="Name"
                    />

                   
                    <input
                      {...register("subject", { required: true })}
                      id="subject"
                      className={`${styles.Input} mb-3`}
                      placeholder="Subject"
                    />

                    <textarea
                      {...register("message", { required: true })}
                      id="message"
                      className={`${styles.Input} mb-2`}
                      placeholder="Message"
                      rows={6}
                      cols={40}
                    />
                    <Button
                      className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright} mt-2`}
                      type="submit"
                    >
                      Submit
                    </Button>
                  </div>
                </Form>
              </div>
            )}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default ContactCreateForm;