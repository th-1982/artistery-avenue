import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import appStyles from "../../App.module.css";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { removeTokenTimestamp } from "../../utils/utils";
import buttonStyles from "../../styles/Button.module.css"
import PropTypes from 'prop-types';

const ProfileDeleteForm = ({ id }) => {
  const setCurrentUser = useSetCurrentUser();
  const history = useHistory();

  const handleDelete = async () => {
    try {
      await axios.delete(`/profiles/${id}/delete/`);

      setCurrentUser(null)
      removeTokenTimestamp();
      localStorage.removeItem("accessToken");
      history.push("/signup");
    } catch (error) {
      console.error("Error deleting profile:", error.message);
    }
  };

  return (
    <Container className={`${appStyles.Content} p-4 mt-2`}>
      <Row className={buttonStyles.Row}>
        <Col className="my-auto p-0 p-md-2 d-flex align-items-center justify-content-center" md={12}>
          <div>
            <h5 className="text-center">
              <i className="fa-solid fa-circle-exclamation"></i>Warning
            </h5>
            <p>You are about to delete your account. Are you sure?</p>
            <button className={`${buttonStyles.Button} ${buttonStyles.Wide} ${buttonStyles.Bright}`} onClick={handleDelete}>
              Delete Profile
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

// Add PropTypes validation
ProfileDeleteForm.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ProfileDeleteForm;