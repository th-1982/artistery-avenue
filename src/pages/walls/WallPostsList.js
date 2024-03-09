import React, { useEffect, useState } from "react";
import { Container, Collapse } from "react-bootstrap";
import axios from "axios";
import WallPost from "./WallPost";
import appStyles from "../../App.module.css";
import styles from "../../styles/WallPostsList.module.css";

const WallPostsList = ({ profileId, currentUser, mobile }) => {
  const [wallPosts, setWallPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const fetchWallPosts = async () => {
    try {
      const response = await axios.get(
        `https://th-1982-artistery-avenue-198c22334f81.herokuapp.com/walls/?profile_id=${profileId}`,
      );
      setWallPosts(response.data.results);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  // Fetch new wall posts every 1 second
  useEffect(() => {
    const intervalId = setInterval(fetchWallPosts, 5000); // set the millisecods = 1 seconds

    return () => {
      clearInterval(intervalId);
    };
  }, [profileId]);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  // WallPostList Structure
  return (
    <Container
      className={`${appStyles.Content} ${
        mobile ? "d-lg-none text-center mb-3" : ""
      }`}
    >
      <div
        className="text-center"
        onClick={toggleCollapse}
        style={{ cursor: "pointer" }}
      >
        <p>
          <i className="fa-regular fa-comment-dots fa-lg"></i>Community Wall
        </p>
      </div>
      <hr />
      <Collapse in={!isCollapsed}>
        <div className={styles.scrollableContainer}>
          {wallPosts.length > 0 ? (
            <div className={mobile ? "d-flex justify-content-around" : ""}>
              {wallPosts.map((wallPost) => (
                <WallPost
                  key={wallPost.id}
                  {...wallPost}
                  currentUser={currentUser}
                  isOwner={wallPost.is_owner}
                  mobile={mobile}
                />
              ))}
            </div>
          ) : (
            <p className={`${styles.centerText} text-center`}>
              <i className="fa-solid fa-spinner fa-spin-pulse fa-xs"></i> Loading Wall Posts...
            </p>
          )}
        </div>
      </Collapse>
    </Container>
  );
};

export default WallPostsList;