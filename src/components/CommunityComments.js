import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Collapse } from "react-bootstrap";
import styles from "../styles/CommunityComments.module.css";
import ChatComment from "./SnipetComments";

const CommunityComments = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Fetches all Comments from the endpoint
  const fetchComments = async () => {
    try {
      const response = await axios.get(
        "https://th-1982-artistery-avenue-198c22334f81.herokuapp.com/comments/",
      );
      setComments(response.data.results);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  // Toggle Collapse for the Component
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Container className={`${styles.container} ${styles.Content}`}>
      <div
        className="text-center"
        onClick={toggleCollapse}
        style={{ cursor: "pointer" }}
      >
        <p>
          <i className="fa-regular fa-comments fa-lg"></i> Latest Comments
        </p>
        <hr />
      </div>
      <Collapse in={!isCollapsed}>
        <div className={styles.chatBox}>
          {loading ? (
            <p className="text-center">Loading comments...</p>
          ) : error ? (
            <p className="text-center">Error fetching comments...</p>
          ) : comments.length > 0 ? (
            comments.map((comment) => (
              <ChatComment
                key={comment.id}
                profile_id={comment.profile_id}
                profile_image={comment.profile_image}
                owner={comment.owner}
                updated_at={comment.updated_at}
                content={comment.content}
                post={comment.post}
              />
            ))
          ) : (
            <p className="text-center">No comments available.</p>
          )}
        </div>
      </Collapse>
    </Container>
  );
};

export default CommunityComments;