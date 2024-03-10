import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import Alert from "react-bootstrap/Alert";
import btnStyles from "../../styles/Button.module.css";
import styles from "../../styles/ProfileReviews.module.css";
import wallPostStyles from "../../styles/WallPostCreateForm.module.css";

const WallPostCreateForm = ({ profileId, createWallPost, currentUser }) => {
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Authentication
    if (!currentUser) {
      setErrors([
        <div className={styles.errorMessage}>
          You must be logged in to post on the wall.
        </div>,
      ]);
      return;
    }

    // Character limit check set to >200 (change DRF-api model if I want set higher or lower count)
    if (content.length > 200) {
      setErrors([
        <div className={styles.errorMessage}>Your message is too long.</div>,
      ]);
      return;
    }

    // Validation -  If the form is empty display the error
    if (content.trim() === "") {
      setErrors([
        <div className={styles.errorMessage}>
          Please write a message if you wish to submit.
        </div>,
      ]);
      return;
    }

    const wallPostData = {
      profile_id: profileId,
      content: content,
    };

    createWallPost(wallPostData);
    setContent("");
    setErrors([]);
    setFormSubmitted(true);
  };

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  // Renders the form only if the user is logged in
  if (!currentUser) {
    return null;
  }

  // WallPostForm Structure
  return (
    <div>
      {formSubmitted ? (
        <Alert variant="secondary">
          <i className="fa-solid fa-circle-check fa-bounce"></i> You have successfully posted on the Community Wall.
        </Alert>
      ) : (
        <>
          <Button
            variant="secondary"
            onClick={toggleForm}
            aria-controls="wall-post-form-collapse"
            aria-expanded={isFormOpen}
            style={{ width: "100%" }}
          >
            {isFormOpen ? "Close Wall Post Form" : "Write a Wall Post"}
          </Button>
          <Collapse in={isFormOpen}>
            <Form
              onSubmit={handleSubmit}
              id="wall-post-form-collapse"
              className={wallPostStyles["wallPostForm"]}
            >
              <Form.Group>
                <Form.Label htmlFor="wallPostContent" srOnly>
                  Write a message on the wall:
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={6}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  id="wallPostContent"
                  placeholder="Write a message on the wall..."
                  style={{ backgroundColor: "#f8f8f8" }} // Inline styling for the form backgroundcolor
                />
              </Form.Group>
              {errors.length > 0 && (
                <Alert variant="warning">
                  {errors.map((error, index) => (
                    <div key={index} className={styles.errorMessage}>
                      {error}
                    </div>
                  ))}
                </Alert>
              )}
              <Button
                type="submit"
                className={`${btnStyles.Button} ${btnStyles.Bright}`}
                aria-label="Submit to the Wall"
              >
                Submit
              </Button>
            </Form>
          </Collapse>
        </>
      )}
    </div>
  );
};


export default WallPostCreateForm;