import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import styles from '../../styles/Button.module.css';
import btnStyles from "../../styles/Button.module.css";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import appStyles from "../../App.module.css";

const ProfileDeleteForm = ({ id }) => {
  console.log("User/Profile ID:", id);
  const history = useHistory();

  const handleDelete = async () => {
    try {
      await axios.delete(`/profiles/${id}/delete/`);

      localStorage.removeItem("accessToken");
      history.push("/signup");
    } catch (error) {
      console.error("Error, Failed deleting profile");
    }
  };

  return (
    <Container className={`${appStyles.Content} p-4 mt-2`}>
      <Row className={styles.Row}>
        <Col className="my-auto p-0 p-md-2 d-flex align-items-center justify-content-center" md={12}>
          <div>
            <p>You are about to delete your account. Are you sure?</p>
            <button className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`} onClick={handleDelete}>
              Delete Profile
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileDeleteForm;