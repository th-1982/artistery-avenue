import React, { useState } from "react";
import Media from "react-bootstrap/Media";
import Button from "react-bootstrap/Button";
import axios from "axios";
import btnStyles from "../../styles/Button.module.css";
import styles from "../../styles/Review.module.css";
import wallPostStyles from "../../styles/WallPost.module.css";

const WallPost = (props) => {
  const { id, owner, updated_at, content, currentUser, isOwner } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);
  const [showAlert, setShowAlert] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
    setShowAlert(false);
  };

  const handleSaveClick = async () => {
    try {
      const response = await axios.put(
       // `https://th-1982-artistery-avenue-198c22334f81.herokuapp.com/walls/${id}/`,
       `https://djangorestframework-api-38c4a098777a.herokuapp.com/walls/${id}/`,
        {
          content: editedContent,
        }
      );

      if (response.status === 200) {
        setIsEditing(false);
        setShowAlert(true);
      } else {
        // Handles the error
      }
    } catch (error) {
      // Handles the error
    }
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  // WallPost Structure
  return (
    <div className={wallPostStyles.wallPostContainer}>
      <Media>
        <Media.Body className="align-self-center ml-2">
          <div className={wallPostStyles.wallPostHeader}>
            <div>
              <span className={wallPostStyles.wallPostOwner}>{owner}</span>
              <span className={wallPostStyles.wallPostDate}>
                • {updated_at}
              </span>
            </div>
            {currentUser && isOwner && (
              <button
                className={`${styles.editButton} ${styles.editButtonDate}`}
                onClick={handleEditClick}
              >
                <i className="fa-solid fa-pen-to-square fa-sm"></i>
                <span className="sr-only">Edit</span>
              </button>
            )}
          </div>

          {isEditing ? (
            <>
              <textarea
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
                style={{ width: "100%" }}
              />
              <div
                className={`d-flex justify-content-center align-items-center ${wallPostStyles.editButtonContainer}`}
              >
                <Button
                  type="submit"
                  className={`${btnStyles.Button} ${btnStyles.Bright}`}
                  onClick={handleSaveClick}
                >
                  Update
                </Button>
                <Button
                  type="submit"
                  className={`${btnStyles.Button} ${btnStyles.Bright}`}
                  onClick={handleCancelClick}
                >
                  Cancel
                </Button>
              </div>
            </>
          ) : (
            <p>{editedContent}</p>
          )}
          {showAlert && (
            <div className="alert alert-secondary text-center" role="alert">
              Wall Post updated!
            </div>
          )}
        </Media.Body>
      </Media>
    </div>
  );
};

export default WallPost;