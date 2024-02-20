import Avatar from "./Avatar";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";

// Properties to load from Users Comments
const SnipetComments = (props) => {
  const { profile_id, profile_image, owner, updated_at, content, post } = props;

  // Comments Structure - Snipet for Filtered & Community Comments
  return (
    <>
      <hr />
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} />
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span className={styles.Owner}>{owner}</span>
          <small>
            <span className={styles.Date}>• {updated_at}</span>
          </small>
          <p>{content}</p>
          <Link to={`/posts/${post}/`}>
            <small>➥ View Post</small>
          </Link>
        </Media.Body>
      </Media>
    </>
  );
};

export default SnipetComments;