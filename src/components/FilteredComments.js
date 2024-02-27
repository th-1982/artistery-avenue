import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Container, Collapse } from "react-bootstrap"; // Import Collapse
import styles from "../styles/CommunityComments.module.css";
import SnipetComments from "./SnipetComments";

// Filtered Comments Component
const FilteredComments = ({ profileId }) => {
  const [comments, setComments] = useState([]);
  const [profile, setProfile] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false); // State for collapse

  const fetchProfileDetails = useCallback(async () => {
    try {
      if (!profileId) {
        // Avoids making the request when profileId is undefined
        return;
      }
      const response = await axios.get(
        `https://th-1982-artistery-avenue-198c22334f81.herokuapp.com/profiles/${profileId}/`,
      );
      setProfile(response.data);
    } catch (error) {
      console.error("Error fetching profile details:", error);
    }
  }, [profileId]);

  // Fetches all Comments from the endpoint  and filters under the profile id
  const fetchComments = useCallback(async () => {
    try {
      if (!profileId) {
        // Avoids making the request when profileId is undefined
        return;
      }
      const response = await axios.get(
        "https://th-1982-artistery-avenue-198c22334f81.herokuapp.com/comments/",
      );
      const filteredComments = response.data.results.filter(
        (comment) => comment.profile_id === profileId,
      );
      setComments(filteredComments);
    } catch (error) {
      // console.error('Error fetching comments:', error);
    }
  }, [profileId]);

  useEffect(() => {
    fetchProfileDetails();
    fetchComments();
  }, [fetchProfileDetails, fetchComments]);

  // Toggle Collapse for the Component
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Filtered(User) Comments Structure
  return (
    <Container className={`${styles.container} ${styles.Content}`}>
      <div
        className="text-center"
        onClick={toggleCollapse}
        style={{ cursor: "pointer" }}
      >
        {profile ? (
          <p>
            <i className="fa-regular fa-comment fa-lg"></i>
            {profile.owner}'s Comments
          </p>
        ) : (
          <p className="text-center">Loading...</p>
        )}
        <hr />
      </div>
      <Collapse in={!isCollapsed}>
        <div className={styles.chatBox}>
          {comments.length > 0 ? (
            comments.map((comment) => (
              <SnipetComments
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

export default FilteredComments;